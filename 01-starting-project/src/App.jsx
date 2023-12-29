import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newInput) => {
    setUserInput((prevInvesment) => {
      return {
        ...prevInvesment,
        [inputIdentifier]: newInput,
      };
    });
  };

  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Result input={userInput} />
    </div>
  );
}

export default App;
