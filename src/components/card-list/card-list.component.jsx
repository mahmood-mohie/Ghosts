// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     // console.log(this.props.monsters);
//     // console.log("render from Cardlist");
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
