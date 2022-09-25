import Feedback from "./feedback/Feedback"
import React from "react";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < Feedback></Feedback>
    </div>
    
  );

}
export default App;
