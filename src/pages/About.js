import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />

      <h1> A propos </h1>
      <br />
      <p>
        {" "}
        Découvrez les drapeaux colorés et vibrants des pays du monde entier,
        apprenez les noms de leurs capitales et explorez leurs superficies.
        Plongez dans la diversité culturelle et géographique de notre planète en
        un seul endroit. <br />
        🌍 Triez par Continent : Explorez le monde par région en sélectionnant
        un continent ci-dessous. Voyagez de l'Amérique à l'Asie en un instant!{" "}
        <br />
        🌐 Triez par Superficie : Utilisez le sélecteur radio pour organiser les
        pays par superficie, que ce soit les géants terrestres ou les plus
        petits joyaux cachés. Voyagez à travers les continents, testez vos
        connaissances géographiques et partez à la découverte de nouvelles
        cultures. Cette page vous offre un voyage virtuel captivant autour du
        globe. Prêt à explorer le monde? Commencez dès maintenant!"{" "}
      </p>
      <br />
      <p></p>
    </div>
  );
};

export default About;
