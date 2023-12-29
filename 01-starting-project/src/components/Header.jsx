import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="Header Image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
