import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState<string>("");
    
    // TypeScriptを使う場合はeにも型設定が必要。(型がわからないとき = any)
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=b1b0285f95c743d6b8862430242004&q=London&aqi=no")
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <form>
            <input
                type="text"
                name="city"
                placeholder="都市名"
                onChange={e => setCity(e.target.value)}
            />
            <button type="submit" onClick={getWeather}>
                Get Weather
            </button>
        </form>
    );
};

export default Form;