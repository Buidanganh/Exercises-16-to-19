import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  // Tăng giá trị count lên 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Lưu giá trị hiện tại của count vào snapshot
  const handleSnapshot = () => {
    setSnapshot(count);
  };

  // Khôi phục giá trị count từ snapshot nếu đã có bản lưu
  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div>
      <h1>State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      <button onClick={handleRestore}>Restore Snapshot</button>
    </div>
  );
};

export default SnapshotDemo;