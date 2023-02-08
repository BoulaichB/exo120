import React from 'react'

// ## Exercice 2
// - Créer un nouveau projet React et le nettoyer
// - Créer un component Connection avec deux formulaires :
// - Le premier formulaire est un formulaire d'inscription qui va demander à l'utilisateur nom, prénom, adresse e-mail et mot de passe
// - Le deuxième formulaire est un formulaire de connexion qui demande email et mot de passe 
// - Selon un booleen il affiche soit le formulaire d'inscription soit le formulaire de connexion

export const Connection = ({_inscrit}) => {
    let form = _inscrit === true ? <div><h1>{'Inscription'}</h1><input type="text" placeholder='Nom'/><input type="text" placeholder="Prénom"/><input type="text" placeholder='Adresse'/> <input type="text" placeholder='Email'/><input type="text" placeholder='Mot de passe'/></div> : <div><h1>{'Connexion'}</h1><input type='text' placeholder='Email'/><input type="text" placeholder='Mot de passe'/></div> ;
  return (
    <div>
        {form}
    </div>
  )
}

