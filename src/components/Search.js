import React from 'react'

const Search = ({title, handleQuit}) => {
  return (
    <div className="search-container">
      <div className="search-header">
        <h2 className="title">{title}</h2>
        <div className="cross"
          onClick={() => handleQuit('thread')}>
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="search" placeholder="Find a ressource" />
          <span className="icon is-small is-left">
            <i className="fa fa-search"></i>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Search
