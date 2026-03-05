interface Env {
  GEMINI_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { prompt } = await context.request.json() as { prompt: string };
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Gemini API Key is missing" }), { status: 500 });
    }

    // Gemini API 엔드포인트 (Flash 모델 사용 - 빠르고 무료 티어 최적화)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemInstruction = `
      You are a professional board game expert and curator for "BoardMaster". 
      Your goal is to recommend the best board games based on the user's criteria.
      
      Requirements:
      1. Provide exactly 3 game recommendations.
      2. For each game, provide the name and a brief, engaging reason why it fits their request.
      3. CRITICAL: Try to find the correct BoardGameGeek (BGG) ID for each game.
      4. Return the response in a strict JSON format so the app can parse it.
      
      Response Format (Example):
      {
        "recommendations": [
          { "name": "Catan", "bggId": 13, "reason": "Classic resource management that's easy to learn." },
          ...
        ],
        "message": "Here are 3 games perfect for your group!"
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
          response_mime_type: "application/json"
        }
      })
    });

    const data = await response.json() as any;
    const aiResponse = data.candidates[0].content.parts[0].text;

    return new Response(aiResponse, {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
