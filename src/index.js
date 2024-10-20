import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const num1 = 8;
  const num2 = 15;

  return (
    <React.Fragment>
      {
        (() => {
          if (num1 > num2) {
            return <p>{num1} მეტია {num2}-ზე</p>;
          } else if (num1 < num2) {
            return <p>{num1} ნაკლებია {num2}-ზე</p>;
          } 
        })()
      }
    </React.Fragment>
  );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
