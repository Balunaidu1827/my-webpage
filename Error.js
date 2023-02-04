import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Page not find</p>
      <Link to="/">back to home</Link>
    </section>
  )
}
export default Error