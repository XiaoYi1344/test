import React, { useState } from 'react';

function WarningBanner({ warn }) {
    if (!warn) {
      return null;
    }
  
    return <div className="warning">Coi chừng, có lỗi nè!</div>;
  }
  
  function App() {
    const [showWarning, setShowWarning] = useState(true);
  
    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button onClick={() => setShowWarning(!showWarning)}>
          {showWarning ? "Hide" : "Show"} Warning
        </button>
      </div>
    );
  }
  
  export default App;