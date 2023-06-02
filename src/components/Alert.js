import React from 'react'

function Alert(prop) {
  return (
    <div className="mb-2"style={{height:'50px'}}>
    {prop.alert && 
        <div className={`alert alert-${prop.alert.t}`} role="alert">
            <center><b>{prop.alert.msg}</b></center>
        </div>}
    </div>
  )
}

export default Alert
