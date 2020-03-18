import React from 'react'

class Stopwatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: 0,
            mins: 0,
            sec: 0,
            ms: 0,
            flag:true
        }
    }
    
    start = () => {
        if(this.state.flag===true){
            this.change = setInterval(() => {
                this.setState({ms: this.state.ms + 1 ,flag:false})
            },10)
            
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if(this.state.ms!==prevState.ms){
            if(this.state.ms>100){
                this.setState({ms:0,sec:this.state.sec+1})
            }
            if(this.state.sec>60){
                this.setState({sec:0,mins:this.state.mins+1})
            }
            if(this.state.mins>60){
                this.setState({mins:0,hours:this.state.hours+1})
            }
        }
    }
    
    reset = () => {
        clearInterval(this.change)
        this.setState({hours: 0,mins: 0,sec: 0,ms: 0,flag:true})
    }

    stop = () => {
        clearInterval(this.change)
        this.setState({flag:true})
    }

    render() {
        if(this.state.flag===true){
            return (
                <div>
                    <div className='border border-dark'>
                    <div className='row m-2 pt-4'>
                            <div className='display-3'>{this.state.hours}</div><p className='pt-5'>hours</p>
                            <div className='display-3'>{this.state.mins}</div><p className='pt-5'>mins</p>
                            <div className='display-3'>{this.state.sec}</div><p className='pt-5'>secs</p>
                            <div className='display-3'>{this.state.ms}</div><p className='pt-5'>ms</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div onClick={this.start} className='btn-lg btn-primary mx-4' style={{width:'100px'}}>START</div>
                        <div onClick={this.reset} className='btn-lg btn-dark mx-4'>RESET</div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <div className='border border-dark'>
                    <div className='row m-2 pt-4'>
                            <div className='display-3'>{this.state.hours}</div><p className='pt-5'>hours</p>
                            <div className='display-3'>{this.state.mins}</div><p className='pt-5'>mins</p>
                            <div className='display-3'>{this.state.sec}</div><p className='pt-5'>secs</p>
                            <div className='display-3'>{this.state.ms}</div><p className='pt-5'>ms</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div onClick={this.stop} className='btn-lg btn-warning mx-4' style={{width:'100px'}}>STOP</div>
                        <div onClick={this.reset} className='btn-lg btn-dark mx-4'>RESET</div>
                    </div>
                </div>
            )
        }
    }
}

export default Stopwatch