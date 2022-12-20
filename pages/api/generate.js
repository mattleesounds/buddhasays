import { Configuration, OpenAIApi } from "openai";

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
  /* const capitalizedAnimal =
    animal[0].toUpperCase() + .slice(1).toLowerCase(); */
  return `Siddhartha Gautama, also known as the Buddha, 
  is giving advice to one of his followers. The year is 400 B.C.E.

  Follower: ${prompt}
  Siddhartha: `;
}
