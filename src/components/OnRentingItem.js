import React, { useState } from "react";
import { useStateValue } from "../providers/StateProvider";
import ExtendTime from "./ExtendTime";
import Countdown from "react-countdown";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function OnRentingItem(props) {
  const { ...item } = props;

  // for remove the item from the on-renting page
  const [{ rentingBasket, allItems }, dispatch] = useStateValue();
  console.log("renting basket from OnRentingItem.js: ", rentingBasket);
  const removeFromRenting = () => {
    const itemsToUpdate = [...allItems];
    const foundIndex = itemsToUpdate.findIndex((i) => {
      return i.id === item.id;
    });
    const itemToUpdate = {
      ...item,
      isRenting: false,
      rentTime: 0,
    };
    itemsToUpdate[foundIndex] = itemToUpdate;

    // removing the item from the <OnRenting>
    dispatch({
      type: "REMOVE_FROM_RENTING",
      id: item.id,
    });
    // then update its renting status
    dispatch({
      type: "UPDATE_ITEMS",
      items: itemsToUpdate,
    });
  };
  // for extending the time of the item
  const [extendTimeNoti, setExtendTimeNoti] = useState(false);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'Time is over!';
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
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
          <Countdown
            date={Date.now() + (item.endTime - Date.now())}
            renderer={renderer}
          />
          {/* Button and Extend Time form */}
          <div className="buttons has-addons is-small is-right">
            <button
              className="button is-small is-rounded is-info is-light"
              // onClick={checkNoti}
              onClick={() => setExtendTimeNoti(true)}
            >
              Extend Time
            </button>
            <button
              className="button is-small is-danger is-light"
              onClick={removeFromRenting}
            >
              End
            </button>
          </div>
        </div>
        <ExtendTime
          trigger={extendTimeNoti}
          setTrigger={setExtendTimeNoti}
          item={item}
        />
      </div>
    </div>
  );
}
