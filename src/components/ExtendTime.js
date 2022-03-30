import React, { useState } from 'react';
import { useStateValue } from '../providers/StateProvider';
import { format } from "date-fns";
import CurrencyFormat from 'react-currency-format';
// should go to the server -> go back notification -> match up all the renting time -> setTimeOut

export default function ExtendTime(props) {
  const {item} = props;

  const [rentCurrency, setRentCurrency] = useState("CAD");
  const getSelectedCy = e => {
    setRentCurrency(e.target.value);
  }
  // handle dropdown select
  const [extendedHour, setExtraHour] = useState(0);
  const getSelectedHr = e => {
    setExtraHour(e.target.value);
  }
  const calculateNewEndTime = (oldEndTime, extendedHour) => {
    const newEndTime = new Date(oldEndTime.getTime());
    newEndTime.setHours(oldEndTime.getHours() + Number(extendedHour));
    return newEndTime;
  };
  // const calculateRemainingTime = (startTime, currentTime) => {
  //   const remainingTime = new Date(startTime.getTime());
  //   remainingTime.setHours(currentTime.getHours() - startTime.getHours());
  //   return remainingTime;
  // };
  const timeFormatDisplay = (t) => {
    return format(t, "hh:mm a - MMM dd, yyyy");
  }
  const displayHrFormat = (hr) => {
    if (Number(hr) === 0) return '-';
    else if (Number(hr) === 1) return `${hr} hour`;
    else return `${hr} hours`;
  }
  
  // handle extending time
  console.log('item being chosen to extend renting time from ExtendTime.js', item);
  const [{rentingBasket, allItems}, dispatch] = useStateValue();
  // get the extending item's id and renting coist from the rentingBasket
  // get the remaining hour from the allItems
  // use Date obj take the current time (POST request that grab the time now - rented time )


  const extendRentingTime = () => {
    const itemsToUpdate = [...allItems];
    const foundIndex = itemsToUpdate.findIndex((i)=>{
      return i.id === item.id
    })
    const onRentingItemToUpdate = [...rentingBasket];
    const foundIndexRentingBasket = onRentingItemToUpdate.findIndex((i)=> {
      return i.id === item.id
    })

    const oldEndTime = new Date((item.endTime).getTime());
    const newEndTime = calculateNewEndTime(oldEndTime, extendedHour);

    const itemToUpdate = {
      ...item,
      endTime: newEndTime,
    }
    itemsToUpdate[foundIndex] = itemToUpdate;
    onRentingItemToUpdate[foundIndexRentingBasket] = itemToUpdate;

    // then update its renting status
    dispatch({
      type: 'UPDATE_RENTING',
      items: onRentingItemToUpdate,
      // {
      //   ...item,
      //   endTime: newEndTime,
      // }
    })
    dispatch({
      type: 'UPDATE_ITEMS',
      items: itemsToUpdate,
    });
  }


/** click on confirm -> update
  * just the rentingBasket (same logic with allItems dispatch -> get id -> find index of the obj -> dispatch with updated [])
  */
  return (props.trigger) ? (

    <article className="message is-warning is-small">
      <div className="message-header"> <p>Exend Renting It For</p>
        <button className="delete" aria-label="delete"
          onClick={() => {
              props.setTrigger(false);
              setExtraHour(0);
            }
          }
          ></button>
        {props.children}
      </div>

      <div className="message-body">
        
        {extendedHour ? (
          <div className="container mb-2">
            <div className="container">
              <p>Start Time: {timeFormatDisplay(item.startTime)}</p>
              <p>Old End Time: {timeFormatDisplay(item.endTime)}</p>
              <br></br>
              <p>Extend for: <strong>{displayHrFormat(extendedHour)}</strong> at 
              {rentCurrency === "CAD" ? (
                <CurrencyFormat
                      decimalScale={2}
                      value={item.cost}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={ " CAD$"}/>):(<CurrencyFormat
                        decimalScale={2}
                        value={item.cost * 0.8}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={ " USD$"}/>)}
                /hr price
              </p>
              <br></br>
            </div>
            <div className='is-clearfix'>
                <p><strong>New End Time: {timeFormatDisplay(calculateNewEndTime(item.endTime, extendedHour))}</strong></p>
              <div className='field is-pulled-left'>
                <strong>New Total: </strong>
                {rentCurrency === "CAD" ?
                (<CurrencyFormat
                        decimalScale={2}
                        value={(item.cost * extendedHour)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"CAD $"}
                />):(<CurrencyFormat
                  decimalScale={2}
                  value={(item.cost *0.8 * extendedHour)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"USD $"}
          />)}
              </div>
              <div className='field is-pulled-right'>payment api</div>
            </div>
          </div>
        ): ""}
        <div className="field has-addons">
          <div className="is-clearfix">
            <div className="select is-rounded is-pulled-left">
              <select name="extendedHour"
                defaultValue={extendedHour}
                onChange={getSelectedHr}>
                <option value="0">select time</option>
                <option value="1">1 hr</option>
                <option value="2">2 hrs</option>
                <option value="3">3 hrs</option>
              </select>
            </div>
          </div>
          <div className="is-clearfix">
                <div className="select is-rounded is-pulled-left">
                  <select name="rentCurrency"
                    defaultValue={rentCurrency}
                    onChange={getSelectedCy} >
                    <option value="CAD">select currency</option>
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
          <div className="control">
            <button className="button is-success is-rounded is-small"
              type="submit" onClick={extendRentingTime} 
              >Confirm</button>
          </div>
        </div>
      </div>
    </article>

    ) : "";
}