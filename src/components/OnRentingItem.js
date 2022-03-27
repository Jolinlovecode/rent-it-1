import React, { useState } from "react";
import { useStateValue } from "../providers/StateProvider";
import ExtendTime from "./ExtendTime";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function OnRentingItem(props) {
  const {...item} = props;

  // for remove the item from the on-renting page
  const [{rentingBasket}, dispatch] = useStateValue();
  console.log("renting basket from OnRentingItem.js: ", rentingBasket);
  const removeFromRenting = () => {
    dispatch({
      type: "REMOVE_FROM_RENTING", 
      id: item.id,
    })
  }
  // for extending the time of the item
  const [extendTimeNoti, setExtendTimeNoti] =  useState(false);

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="container mb-3">
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
            </div>
          </div>
        </div>

        {/* Display renting detail */}
        <div className="container pt-2">
          {/* <div className="columns">
            <div className="column"><small><b>Start time</b></small></div>
            <div className="column"><small><b>End time</b></small></div>
          </div> */}
          <small>Counter</small>
        
          {/* Button and Extend Time form */}
          <div className="buttons has-addons is-small is-right">
            <button className="button is-small is-rounded is-info is-light"
              // onClick={checkNoti}
              onClick={()=>setExtendTimeNoti(true)}
              >Extend Time</button>
            <button className="button is-small is-danger is-light"
              onClick={removeFromRenting}
              >End</button>
          </div>
        </div>
        <ExtendTime trigger={extendTimeNoti} setTrigger={setExtendTimeNoti} />
      
      </div>
    </div>

  );
}