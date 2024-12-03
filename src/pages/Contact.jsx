import { useState } from 'react';


const Contact = () => {
  // États pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    nomPrenoms: "",
    telephone: "",
    email: "",
    budget: "",
    lieu: "",
    typeMaison: "",
  });

  // Liste prédéfinie des lieux et types de maison
  const lieux = ["Abidjan", "Bouaké", "Yamoussoukro", "San-Pédro", "Korhogo"];
  const typesMaison = ["Villa", "Duplex", "Château", "Cabane"];

  // Fonction pour mettre à jour les données du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire soumis :", formData);
    alert("Votre demande a été envoyée avec succès !");
    
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 my-5 bg-slate-100 rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Formulaire d'achat de maison
      </h2>

      {/* Nom & Prénoms */}
      <div className="mb-4">
        <label htmlFor="nomPrenoms" className="block font-medium text-gray-700">
          Nom & Prénoms
        </label>
        <input
          type="text"
          id="nomPrenoms"
          name="nomPrenoms"
          value={formData.nomPrenoms}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Entrez votre nom et prénoms"
          required
        />
      </div>

      {/* Téléphone */}
      <div className="mb-4">
        <label htmlFor="telephone" className="block font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Entrez votre numéro de téléphone"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Entrez votre email"
          required
        />
      </div>

      {/* Budget */}
      <div className="mb-4">
        <label htmlFor="budget" className="block font-medium text-gray-700">
          Budget
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Entrez votre budget en FCFA"
          required
        />
      </div>

      {/* Lieu */}
      <div className="mb-4">
        <label htmlFor="lieu" className="block font-medium text-gray-700">
          Lieu
        </label>
        <select
          id="lieu"
          name="lieu"
          value={formData.lieu}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        >
          <option value="">Sélectionnez un lieu</option>
          {lieux.map((lieu, index) => (
            <option key={index} value={lieu}>
              {lieu}
            </option>
          ))}
        </select>
      </div>

      {/* Type de maison */}
      <div className="mb-4">
        <label htmlFor="typeMaison" className="block font-medium text-gray-700">
          Type de maison
        </label>
        <select
          id="typeMaison"
          name="typeMaison"
          value={formData.typeMaison}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        >
          <option value="">Sélectionnez un type de maison</option>
          {typesMaison.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Bouton de soumission */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Soumettre
        </button>
      </div>
    </form>
  );
};



export default Contact;
