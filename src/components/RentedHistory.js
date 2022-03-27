import React from 'react'

/**
 * Act as receipt page
 * Keep rented history of the item
 */
export default function RentedHistory() {
  const rentedItems = [];
  return (
    <div className='section'>
      <div className='container'>
        <div className='title is-4'>Rented History</div>
        <div className="column columns is-multiline">
          {rentedItems.length ? rentedItems : 
            ( <div className="column">
                <span className="title has-text-grey-light">No items found!</span>
              </div> )
          }
        </div>
      </div>
  </div>
  )
}

