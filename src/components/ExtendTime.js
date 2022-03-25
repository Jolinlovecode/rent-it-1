import React from 'react'

export default function ExtendTime(props) {
  
  return (props.trigger) ? (

    <article className="message is-warning is-small">
      <div className="message-header"> <p>Exend Renting It For</p>
        <button className="delete" aria-label="delete"
          onClick={() => props.setTrigger(false)}
          ></button>
        {props.children}
      </div>

      <div className="message-body">
        <div class="field has-addons">
          <div class="control is-expanded">
            <div class="select is-fullwidth is-small is-rounded">
              <select name="extraHour">
                <option value="0.5">30 mins</option>
                <option value="1">1 hr</option>
                <option value="2">2 hrs</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-success is-rounded is-small"
              type="submit" 
              >Confirm</button>
          </div>
        </div>
      </div>
    </article>

    ) : "";
}
