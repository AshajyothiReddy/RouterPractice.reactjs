// Write your JS code here
import {Link} from 'react-router-dom'
import '../About'
import '../Contact'
import '../Home'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1>Wave</h1>
    </div>
    <ul className="router-list">
      <li>
        <Link className="nav-link" to="/HomeRoute">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/AboutRoute">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/ContactRoute">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
