const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

 require('dotenv').config();
 const { Configuration, OpenAIApi } = require("openai");
 const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
 });
 const openai = new OpenAIApi(configuration);

// const runPrompt = async () => {
//     const prompt = 
//     'how are you today?';
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_tokens: 2048,
//         temperature: 1,
//     });
//     console.log('Question:', response.data.choices[0].text);
// };
// runPrompt();

 app.get('/:q', async(req, res) => {
    const question=req.params;
    //const question = req.query;
   // const question = 'How are you?';
     const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: question.q,
          max_tokens: 2000,
          temperature: 1,
      });
    console.log(question.q);
    //res.json({'A': 'response.data.choices[0].text'});
    console.log('Answer:', response.data.choices[0].text);
    res.json({'Answer': response.data.choices[0].text});
 })  
app.listen(3000)





