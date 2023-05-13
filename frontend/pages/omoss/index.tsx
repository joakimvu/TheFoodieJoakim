import Image from "next/image";
import profilePic from "../../public/test.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function index() {
  return (
    <main className="mx-auto" style={{ maxWidth: "768px", marginTop: "64px" }}>
      <Image src={profilePic} alt="Picture of something" width={768} />
      <h1 className="py-2">Joakim’s Matblogg</h1>
      <p>
        Dette er en personlig matblogg ment for mitt eget bruk og for å utforske
        min egen reise innen matlaging. Gjennom å skrive ned mine oppskrifter og
        erfaringer, håper jeg å fange min utvikling som hobbykokk og å
        dokumentere mine favorittretter.
      </p>
      <p>
        Min reise innen matlaging begynte som en hobby, men har siden vokst til
        en lidenskap. Jeg har alltid vært interessert i å eksperimentere med nye
        smaker og teknikker, og har funnet stor glede i å dele resultatene med
        venner og familie.
      </p>
      <p>
        Formålet med denne siden er å dokumentere min reise og dele min kunnskap
        og erfaringer med andre. Jeg vil også bruke denne siden som et sted å
        lagre og organisere mine oppskrifter, slik at jeg enkelt kan finne dem
        igjen når jeg trenger dem.
      </p>
      <p>
        Gjennom å lære om matlaging og smaker, håper jeg å utvikle min egen stil
        og å finne nye måter å nyte maten på. Jeg tror på å bruke de beste
        ingrediensene og å alltid søke etter nye inspirasjonskilder.
      </p>
      <p>
        Så, velkommen til min matblogg! Jeg håper du vil følge meg på denne
        spennende reisen. 😃
      </p>
    </main>
  );
}
