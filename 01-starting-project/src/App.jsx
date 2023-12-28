import headerImg from "./assets/investment-calculator-logo.png";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div>
      <section>
        <header id="header">
          <img src={headerImg} alt="Header Image" />
          <h1>Investment Calculator</h1>
        </header>
      </section>
      <section>
        <UserInput />
      </section>
    </div>
  );
}

export default App;
