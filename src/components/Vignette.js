import React from 'react'

const Vignette = ({image, title}) => {
  return (
    <div className="box">
      <img className="image" href={image} />
      <h2 className="title">{title}</h2>
    </div>
  )
}

export default Vignette
