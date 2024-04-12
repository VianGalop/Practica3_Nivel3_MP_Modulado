import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Resultado } from "./components/Result";
import { TipPorcentajes } from "./components/TipPorcentaje";

function App() {
  const [tip, setTip] = useState(null);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState({
    tipTotal: "00.00",
    tipAmount: "00.00",
  });

  const Calcular = () => {
      const tipResult = () =>  (bill * (tip/100)) / people
      const totalResult = ()=>  (bill * (tip/100) + bill)/people

      if (tip > 0 && bill > 0 && people > 0) {
        setResult({tipTotal: tipResult(), tipAmount:totalResult()})
      }
  };

  const Reset  = () =>{
    setBill(0)
    setTip(null)
    setPeople(1)
    setResult({tipTotal:"0", tipAmount:"0"})
  }

  useEffect(() => {
    Calcular();
  }, [tip, bill, people]);

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt=""></img>
      </header>
      <div className="general-wrapper">

        <div className="data-wrapper">
          <h1>Bill</h1>
          <Input label="bill" value={bill} min="0" onChange={(e) =>setBill(parseFloat(e.target.value))} />

          <h2>Select Tip %</h2>
          <TipPorcentajes tip={tip} setTip={setTip} />

          <h1>Number of People</h1>
          <Input label="people" value={people} min="1" onChange={(e) =>setPeople(parseFloat(e.target.value))} />
        </div>

        <div className="result-wrapper">
          <Resultado tipTotal={result.tipTotal} tipAmount={result.tipAmount} />
          <button type="button" id="reset-button" className="reset-button" onClick={Reset}>RESET</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
