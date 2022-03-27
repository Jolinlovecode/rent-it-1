// import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import ItemsList from './components/ItemsList';
import OnRenting from "./components/OnRenting";
import ItemBooking from "./components/ItemBooking";
import RentedHistory from "./components/RentedHistory";
// stylesheet
import './styles/App.css';
// data
import { useStateValue } from "./providers/StateProvider";


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
    const [{allItems}] = useStateValue();

    return (
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ItemsList items={allItems}/>} />
              <Route path="/renting" element={<OnRenting />} />
              <Route path="/items/:id" element={<ItemBooking />} />
              <Route path="/rented" element={<RentedHistory />} />
            </Routes>
          </Router>
        </div>
    );
  }