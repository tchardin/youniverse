import React from 'react'
import jenny_img from '../assets/jenny.jpeg'

const Nav = ({check, handleChange}) => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1 className="title is-4">YOUniverse</h1>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <input
              type='checkbox'
              className='main-switch'
              id='checkbox-1'
              checked={check}
              onChange={handleChange}/>
          </div>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">
            <i className="fa fa-diamond"></i>
            <span className="label">150</span>
          </a>
          <a className="navbar-item">
            <i className="fa fa-bell-o"></i>
          </a>
          <a className="navbar-item">
            <i className="fa fa-star-o fa-lg"></i>
          </a>
          <a className="navbar-item">
            <figure className="image is-48x48">
              <img src={jenny_img} />
            </figure>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
