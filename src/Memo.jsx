import React from 'react';

const Memo = ({ memo,toggleMemo }) => {
    const handleMemoClick = () => {
        toggleMemo(memo.id)
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={memo.checked}
                readOnly
                onChange={handleMemoClick}
            />

            <span>{memo.name}</span>
        </div>
    );
};

export default Memo;