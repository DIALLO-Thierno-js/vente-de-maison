

const CarteChiffre = (props) => {
  return (
    <div className="card w-72 h-72 bg-blue-50 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center space-y-4">
      
      <div>{props.icon} </div>
      <h2 className="text-center text-xl font-bold text-gray-700">
        {props.titre}
      </h2>
    </div>
  );
};

export default CarteChiffre;
