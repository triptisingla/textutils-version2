import React from 'react'

function Alert({ obj, msg }) {
  return (
    <div style={{height:'60px'}}>
    {msg&&
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{obj.status},</strong> {obj.message}
      </div>
    }
    </div>

  )
}

export default Alert