import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div className='w-full py-4 bg-blue-500'>
        <div className="container mx-auto">
          <div className="flex gap-10">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/business">Business</NavLink>
            <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
            <NavLink className="nav-link" to="/general">General</NavLink>
            <NavLink className="nav-link" to="/health">Health</NavLink>
            <NavLink className="nav-link" to="/science">Science</NavLink>
            <NavLink className="nav-link" to="/sports">Sports</NavLink>
            <NavLink className="nav-link" to="/technology">Technology</NavLink>
           
          </div>
        </div>
      </div>
    )
  }
}

export default Header
