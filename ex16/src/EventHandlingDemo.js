import { useState } from 'react';

function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="event-demo">
      <h1>Event Handling Demo</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={handleButtonClick}>
        Increase Count
      </button>
    </main>
  );
}

export default EventHandlingDemo;
