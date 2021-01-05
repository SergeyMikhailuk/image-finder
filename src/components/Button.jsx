import React from 'react';
import '../index.css';


const Button = ({onClick}) => {
  return (
    <button type="submit" className='Button' onClick={onClick}>
      Load More
    </button>
  )
}
 
export default Button;