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
      return [...prevmemos, { id: uuidv4(), name: name, checked: false }]
    })

    memoNameRef.current.value = null
  }

  const handleDeleteMemo = () => {
    const newMemos = memos.filter((memo) => !memo.checked)
    setMemos(newMemos)
  }

  const toggleMemo = (id) => {
    const newMemos = [...memos]
    const memo = newMemos.find((memo) => memo.id === id)
    memo.checked = !memo.checked
    setMemos(newMemos)
  }
  return (
    <>
      <input type="text" ref={memoNameRef} />
      <button onClick={handleAddMemo}>追加</button>
      <button onClick={handleDeleteMemo}>削除</button>
      <MemoPage memos={memos} toggleMemo={toggleMemo} />
    </>
  )
}

export default App
