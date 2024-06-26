import { useEffect, useState } from "react";
import Affichage from "./Affichage";
import Header from "./Header";
import Keys from "./Keys";

function App() {
  const [affichage, setAffichage] = useState("0")
  const [theme,setTheme] = useState(1)
  const themes = {
    1: {
      backgroundColor: 'hsl(222, 26%, 31%)',
    },
    2: {
      backgroundColor: 'hsl(0, 0%, 90%)',
    },
    3: {
      backgroundColor: 'hsl(268, 75%, 9%)',
    },
  }
  useEffect(()=>{
    document.body.style.backgroundColor = themes[theme].backgroundColor;
  },[theme])
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert("Your browser (Samsung Internet) may not show this website" +
            " correctly. Please consider using a standards-compliant" +
            " browser instead. \n\n" +
            "We recommend Firefox, Microsoft Edge, or Google Chrome.");
    }
  }, []);
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme}/>
      <Affichage theme={theme} affichage={affichage}/>
      <Keys theme={theme} setAffichage={setAffichage}/>
    </div>
  );
}

export default App;
