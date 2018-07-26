# 010 - Création d'un composant ReactJS

React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage (ou *one page web app*).
Elle repose sur une structure en composant qui va permettre de une meilleur gestion des vues et une meilleur réutilisabilité du code.
L'arrivé d'ES6 décuple l'expérience d'une programmation *orienté objet* où dans React un composant sera ni plus ni moins un objet !

## Objectifs

Afficher une page contenant un `<input type="email" name="email" />` à l'aide d'un composant React.


## Etapes

### Génération du projet React

Place toi dans le dossier `front/`.

React vient avec un générateur de projet `create-react-app`. Utilise le pour générer ton application React.

#### Ressources

[]()

### Création d'un nouveau composant `SignUp`

La création d'un composant implique la création d'une `class` reprennant les propriétés de l'objet `React.Component`. On parle d'*héritage* en POO et on utilise l'expression `extends` en JavaScript pour l'utiliser.
Elle ressemblerait donc à :

~~~ JavaScript
import React from 'react';

class MonComposant extends React.Component {
  render() {
    return(<div> nouveau composant </div>);
  }
}
~~~
ou encore
~~~ JavaScript
import React, {Component} from 'react';

class MonComposant extends Component {
  render() {
    return(<div> nouveau composant </div>);
  }
}
~~~

Par convention toute classe aura son propre fichier avec le même nom (!!! attention à la majuscule en début de nom !!!)

* **Crée le composant `SignUp` avec la propriété email**

#### Ressources

[]()

### Intégration du composant dans App

React est un framework qui ne travaille que sur une seule et unique page : `index.html`. Sur cette page une composant *root* va être instancié, il est généralement appelé `App`.
On l'appelle au chargement de la page à l'aide de la commande `ReactDOM.render(<App />, document.getElementById('root'));`.

Ton nouveau composant doit être appelé dans le composant `App` afin d'être chargé à son tour.

* **Affiche le contenu de ton composant dans la page**

#### Ressources

[]()

### Afficher un `<input />`

* **Affiche le champ `<input type="email" name="email"/>` dans la page**

#### Ressources

[]()

### Afficher un email dans un `<h1>`

* **Affiche le champ `<h1>test@test.com</h1><input type="email" name="email"/>` dans la page**

#### Ressources

[]()

### Remplacer l'email en dur par ce que l'on renseigne dans `<input />`

React permet de récupérer facilement une donnée renseignée dans une balise `<input />`.
* Pour cela il est nécessaire d'y placer un *listener* de type `onchange` qui va écouter tous les changements effectués dans le champ.
* On affecte une fonction au *listener* qui va être exécuté à chaque changement : `updateEmailField`.
* On transmet (on *bind*) à la fonction le context de l'event à l'aide de `bind(this)`
* on implémente la fonction `updateEmailField(event){}` où `event` correspond au context de l'event => `event.target.value` renvoie la valeur de l'Input
* la fonction doit renseigner un état (*state*) `email`
* l'état `email` doit apparaitre dans le titre `<h1>`

`email` est bien un état `state` et non une propriété `props` ! En effet un état invoquera à chaque changement la fonction `render()`, ce qui rafraichira le contenu de la page

#### Ressources

* [Create-react-app](https://github.com/facebookincubator/create-react-app)
  Outil en ligne de commande pour générer un projet react prêt
* [Class component](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)
  Comment créer un composant grâce à une classe
* [JSX](https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects) JSX pour remplacer `React.createElement`

## Challenge

### Show me your property

* Utilise le `create-react-app` pour démarrer un nouveau projet vide.
* Créé un composant `SignUp` qui aura une propriété `email`
* Le composant `<SignUp />` doit être appelé dans le composant `<App />`

### Critères de validation

* Le composant est dans une classe javascript ES6
* L'appel du composant ressemble à `<SignUp />`
* Le code html généré contient bien la balise input au format `<h1>emailRenseignéDansInput</h1><input type="email" name="email"/>`
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM0MjQzNjk1N119
-->