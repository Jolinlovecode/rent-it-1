import React, { useState } from "react"
import { useStateValue } from "../providers/StateProvider";
import Notification from "./Notification";

/**
 * Item"s information
 * Act as each item"s page
 */

export default function OnRentingItem(props) {
  const {...item} = props;
  const [{rentingBasket}, dispatch] = useStateValue();
  console.log("renting basket from OnRentingItem.js: ", rentingBasket);
  const removeFromRenting = () => {
    dispatch({
      type: "REMOVE_FROM_RENTING", 
      id: item.id,
    })
  }
//Define an state to handle the visibility of form.
  const [showForm, setShowForm] = useState(false);
  const showMessage = () => {
    setShowForm(!showForm);
  }


  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt={item.title} />
            </figure>
          </div>
          <div className="media-content">
            <div className="container">
              <b style={{ textTransform: "capitalize" }}>{item.title}</b>
              <p className="small">{item.description}</p>
            </div>
            <div className="container mt-1 mb-1">
              <div className="">You rent it for item.rentTime</div>
            </div>
              <div class="buttons has-addons is-small is-right">
                <button class="button is-small is-rounded is-info is-outlined"
                  onClick={showMessage}
                  >Extend Time</button>
                <button class="button is-small is-danger is-outlined"
                  onClick={removeFromRenting}
                  >Cancel</button>
              </div>
          </div>
        </div>
      </div>
      <Notification showForm={showForm} showMessage={showMessage} />
    </div>

  );
}

