import React from 'react'

const ContenuApropos = (props) => {
  return (
    
        <div className=" w-1/2 px-10 mx-auto">
            <h1 className=" text-black text-3xl mb-5 ">{props.titre} </h1>
            <p className="">{props.parag} </p>
      </div>
    
  )
}

export default ContenuApropos