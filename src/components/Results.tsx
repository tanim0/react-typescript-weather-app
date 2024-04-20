import { ResultsState } from "../App"

type ResultsProps = {
    results: ResultsState
}

const Results = (props: ResultsProps) => {
    return (
        <>
            {/* ロジカルオペレーター・・・条件が正しかったら右辺の内容を表示 */}
            {props.results.country &&
                <>
                    <div className="results-countryresults-country">{props.results.country}</div>
                    <div className="results-city">{props.results.cityName}</div>
                    <div className="results-temp">{props.results.temperature}<span>℃</span>
                    </div>
                    <div className="results-condition">
                        <img src={props.results.icon} alt="icon" />
                        <span>{props.results.conditionText}</span>
                    </div>
                </>}
        </>
    )
}

export default Results;