interface Env {
  GEMINI_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { prompt } = await context.request.json() as { prompt: string };
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Gemini API Key is missing" }), { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // Use v1beta which supports 'response_mime_type' for reliable JSON output
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemInstruction = `
      You are a professional board game expert and curator for "BoardMaster". 
      Your goal is to recommend exactly 3 best board games based on the user's criteria.
      
      Requirements:
      1. Provide name, a brief engaging reason, and the correct BoardGameGeek (BGG) ID for each.
      2. Return the response in strict JSON format.
      3. If the user asks in Korean, provide the 'reason' and 'message' in Korean.
      
      Response Format:
      {
        "recommendations": [
          { "name": "Game Name", "bggId": 123, "reason": "Why this game fits." }
        ],
        "message": "Intro message here."
      }
    `;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `${systemInstruction}\n\nUser Request: ${prompt}` }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          response_mime_type: "application/json" // Force JSON output (v1beta only)
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json() as any;
      return new Response(JSON.stringify({ 
        error: "Gemini API call failed", 
        details: errorData.error?.message || response.statusText 
      }), { 
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json() as any;
    const aiResponse = data.candidates[0].content.parts[0].text;

    return new Response(aiResponse, {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

// 범용 핸들러를 onRequestPost로 정확히 연결
export const onRequest = onRequestPost;
