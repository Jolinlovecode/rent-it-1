import React from 'react'
import Item from './Item'
/**
 * Act as main homepage of the app
 * Displaying all listed items (availabe and on renting)
 */

export default function ItemsList(props) {
  const {items} = props;
  const listOfItems = items.map((item) => (
    <Item
      key={item.id}
      {...item}
      // addToRent={props.context.addToRent}
    />
  ));

  return (
    <div className='section'>
      <div className='title is-4'>For Rent</div>
        <div className="column columns is-multiline">
          {items && items.length ? listOfItems : 
            ( <div className="column">
                <span className="title has-text-grey-light">
                  No items found!
                </span>
              </div> )
          }
        </div>
    </div>

  );
}

