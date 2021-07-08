import React, {Component} from 'react'
import './App.css'
class App extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState((el)=>{
            return(
                {
                    count: el.count + 1
                }
            )
        });
    }
    handleDecrement = () => {
        if( this.state.count > 0 ){
            this.setState((el)=>{
                return(
                    {
                        count: el.count - 1
                    }
                )
            });
        }
    }
    render(){
        return(
            <div className="app">
            
                <div className="timer">{this.state.count}</div>
            <div style={{textAlign: 'center'}}>
            <button onClick={this.handleDecrement} className="btn">-</button>
            <button  onClick={this.handleIncrement} className="btn">+</button>
            </div>
            </div>
        )
    }
}
export default App;