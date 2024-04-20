import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

type ResultsState =  {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  // satate・・・データを保管する場所
  const [city, setCity] = useState<string>("");
  
  const [results, setResults] = useState<ResultsState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  // TypeScriptを使う場合はeにも型設定が必要。(型がわからないとき = any)
  // eにはReactの用意している特別な型を書く。
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=b1b0285f95c743d6b8862430242004&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
          setResults({
            country: data.location.country,
            cityName: data.location.name,
            temperature: data.current.temp_c,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon
          })
        })
  }

  return (
    <div className="wrapper">
      <div className="container">
        {/* データ渡すとき・・・名前＝｛渡すもの} */}
        <Title />
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;