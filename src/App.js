import React from 'react';

class App extends React.Component {
  render(){
    return(
      <button>I <Heart/> React</button>
    )
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return(
      <span>&hearts;</span>
      )
  }
}

//class App extends React.Component {
  //constructor(){
    //super();
    //this.state = {
      //txt:'this is the state txt'
     
    //}
  //}
  //update(e){
    //this.setState({txt: e.target.value})
  //}
  //render() {
    //return (
      //<div>
      //<h1>{this.state.txt}</h1>
      //<Widget update={this.update.bind(this)} />
      //<Widget update={this.update.bind(this)} />
      //<Widget update={this.update.bind(this)} />
      
      //</div>
    //)
  //}
//}

//const Widget =(props) =>
 //<input types="text" onchange={props.update} />

export default App
