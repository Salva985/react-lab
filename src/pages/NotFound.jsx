import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="container" style={{ paddingTop: '2rem' }}>
      <h1>404</h1>
      <p>Oops—this page doesn’t exist.</p>
      <p><Link to="/">Go back home</Link></p>
    </main>
  )
}