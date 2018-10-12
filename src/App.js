import React, { Component } from 'react';

import sousse from './sousse.jpg'
import tunis from './tunis.jpg'
import sfax from './sfax.jpg'


import './App.css';
import Programe from './components/programe.js'
import Chiffre from './components/Chiffres.js'
import Hackerspace from './components/hackerspace.js'

class App extends Component {
  render() {
   return( 
<div>
       <h1>NOS PROGRAM</h1>
       <div className="background">
       <div className="Programe">
       <div className="element">
       <Programe className="element" prog="FULL TIME PROGRAM" descrip="Le Full Time Coding est un programme intensif de 3 mois pour 
       devenir développeurweb fullstack sur les technologies Javascript 
       (React JS, Angular JS, Node JS, MongoDB...).Les technologies Javascript sont des technologies 
       développés par Google et Facebook." />
       </div>
       <div className="element">
       <Programe className="element" prog="PART TIME PROGRAM" descrip="Le Part time Coding est un programme qui se déroule sur 3 mois 
       à raison d'une demi-journée par semaine pendant le weekend (Samedi après-midi ou Dimanche après-midi) . 
       Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique. " />
       </div>

       <div className="element">
       <Programe prog="SUMMER ACADEMY" descrip="Le Summer Academy est un programme de 3 semaines 
       pendant l'été. Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique.
       Le programme comporte 4 parcours selon le produit technologique que l'étudiant veut créer.
    "/>
        </div>
         <div className="element">
        <Programe prog="KIDS CODING PROGRAM" descrip="Le Kids Coding est un programme qui se déroule 
        tout au long de l'année scolaire (De Octobre à Mai) tous les Dimanches matin.
        Ce programme comporte 4 niveaux. Un niveau dure 2 mois. 
        La complétion d'une session de deux mois permet de passer au niveau suivant. 
        " />
        
        </div>
        </div>
<div>
        <h1 className="h1Chiffre">QUELQUE CHIFFRES</h1></div>
        <div className="ChiffreContainer">
        
          <div className="chiffre">
            <Chiffre chiffre='+20.000' descrip="PASSIONES AU DIGITAL" />
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+500' descrip='ETUDIANTS DEPUIT LE DEMARAGE EN AOUT 2016'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+300' descrip='PRODUITS DEVOLPPES'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+50' descrip='SPEAKERS'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='400m²' descrip='HACKER SPACE AU COEUR DU LAC 1'/>
          </div>
        </div>
        <br/>
        </div>
        <h1 align="center"> Ou se passe les session</h1>
        <p align="center">Les sessions se passe dans les hackerspace de GoMyCode dans les villes suivantes</p>
        <div className="hackerspace">
          <div>
            <Hackerspace img={sousse} place="Sousse" />
          </div>
          <div>
            <Hackerspace img={tunis} place="Tunis" />
          </div>
          <div>
            <Hackerspace img={sfax} place="Sousse" />
          </div>
        </div>

</div>
    

);

  }
}

export default App;
