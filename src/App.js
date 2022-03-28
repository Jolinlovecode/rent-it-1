import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// components
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import OnRenting from "./components/OnRenting";
import ItemBooking from "./components/ItemBooking";
import RentedHistory from "./components/RentedHistory";
// stylesheet
import "./styles/App.css";
// data
import { useStateValue } from "./providers/StateProvider";

export default function App() {

  // const [state, setState] = useState({
  //   items: [],
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });

  const [state, setState] = useState([]);
  // const [selectedItem, setSelectdItem] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/items"),  
    ]).then((all) => {
      console.log("all:::", all[0]);
      setState(all[0].data);
      
    });
  }, []);

  // useEffect(() => {
  //   Promise.all([
  //     axios.post(`http://localhost:3000/items/${id}`),  
  //   ]).then((all) => {
  //     // console.log("all:::", all[0]);
  //     setState(all[0].data);
  //   });
  // }, []);
  // const [{ allItems }] = useStateValue();
  // console.log("allitems", allItems);  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ItemsList items={state} />} />
          <Route path="/renting" element={<OnRenting />} />
          <Route path="/items/:id" element={<ItemBooking />}  />
          <Route path="/rented" element={<RentedHistory />} />
        </Routes>
      </Router>
    </div>
  );
}
