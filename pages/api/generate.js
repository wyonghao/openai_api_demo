import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log("YW all field: ",req.body);
  console.log("YW,type: ",req.body.questions);
  console.log("YW,value: ",req.body.inputValue);
  const completion = await openai.createChatCompletion({
    //model: "text-davinci-003",
    model: "gpt-3.5-turbo",
    //prompt: generatePrompt(req.body),
    messages: [{role: "user", content:  generatePrompt(req.body)}],
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].message });
}

/*
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
});
console.log(completion.data.choices[0].message);
*/

function generatePrompt(UserInputs) {
  const questiontype = UserInputs.questions;
  const charater = UserInputs.inputValue;
    //animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    //console.log("check capitalizedAnimal",capitalizedAnimal);
    var my_promt = `${questiontype}: "${charater}"`;
  console.log("The prompt is",my_promt);
  return my_promt;
}
