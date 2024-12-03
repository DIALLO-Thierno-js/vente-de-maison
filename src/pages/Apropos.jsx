import CarteChiffre from "../composants/CarteChiffre"
import ContenuApropos from "../composants/ContenuApropos"
import ImageApropos from "../composants/ImageApropos"
import { HousePlus , Trophy , MapPinned } from 'lucide-react';



const Apropos = () => {
  return (
    <div>
    <div className=" flex justify-between mx-10 items-center"> 
      <ImageApropos src="https://cdn.pixabay.com/photo/2021/02/02/12/15/covid-19-5973769_1280.jpg"/>
      <ContenuApropos titre= "À propos de nous" parag = "Notre entreprise et notre approche ressemblent beaucoup à nos biens immobiliers
       : elles sont soigneusement conçues, et non improvisées, pour offrir une expérience agréable et personnalisée à chaque client."/>

    </div>

    <div className=" flex justify-between mb-20 mx-10 items-center"> 
    <ContenuApropos titre= "Notre mission : aider des milliers de familles et d'investisseurs à trouver le bien immobilier idéal" parag = "Nous ne croyons pas seulement à la vente, mais à l'accompagnement vers un meilleur avenir. 
    Parce que pour bâtir un meilleur chez-soi, il faut aligner vos besoins avec des solutions sur-mesure Gagnant-gagnant !"/>
      <ImageApropos src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"/>
      

    </div>

    <div className=" flex justify-between mb-20 mx-10 items-center"> 
      <ImageApropos src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"/>
      <ContenuApropos titre= "Notre histoire" parag = "En 2023, ImmoPlus a été créé pour révolutionner la recherche de maisons en Côte d'Ivoire. 
Nous avons compris que les acheteurs veulent des informations utiles et une expérience fluide, pas des démarches compliquées.

Aujourd'hui, ImmoPlus allie technologie et expertise pour offrir des solutions simples et adaptées, aidant chaque client à trouver la maison de ses rêves."/>

    </div>
    <div className="flex justify-center ">
      <h3 className=" text-3xl text-black ">ImmoPlus en chiffres</h3>
    </div>
    <div className="flex gap-5 justify-between mx-20 py-10">
    <CarteChiffre icon = {<HousePlus className="text-blue-500 w-12 h-12" />} titre = "+ de 500 Maisons Vendues en 2024"/>
    <CarteChiffre icon = {<Trophy  className="text-blue-500 w-12 h-12" />} titre = "98% de Clients Satisfaits, 10 Ans de Confiance"/>
    <CarteChiffre icon = {<MapPinned className="text-blue-500 w-12 h-12" />} titre = "+200 Propriétés Disponibles dans 5 Grandes Villes"/>

    </div>
    </div>
  )
}

export default Apropos