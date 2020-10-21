import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    console.log(this.props.limitNumber);
    /*  this.setState({ number: nextProps.number}); */
    if (nextProps.number < this.props.limitNumber) {
      this.setState({ number: nextProps.number });
    }
  }
  /*  shouldComponentUpdate(){
   if(this.state.number < this.props.limitNumber) return true
   return false;
 } */
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.props.onHandleClick1}>{this.props.btnTru}</button>
        <button onClick={this.props.onHandleClick}>{this.props.btnCong}</button>
        <div>{this.state.number}</div>
      </div>
    );
  }
}
export default Card;
