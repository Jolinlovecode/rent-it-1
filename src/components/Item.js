import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ItemBooking from "./ItemBooking";
import { useStateValue } from "../providers/StateProvider";
// import Notification from "./Notification";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function Item(props) {
  const {...item} = props;

  // handle 'rent-now' button to get the data of the item
  const [{rentingBasket}, dispatch] = useStateValue();
  console.log("renting basket from Item.js: ", rentingBasket);
  const addToRenting = () => {
    // push item into the context layer
    dispatch({
      type: "ADD_TO_RENTING",
      item: {
        ...item
        // id: item.id,
        // image: item.image,
        // title: item.title,
        // description: item.description,
        // cost: item.cost,
        // isRenting: item.isRenting,
        // rentTime: item.rentTime
      },
    });
  }

  return (

    <div className="column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={item.image} alt={item.title} />
            </figure>
          </div>
          <div className="media-content">
            <div className="is-clearfix">
              <div className="field is-pulled-left">
                <b className="pr-2" style={{ textTransform: "capitalize" }}>{item.title}</b>
                <div className="tag is-warning is-rounded">${item.cost}/hr </div>
              </div>
              <div className="field is-pulled-right">
                {item.isRenting ? (
                  <small className="has-text-danger">Not Available</small>
                ):(
                  <small className="has-text-primary">Available</small>
                )}
              </div>
            </div>
            <div>{item.description}</div>
              {/* if using <button> handle() -> reducer and use the selectedItem{} */}
            <div className="container">
              <Link className="button is-small is-outlined is-info is-pulled-right"
                to={item.isRenting ? '#' : `/items/${item.id}`}
                disabled={item.isRenting}
                >Go To Booking</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}