import React from 'react'

const Button = () => {
  return (
    <button
      id='mybutton'
      className='my-button bg-lime-200 m-4 p-2'
      onClick={() => {
        console.log('button clicked', Date.now())
      }}>
      Button
    </button>
  )
}

export default Button
