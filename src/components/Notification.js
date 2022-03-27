import React from 'react'

export default function Notification(props) {
  return (
    <div className={props.showForm ? "modal is-active":"modal" }>
  
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Your item will expiry in 5 minutes.</p>
      <button class="delete" aria-label="close" onClick={props.showMessage}></button>
    </header>
      <div class="select is-success">
        <select>
          <option>30 Minutes</option>
          <option>1 hr</option>
          <option>2 hr</option>
        </select>
      </div>
    <footer class="modal-card-foot">
      <button class="button is-success">Confirm</button>
    </footer>
  </div>
</div>
    
    
  )
}
