import './App.css'
import MemoPage from "./MemoPage.jsx";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [memos, setMemos] = useState([
  ]);

  const memoNameRef = useRef();

  const handleAddMemo = () => {
    //コンソールに入力した値を表示させる
    // console.log(todoNameRef.current.value);
    const name = memoNameRef.current.value
    if (name === "") return
    setMemos((prevmemos) => {
      return [...prevmemos, { id: uuidv4(), name: name }]
    })

    memoNameRef.current.value = null
  }

  return (
    <>
      <input type="text" ref={memoNameRef} />
      <button onClick={handleAddMemo}>追加</button>
      <MemoPage memos={memos} />
    </>
  )
}

export default App
