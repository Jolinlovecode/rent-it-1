import React, { useState } from "react"
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
  // const [popupNoti, setPopupNoti] =  useState(false);
  // console.log(popupNoti);

  return (

    <div className=" column is-half">
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

            {/* ItemDetails component link */}
            {/* <a  className="has-text-link" href={`/items/${item.id}`}>
              <small>see more</small>
            </a> */}

            {/* ------- */}
            <div className="container mt-3">
              <div className="is-clearfix">

                <div className="field is-pulled-left">
                  <p className="control"><small>Rent for: </small>
                    <span className="select is-small is-info">
                      {item.isRenting ? (
                        <select disabled>
                          <option selected>hrs</option>
                          <option value="0">0 hrs</option>
                        </select>
                      ) : (
                        <select>
                          <option selected>hrs</option>
                          <option value="1">1 hr</option>
                          <option value="2">2 hrs</option>
                          <option value="3">3 hrs</option>
                          <option value="4">4 hrs</option>
                        </select>
                      )}
                    </span>
                  </p>
                </div>
                {item.isRenting ? (
                  <button className="button is-small is-outlined is-link is-pulled-right"
                    disabled> Rent Now </button>
                  ):(
                  <button className="button is-small is-outlined is-info is-pulled-right"
                    // onClick={()=>addToRenting(item)}
                    // onClick={()=>setPopupNoti(true)}
                    onClick={addToRenting}
                    > Rent Now </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Notification trigger={popupNoti} setTrigger={setPopupNoti} /> */}
    </div>

  );
}
