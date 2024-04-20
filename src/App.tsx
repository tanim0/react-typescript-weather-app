import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [city, setCity] = useState<string>("");

  // TypeScriptを使う場合はeにも型設定が必要。(型がわからないとき = any)
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("http://api.weatherapi.com/v1/current.json?key=b1b0285f95c743d6b8862430242004&q=London&aqi=no")
        .then(res => res.json())
        .then(data => console.log(data))
  }

  return (
    <div>
      {/* データ渡すとき・・・名前＝｛渡すもの} */}
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results />
    </div>
  );
}

export default App;