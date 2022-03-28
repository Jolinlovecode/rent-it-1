import React from 'react';
import { useStateValue } from "../providers/StateProvider";
import OnRentingItem from './OnRentingItem';

/**
 * Act as receipt page
 * Keep rented history of the item
 */
export default function RentedHistory() {

  const [{rentedHistory}] = useStateValue();
  const currentlyRentingHistory = rentedHistory.map((item) => (
    <OnRentingItem
      key={item.id}
      {...item}
    />
  ));

  return (
    <div className='section'>
      <div className='container'>
        <div className='title is-4'>Rented History</div>
        <div className="column columns is-multiline">
          {rentedHistory.length ? currentlyRentingHistory : 
          
            ( <div className="column">
                <span className="title has-text-grey-light">No items found!</span>
              </div> )
          }
        </div>
      </div>
  </div>
  )
}