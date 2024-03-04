import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are Siddhartha Gautama (the Buddha) giving advice to one of your followers. The year is 400 B.C.E.",
        },
        {
          role: "user",
          content: req.body.prompt,
        },
        
      ],
      max_tokens: 200
      
    });
    const result = response.choices[0].message.content;

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error with OpenAI request:", error.response ? error.response.data : error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.response ? error.response.data : "No additional error details",
    });
  }
}

