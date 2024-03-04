/* import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.6,
    max_tokens: 1000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  return `Siddhartha Gautama, also known as the Buddha, 
  is giving advice to one of his followers. The year is 400 B.C.E.

  Follower: ${prompt}
  Siddhartha: `;
}
 */

/* import { Configuration, OpenAIApi, OpenAI } from "openai"; */
import OpenAI from "openai"

/* const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}); */
/* const openai = new OpenAIApi(configuration); */
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
      
    });

    //console.log(completion.choices[0].message.content)

    // Extract the text from the latest assistant message
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

