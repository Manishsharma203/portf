import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hours: 0,
            mins: 5,
            sec: 0,
            ms: 0,
            flag:true,
            inputFlag:true
        }
        this.obj={}
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:Math.abs(e.target.value)
        })
    }
    
    start=()=>{
        this.obj=this.state
        if(this.state.flag===true){
            this.setState({flag:false,inputFlag:true})
            this.change=setInterval(() => {
                    this.setState({ms:this.state.ms-1})
                    if(this.state.ms<1 && this.state.sec>0){
                        this.setState({ms:99,sec:this.state.sec-1})
                    }
                    if(this.state.sec<1 && this.state.mins>0){
                        this.setState({sec:59,mins:this.state.mins-1})
                    }
                    if(this.state.mins<1 && this.state.hours>0){
                        this.setState({mins:59,hours:this.state.hours-1})
                    }
                    if(this.state.ms<0){
                        this.setState({ms:0})
                    }
            },10)
        }
    }
    componentWillUnmount=()=>{
        if(this.state.flag===false){
            clearInterval(this.change)
            this.setState({hours:this.obj.hours,mins:this.obj.mins,sec:this.obj.sec,ms: this.obj.ms,flag:true,inputFlag:true})
        }
    }

    reset=()=>{
        if(this.state.flag===false){
            clearInterval(this.change)
            // console.log(this.obj)
            this.setState({hours:this.obj.hours,mins:this.obj.mins,sec:this.obj.sec,ms: this.obj.ms,flag:true,inputFlag:true})
            }
    }
    stop=()=>{
            clearInterval(this.change)
            this.setState({flag:true,inputFlag:true})
    }

    inputClick=()=>{
        this.setState({inputFlag:false,flag:true})
        clearInterval(this.change)
    }

    render(){
        return (
            <div>
                <div className='h3 text-primary m-2'>Set the Timer ⬇</div>
                <div onClick={this.inputClick} className='border border-dark'>
                    {this.state.inputFlag?
                    (<div className='row mx-4'>
                        <div className='display-3'>{this.state.hours}</div><p className='pt-5'>hours</p>
                        <div className='display-3'>{this.state.mins}</div><p className='pt-5'>mins</p>
                        <div className='display-3'>{this.state.sec}</div><p className='pt-5'>secs</p>
                        <div className='display-3'>{this.state.ms}</div><p className='pt-5'>ms</p>
                    </div>):
                    (<div className='row mx-4'>
                        <input name='hours' value={this.state.hours} onChange={this.changeHandler} placeholder='0' className='col-1 text-muted display-3 border border-white'/><p className='col-1 pt-5'>hours</p>
                        <input name='mins' value={this.state.mins} onChange={this.changeHandler} placeholder='0' className='col-1 text-muted display-3 border border-white'/><p className='col-1 pt-5'>mins</p>
                        <input name='sec' value={this.state.sec} onChange={this.changeHandler} placeholder='0' className='col-1 text-muted display-3 border border-white'/><p className='col-1 pt-5'>secs</p>
                        <input name='ms' value={this.state.ms} onChange={this.changeHandler} placeholder='0' className='col-1 text-muted display-3 border border-white'/><p className='col-1 pt-5'>ms</p>
                    </div>)
                    }
                </div>

                <div className='row my-2'>
                    {this.state.flag?
                    (<div onClick={this.start} className='btn-lg btn-primary mx-4' style={{width:'100px'}}>START</div>):
                    (<div onClick={this.stop} className='btn-lg btn-warning mx-4' style={{width:'100px'}}>STOP</div>)
                    }
                    <div onClick={this.reset} className='btn-lg btn-dark mx-4'>RESET</div>
                </div>
            </div>
        )
    }
}

export default Timer