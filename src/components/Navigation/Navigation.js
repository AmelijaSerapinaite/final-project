import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav className='nav'>
        <Link to='/' className='logo'>LOGO</Link>
        <ul>
            <li className='active'>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/albums'>Albums</Link>
            </li>
            <li>
                <Link to='/comments'>Comments</Link>
            </li>
            <li>
                <Link to='/posts'>Posts</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Navigation