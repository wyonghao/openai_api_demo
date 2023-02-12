import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log("YW all field: ",req.body);
  console.log("YW,type: ",req.body.questions);
  console.log("YW,value: ",req.body.inputValue);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body),
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(UserInputs) {
  const questiontype = UserInputs.questions;
  const charater = UserInputs.inputValue;
    //animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    //console.log("check capitalizedAnimal",capitalizedAnimal);
    var my_promt = `${questiontype}: "${charater}"`;
  console.log("The prompt is",my_promt);
  return my_promt;
}
