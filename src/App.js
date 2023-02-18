import { Component } from 'react'
import './App.css'
import { BiCalculator, BiHistory } from 'react-icons/bi'
import { VscClearAll } from 'react-icons/vsc'
import { MdBackspace } from 'react-icons/md'
import Keypad from './Components/keypad'
import HistoryItem from './Components/historyItem'
class App extends Component {
  constructor(props) {
    super(props)
    let history = JSON.parse(localStorage.getItem("_history"));
    if (history === null) {
      history = []
    }
    this.state = { input: '', history: false, historyContent: history }
  }
  clickedBtn = (value) => {
    this.setState(prevstate => ({ input: prevstate.input + value }))
  }
  equalBtn = () => {
    const { input } = this.state
    try {
      const result = "= " + eval(input).toString()
      const item = { input, result }
      this.setState({ input: result })
      this.setState(prevstate => ({ historyContent: [...prevstate.historyContent, item] }))
    }
    catch (e) {
      this.setState({ input: "Error" })
    }
  }
  clear = () => {
    this.setState({ input: "" })
  }
  goToHistory = () => {
    const { historyContent } = this.state
    this.setState(prevstate => ({ history: !prevstate.history }))
    localStorage.setItem("_history", JSON.stringify(historyContent));
  }
  backSpace = () => {
    const { input } = this.state
    const resinput = input.slice(0, input.length - 1)
    this.setState({ input: resinput })
  }
  clearHistory = () => {
    localStorage.removeItem("_history")
    this.setState({ historyContent: [] })
  }
  calculator = () => {
    const { input } = this.state
    const className = input.length > 45 ? "display-very-small" : input.length > 12 ? "display-small" : null
    return (
      <div>
        <div className='icon-container'>
          <BiHistory size='20' color='#fff' className='icon' onClick={this.goToHistory} title="history" />
          <MdBackspace size='20' color='#fff' className='icon' onClick={this.backSpace} />
        </div>
        <p className={`display ${className}`}>{input}</p>
        <Keypad clickedBtn={this.clickedBtn} equalBtn={this.equalBtn} clear={this.clear} />
      </div>
    )
  }
  EditHistory = input => {
    this.setState({ history: false, input: input })
  }
  History = () => {
    const { historyContent } = this.state
    return (
      <div className='history'>
        <div className='icon-container'>
          <BiCalculator size='20' color='#fff' className='icon' onClick={this.goToHistory} title="calculator" />
          <p className='entries'>{historyContent.length}</p>
          <VscClearAll size='20' color='#fff' className='icon' onClick={this.clearHistory} title="calculator" />
        </div>
        {historyContent.length > 0 ?
          <div className='history-list'>
            {historyContent.map(eachItem => <HistoryItem item={eachItem} EditHistory={this.EditHistory} key={eachItem} />)}
          </div>
          :
          <div className='no-history'>
            <p>Empty!</p>
          </div>

        }

      </div>
    )

  }
  render() {
    const { history } = this.state
    return (
      <div className="bg-container">
        <div className="calculator">
          {history ?
            this.History()
            :
            this.calculator()
          }
        </div>
      </div>
    )
  }
}
export default App