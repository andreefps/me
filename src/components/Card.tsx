import React from 'react'

export const Card = ({ title, link, description, image }) => {
  return (
    <div className="card w-96 shadow-xl cursor-pointer">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
