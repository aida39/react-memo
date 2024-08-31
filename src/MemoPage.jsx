import Memo from "./Memo.jsx";
import React from 'react';

const MemoPage = ({ memos }) => {
    return (
        memos.map((memo) => <Memo memo={memo} key={memo.id} />)
    );
};

export default MemoPage;