import React, {Component} from 'react'
import './App.css'
class App extends Component {
    render(){
        return(
            <div className="app">
            
                <div className="timer">10</div>
            <div style={{textAlign: 'center'}}>
            <button className="btn">-</button>
            <button className="btn">+</button>
            </div>
            </div>
        )
    }
}
export default App;