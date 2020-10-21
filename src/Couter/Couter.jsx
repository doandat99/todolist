import React, { useEffect, useState } from "react";

// class Couter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cout: 1,
//     };
//   }
//   CoutFC = () => {
//     this.setState({
//       cout: this.state.cout + 1,
//     });
//   };
//   componentDidMount() {
//     // this.counterID = setInterval(()=>this.CoutFC(),1000);
//     console.log("componentDidMount");
//   }
//   // componentDidUpdate(prevProps, prevState){
//   //     console.log("componentDidUpdate")
//   //     if(this.state.cout==3){
//   //         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//   //     }
//   // }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     clearInterval(this.counterID);
//   }
//   render() {
//     console.log("cout = " + this.state.cout);
//     return <div>{this.state.cout}</div>;
//   }
// }
// export default Couter;

const array = [
  {
    id: 1,
    name: "Dat",
  },
  {
    id: 2,
    name: "Chien",
  },
  {
    id: 3,
    name: "Thanh",
  },
];
export default function Counter() {
  const [cout, setCount] = useState(0);
  const [persons, SetArray] = useState([]);
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log(array);
    SetArray(array);
  }, []);

  useEffect(() => {
    console.log(cout + number);
    setSum(cout + number);
  }, [cout, number]);
  return (
    <div>
      <p>Count:{cout}</p>
      <button onClick={() => setCount(cout - 1)}>-</button>
      <button onClick={() => setCount(cout + 1)}>+</button>

      <p>Number:{number}</p>
      <button onClick={() => setNumber(cout - 1)}>-</button>
      <button onClick={() => setNumber(cout + 1)}>+</button>

      <p>Sum:{sum}</p>
      <ul>
        {persons.map((person, index) => {
          return (
            <li key={person.id}>
              {person.name}---{index}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
