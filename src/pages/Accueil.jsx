import Cards from '../composants/Cards';



const Accueil = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Section des cartes */}
      <div className="flex justify-center items-center gap-5 flex-wrap ">
        <Cards prix = "23000$" parag = "Découvrez cette maison lumineuse de 4 chambres, idéale pour une famille. Située dans un quartier calme,
         elle offre un grand jardin, une cuisine ouverte sur le salon, et une terrasse parfaite pour les soirées d'été. À seulement 
         10 minutes des commerces et écoles, cette maison combine confort et praticité." titre = "Maison Moderne et Spacieuse à Vendre" src = "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" />
         

         <Cards prix = "12000$" parag = "Cette maison de 3 chambres avec vue panoramique sur la campagne est un véritable havre de paix. Son spacieux séjour 
            avec cheminée, sa cuisine entièrement équipée, et son grand jardin vous offriront un cadre de vie agréable. Parfaite pour ceux qui
             recherchent la tranquillité tout en restant proches de la ville." titre = "Charmante Maison avec Vue Imprenable"  src = "https://cdn.pixabay.com/photo/2017/06/18/21/18/house-2417271_1280.jpg" />

        <Cards prix = "18000$" parag = "Située dans un quartier résidentiel prisé, cette maison de 5 pièces est l'endroit idéal pour accueillir 
        votre famille. Elle dispose de 3 chambres spacieuses, d'une grande cuisine, d'un garage, et d'un terrain de 800 m².
         À proximité des écoles, commerces et transports, elle offre un environnement de vie pratique et agréable." titre = "Maison Familiale avec Grand Terrain" src = "https://cdn.pixabay.com/photo/2018/01/16/15/49/house-3086212_1280.jpg" />
        
      </div>
    </div>
  )
}

export default Accueil