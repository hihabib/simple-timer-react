import React, {Component} from 'react'
import './App.css'
class App extends Component {
    state = {
        count: 0,
        intervalId: null
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
    
    handleStart = () => {
        const handleInterval = () => {
                if(this.state.count>0){
                    this.setState((el)=>{
                        return(
                            {
                                count: el.count - 1
                            }
                        );
                    }, ()=>{
                        if(this.state.count === 0 ){
                            clearInterval(this.state.intervalId);
                        }
                    });
                }
        }
        
        this.setState({intervalId: setInterval(handleInterval, 1000)});
        
    }
    handlePause = () => {
        if(this.state.intervalId){
            clearInterval(this.state.intervalId)
        }
    }
    handleReset = () => {
        this.setState(()=>{
            return(
                {
                    count: 0
                }
            );
        }, ()=>{
            clearInterval(this.state.intervalId);
        });
    }
    render(){
        return(
            <div className="app">
            
                <div className="timer">{this.state.count}</div>
            <div style={{textAlign: 'center'}}>
            <button onClick={this.handleDecrement} className="btn">-</button>
            <button  onClick={this.handleIncrement} className="btn">+</button><br/>
            <button onClick={this.handleStart} className="btn">Start</button>
            <button onClick={this.handlePause} className="btn">Pause</button>
            <button onClick={this.handleReset} className="btn">Reset</button>
            </div>
            </div>
        )
    }
}
export default App;