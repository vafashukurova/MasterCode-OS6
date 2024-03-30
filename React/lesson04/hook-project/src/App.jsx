import React, { Component } from 'react'


class App extends Component {
  constructor(props){
    super(props)
    console.log("constructor")
    // console.log(document.body.innerHTML)

    this.state={date: new Date()}
  }


  componentDidMount(){
    console.log("componentDidMount")
    // console.log(document.body.innerHTML)
    
   this.timerId= setInterval(()=>this.tick(),
    1000)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
    const currentDate=new Date()
    if(currentDate.getMinutes()>=49){
      this.componentWillUnmount()
    }
  }


  componentWillUnmount(){
   clearInterval(this.timerId)
   console.log("componentWillUnMount")
  }


  render() {
    console.log("render")
    // console.log(document.body.innerHTML)
    return (
      <>
        <h1>hello world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      
      </>

    )
  }
}


export default App;