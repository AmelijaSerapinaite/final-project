import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

// import icon from 'images/logo.svg'

const Navigation = () => {

    return (
        <div className='header'>
            <nav className='nav'>
                <div className='logo'>
                    <Link to='/' className='logo'>LOGO</Link>
                </div>
                <ul className='header-links'>
                    <li>
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