import React from 'react'
import { useLocation } from 'react-router'

function NotFoundPage() {
  const location = useLocation()
  return (
    <>
      <h1>404 - Not Found</h1>
      <h2>
        <i>{location.url}</i> page not found
      </h2>
    </>
  )
}

export default NotFoundPage
