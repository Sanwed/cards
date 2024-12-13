import * as React from "react";

interface CardProps {
  src?: string,
  children: React.ReactElement
}

function Card({src, children}: CardProps) {
  return (
    <div className='card' style={{width: '15rem'}}>
      {src && <img src={src} alt="" className='card-img-top' />}
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default Card
