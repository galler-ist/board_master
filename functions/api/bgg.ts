import { XMLParser } from "fast-xml-parser";

interface Env {
  BGG_API_TOKEN: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { searchParams } = new URL(context.request.url);
  const searchQuery = searchParams.get("search");
  const idQuery = searchParams.get("id");

  let bggUrl = "";

  if (searchQuery) {
    bggUrl = `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(searchQuery)}&type=boardgame`;
  } else if (idQuery) {
    bggUrl = `https://boardgamegeek.com/xmlapi2/thing?id=${idQuery}&stats=1`;
  } else {
    return new Response(JSON.stringify({ error: "Missing search or id parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(bggUrl, {
      headers: {
        "User-Agent": "BoardMaster/1.0 (https://github.com/user/boardmaster)",
        "Authorization": `Bearer ${context.env.BGG_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("BGG API Error:", response.status, errorText);
      return new Response(JSON.stringify({ error: `BGG API returned ${response.status}`, details: errorText }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const jsonData = parser.parse(xmlData);

    return new Response(JSON.stringify(jsonData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

// GET 요청 외에도 처리할 수 있도록 onRequest로 매핑
export const onRequest = onRequestGet;
