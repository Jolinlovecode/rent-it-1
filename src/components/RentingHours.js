import React from 'react'
export default function RentingHours(props) {
  const {disabled, rentTime, value, setRentTime } = props;

  return (
    <span className="select is-small is-info">
      {disabled ? (
        <select disabled>
          <option selected>hrs</option>
          <option value="0">0 hrs</option>
        </select>
      ) : (
        <select rentTime={rentTime} value={value} onChange={setRentTime}>
          <option selected>hrs</option>
          <option value="1">1 hr</option>
          <option value="2">2 hrs</option>
          <option value="3">3 hrs</option>
          <option value="4">4 hrs</option>
        </select>
      )}

    </span>
  )
}

