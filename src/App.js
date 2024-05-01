import { useState } from "react";
import Affichage from "./Affichage";
import Header from "./Header";
import Keys from "./Keys";

function App() {
  const [affichage, setAffichage] = useState("0")
  return (
    <div className="App">
      <Header/>
      <Affichage affichage={affichage}/>
      <Keys affichage={affichage} setAffichage={setAffichage}/>
    </div>
  );
}

export default App;
