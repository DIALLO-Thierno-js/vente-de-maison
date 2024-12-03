import React from 'react';

const Cards = (props) => {
  return (
    // Card container
    <div className="flex justify-center mb-10">
      <div className="card bg-base-100 mt-10 w-96 shadow-xl bg-blue-50 rounded-lg hover:shadow-2xl transition-shadow  py-5 px-5 duration-300">
        <figure className="px-10 pt-10">
          <img
            src= {props.src} 
            alt="maison"
            className="rounded-xl object-cover h-48 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold text-gray-800">{props.titre}</h2>
          <p className="text-gray-600"> {props.parag}</p>
          <div className="card-actions flex  items-center justify-center gap-10 mx-auto mt-4">
            <button className="btn bg-blue-500  text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200">
              Acheter Maintenant
            </button>
            <button className="btn   text-red-800 border border-red-800 py-2 px-4 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200">
              {props.prix}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
