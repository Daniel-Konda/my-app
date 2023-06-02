import React from 'react'

function Alert(prop) {
  return (
    prop.alert && <div>
        <div class={`alert alert-${prop.alert.t}`} role="alert">
            <center><b>{prop.alert.msg}</b></center>
        </div>
    </div>
  )
}

export default Alert
