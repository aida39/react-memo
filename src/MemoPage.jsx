import Memo from "./Memo.jsx";
import React from 'react';

const MemoPage = ({ memos,toggleMemo }) => {
    return (
        memos.map((memo) => <Memo memo={memo} key={memo.id} toggleMemo={toggleMemo } />)
    );
};

export default MemoPage;