import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;
