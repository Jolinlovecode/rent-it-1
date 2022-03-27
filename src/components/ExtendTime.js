import React, { useState } from 'react';

export default function ExtendTime(props) {

  // handle dropdown select
  const [extraHour, setExtraHour] = useState(0);
  const getSelectedHr = e => {
    setExtraHour(e.target.value);
    console.log("selected extraHour from ExtendTime.js", extraHour);
  }
  
  return (props.trigger) ? (

    <article className="message is-warning is-small">
      <div className="message-header"> <p>Exend Renting It For</p>
        <button className="delete" aria-label="delete"
          onClick={() => props.setTrigger(false)}
          ></button>
        {props.children}
      </div>

      <div className="message-body">
        
        {extraHour ? (
          <div className="container mb-3">
            <p>---Receipt---</p>
            <p>Remaining Hour: put here hrs</p>
            <p>Add: {extraHour} more hours</p>
            <p>New Renting Time: ({extraHour} + remaining_hour) hours</p>
            <p>New Total: {extraHour} * renting_cost + $0.3 fee</p>
          </div>

        ): <></>}
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth is-small is-rounded">
              <select name="extraHour"
                onChange={getSelectedHr}>
                <option value="0.5">30 mins</option>
                <option value="1">1 hr</option>
                <option value="2">2 hrs</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="button is-success is-rounded is-small"
              type="submit" 
              >Confirm</button>
          </div>
        </div>
      </div>
    </article>

    ) : "";
}
