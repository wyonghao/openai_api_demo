
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
        <title>6D OpenAI Quickstart</title>
        <link rel="icon" href="/6d.jpg" />
      </Head>
    
    <main className={styles.main}>
        <img src="/6d.jpg" className={styles.icon} />
        <h4>六度ai测试</h4>
        <h3>六度AI编辑部助手0.2版本</h3>       

    <form onSubmit={onSubmit}>
      <label>
        问题模式：
        <select value={questions} onChange={(event) => setQuestions(event.target.value)}>
          <option value="">请选择工作模式</option>
          <option value="Improve the English Writing of the following: ">修改英文</option>
          <option value="Summarize the following article in three paragraphs as bullet points: ">总结要点</option>
          <option value="回答问题">聊天(中文)</option>
        </select>
      </label> 
      <br />
      <label>
        内容：
        <textarea id="myTextArea"
         rows="5" cols="45"
         placeholder="Input your questions here"
         value={inputValue}
         onChange={(event) => setInputValue(event.target.value)}
         ></textarea>

      </label>
      <br />
      <button type="submit">给点想法</button>
    </form>
    {/* format the styles.result so that it stays at 70% of the screen in the middle */}
    
    <div className={styles.result}>{result}</div>
    **** above will give the result in plain text ****
    <div><footer><br></br>基于Open AI开发 Copyright by 6DO Leo</footer> </div>
      </main>
    </div>

  );
}
