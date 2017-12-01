import React from 'react'

const SideMenu = ({handleSwitch, tab}) => {
  return (
    <div className="container-sidebar">
      <div className="sidebar">
        <div className="title">My Workbench</div>
        <aside className="menu">
          <p className="menu-label">Questions</p>
          <ul className="menu-list">
            <li>
              <a className={tab === 'questions' ? "is-active" : null}
                onClick={() => handleSwitch('questions')}>
                My Questions
              </a>
            </li>
            <li><a>Browse</a></li>
          </ul>
          <p className="menu-label">Teams</p>
          <ul className="menu-list">
            <li><a># Crops Science Cambridge</a></li>
            <li><a># Computer Imaging Global</a></li>
          </ul>
          <p className="menu-label">Direct Messages</p>
          <ul className="menu-list">
            <li className="user-li">
              <span className="sleeping-user"></span>
              <a>Bob Cheelang</a>
            </li>
            <li className="user-li">
              <span className="active-user"></span>
              <a>Amad Melouni</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default SideMenu
