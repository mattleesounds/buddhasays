import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptInput }),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(data.result);
    setPromptInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/buddha.png" />
      </Head>
      <body className={styles.body}>
        <main className={styles.main}>
          <img src="/buddha.png" className={styles.icon} />
          <h3>Buddha Says</h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="prompt"
              placeholder="What is on your mind, my friend?"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
            />
            <input type="submit" value="Generate response" />
          </form>
          <div className={styles.result}>{result}</div>
        </main>
      </body>
    </div>

  );
}
