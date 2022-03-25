import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';

export default function ItemDetails() {
  // console.log(useParams());
  const {id} = useParams();
  return (
    <div className='section'>
      <div className='title is-4'>Item {id} Details</div>
      <div class="columns">
        <div class="column">Rent starting time</div>
        <div class="is-divider-vertical" data-content="TO"></div>
        <div class="column">
          Rent ending time <br/>
          Note: divider stretches to parent's height.
        </div>
      </div>

    </div>
  )
}
