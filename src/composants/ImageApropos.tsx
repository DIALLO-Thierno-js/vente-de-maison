import React from 'react'

const ImageApropos = (props) => {
  return (
    
    <div  className=" flex   px-10 py-5 items-center w-1/2 m">
    <img src= {props.src} alt=" image de notre equipe" className="  " />
  </div>
  
  )
}

export default ImageApropos