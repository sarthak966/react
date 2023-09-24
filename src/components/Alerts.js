import React from 'react'

function alert(props) {
  return (
    props.alerts && <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alerts.type}</strong> {props.alerts.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      
    </div>
  )
}

export default alert
