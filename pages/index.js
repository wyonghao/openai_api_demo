
import Head from "next/head";
import { useState } from 'react';
import styles from "./index.module.css";


export default function Home() {
  const [questions, setQuestions] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();

async function onSubmit(event) {
    event.preventDefault();
    try {
      // 这里使用`fetch`来模拟异步提交表单数据
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions: questions,
          inputValue: inputValue,
        }),
      });
      const data = await response.json();
      // 如果请求成功，这里可以处理返回的数据
      console.log(data.result);
      setResult(data.result);
      setInputValue("");      
    } catch (error) {
      // 如果请求失败，这里可以捕获错误
      console.error(error);
    }
  }
  return (
    <div>
      <Head>
        <title>BCU OpenAI API Demo</title>
        <link rel="icon" href="/BCUlogo.png" />
      </Head>
    
    <main className={styles.main}>
        <img src="/bculogolong.JPG" className={styles.img} />
        <h4>Open AI API demo website for Network Automation Students</h4>
        <h3>Students AI Assistant Version 0.2</h3>       

    <form onSubmit={onSubmit}>
      <label>
        Question Type:
        <select value={questions} onChange={(event) => setQuestions(event.target.value)}>
          <option value="">Please select tasks</option>
          <option value="Improve the English Writing of the following: ">Improve English Writing</option>
          <option value="Summarize the following article in three paragraphs as bullet points: ">Summarise</option>
          <option value="Answer question">General Question</option>
        </select>
      </label> 
      <br />
      <label>
        Input your task details here:
        <textarea id="myTextArea"
         rows="5" cols="45"
         placeholder="Input your questions here"
         value={inputValue}
         onChange={(event) => setInputValue(event.target.value)}
         ></textarea>

      </label>
      <br />
      <button type="submit">Give me some ideas</button>
    </form>
    {/* format the styles.result so that it stays at 70% of the screen in the middle */}
    
    <div className={styles.result}>{result}</div>
    **** above will give the result in plain text ****
    <div><footer><br></br>Based on <a href="https://github.com/openai/openai-quickstart-node">OpenAI Quick Start</a> and
 modified by <a href="https://scholar.google.co.uk/citations?user=lozWo7wAAAAJ&hl=en">Leo Wang</a></footer> </div>
      </main>
    </div>

  );
}
