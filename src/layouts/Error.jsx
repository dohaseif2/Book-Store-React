import React from 'react'
import { useRouteError } from 'react-router-dom'

export function Error() {
  const error=  useRouteError();
  return (
    <div className='alert alert-danger'>
        <h1>{error.message}</h1>
        <p></p>
    </div>
  )
}
