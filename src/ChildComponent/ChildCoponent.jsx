import React, { Component } from "react";
import Card from './Card'

class ChildComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
         number: 0,
         btnCong: "+",
         btnTru: "-",

        };
    }
    onHandleClick = () =>{
        this.setState({number: this.state.number + 1});
    }
    onHandleClick1 = () =>{
        this.setState({number: this.state.number - 1});
    }
  render() {
    return (
      <div>         
        <Card
            limitNumber={15}
            btnCong={this.state.btnCong}
            btnTru={this.state.btnTru}
            number={this.state.number}
            onHandleClick={this.onHandleClick}
            onHandleClick1={this.onHandleClick1}>
        </Card>
        <Card
            limitNumber={5}
            btnCong={this.state.btnCong}
            btnTru={this.state.btnTru}
            number={this.state.number}
            onHandleClick={this.onHandleClick}
            onHandleClick1={this.onHandleClick1}>
        </Card>
        <Card
            limitNumber={8}
            btnCong={this.state.btnCong}
            btnTru={this.state.btnTru}
            number={this.state.number}
            onHandleClick={this.onHandleClick}
            onHandleClick1={this.onHandleClick1}>
        </Card>
     </div>
    );
  }
}
export default ChildComponent;
