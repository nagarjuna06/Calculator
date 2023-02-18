import './index.css'
const HistoryItem = props => {
    const { item, EditHistory } = props
    const { input, result } = item
    return (
        <div className="history-item" onClick={() => EditHistory(input)}>
            <p>{input}</p>
            <p>{result}</p>
        </div>
    )

}
export default HistoryItem