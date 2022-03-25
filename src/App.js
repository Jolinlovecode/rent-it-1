// import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import ItemsList from './components/ItemsList';
import OnRenting from "./components/OnRenting";
import RentedHistory from "./components/RentedHistory";
// stylesheet
import './styles/App.css';

// hardcode database
const items = [
  {id: 1, title:"hot pork", description:"a spicy pig that can code",isRenting:false, cost: 12,image:"https://i.pinimg.com/originals/76/ac/74/76ac7443cee64e44a905aafae9fb49dd.gif"},
  {id: 2, title:"demanding cat", description:"eat every 5 minutes", isRenting:false, cost: 5,image:"https://i.pinimg.com/originals/6a/0e/ad/6a0ead42d3907b1310e67c33cb638211.gif"},
  {id: 3, title:"judging monkey", description:"for someone wants judgmental pet", isRenting:true, cost: 20, rentTime: 60,image:"https://media0.giphy.com/media/cJMlR1SsCSkUjVY3iK/giphy.gif?cid=ecf05e47t053t561jjr34snk2gvgrobziionmb3igwnydwqo&rid=giphy.gif&ct=g"},
  {id: 4, title:"chick tripper", description:"🔞 parental advisory", isRenting:false, cost: 250,image:"https://media1.giphy.com/media/cQz5MLlnP5rfa/giphy-downsized-large.gif"},
  {id: 6, title:"personal trainer", description:"always tear his t-shirt", isRenting:false, cost: 53,image:"https://c.tenor.com/Q7bL_ho7804AAAAC/fight-yuh.gif"},
  {id: 7, title:"a goat", description:"licking goat to lick your envelop", isRenting:false, cost: 0.99,image:"https://media1.giphy.com/media/6JvVrxP6osBdC/giphy.gif?cid=ecf05e47624tn7nh2aet1o35bme3yehkc3zf2woankxhgwdl&rid=giphy.gif&ct=g"},
  {id: 8, title:"flock of sheep and a llama", description:"for you to count in your sleepless night (deposit required)", isRenting:false, cost: 1200,image:"https://c.tenor.com/CNazqP5LprUAAAAM/in-disguise-this-is-happening.gif"},
  {id: 9, title:"sheep caregiver", description:"help gathering the flock for you to count (discount if rent with the flock)", isRenting:false, cost: 49.99,image:"https://78.media.tumblr.com/709a105a7f6233be4b2f9ace278b10e7/tumblr_om72t94MtM1tlb56zo1_400.gif"},
];

export default function App(){
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//       cart: {},
//       products: []
//     };
//     this.routerRef = React.createRef();
//   }
//   render() {

    return (
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ItemsList items={items}/>} />
              {/* <Route path="/items/:id" element={<ItemDetails />} /> */}
              <Route path="/renting" element={<OnRenting />} />
              <Route path="/rented" element={<RentedHistory />} />
            </Routes>
          </Router>
        </div>
    );
  }

