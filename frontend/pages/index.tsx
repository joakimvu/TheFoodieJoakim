// frontend/pages/index.tsx
// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

import Link from "next/link";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";

const Index = () => {
  return (
    <main>
      {/* Header img */}
      <div
        className="container-fluid"
        style={{
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589536677029-c0aa1808fba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')",
        }}
      >
        <h1
          className="mx-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            color: "white",
            fontSize: "4rem",
            fontWeight: "300",
          }}
        >
          En verden av smaker!
        </h1>
      </div>
      {/* Container for rest of homepage */}
      <div
        className="container-fluid mx-auto mt-5"
        style={{ maxWidth: "768px" }}
      >
        <h2 className="h3 py-5 text-center">
          Velkommen til min fantastiske verden av mat! Her vil jeg dele min
          lidenskap og kulinariske eventyr med deg på denne bloggen.
        </h2>
        <div className="mx-auto py-5" style={{ maxWidth: "768px" }}>
          <Image
            src="https://images.unsplash.com/photo-1576237934915-c716cf54b24d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Joakim som lager mat"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        {/* Intro om meg og siden */}
        <div>
          <p>
            Som en hobbykokk har jeg alltid elsket å eksperimentere med nye
            smaker og teknikker, og dele resultatene mine med venner og familie.
          </p>
          <p>
            Denne bloggen er et sted der jeg dokumenterer mine
            favorittoppskrifter, deler min kunnskap og erfaringer, og utforsker
            nye måter å nyte mat på.
          </p>
          <p>
            Bli med meg på denne spennende reisen mens jeg fortsetter å lære om
            matlaging og smaker, og streber etter å skape min egen unike stil.
          </p>
        </div>
        {/* Oppskrifter  */}
        <div className="row py-2" style={{ minHeight: "280px" }}>
          <div className="col-6" style={{ paddingLeft: "0" }}>
            <Image
              src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80"
              alt=""
              className="mx-0"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-6 p-2 position-relative">
            <h4>Oppskrifter</h4>
            <p>
              Usikker på hva du vil spise? La deg inspireres av mine deilige
              ideér.
            </p>
            <div className="position-absolute bottom-0 start-0">
              <Link href="/oppskrifter">
                <Button>Se Oppskrifter</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Ingredienser  */}
        <div className="row py-2" style={{ minHeight: "280px" }}>
          <div className="col-6" style={{ paddingLeft: "0" }}>
            <Image
              src="https://images.unsplash.com/photo-1622003275933-fc87f54913ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="mx-0"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-6 p-2 position-relative">
            <h4>Ingredienser</h4>
            <p>Oppdag eksotiske ingredienser du ikke visste eksisterte!</p>
            <div className="position-absolute bottom-0 start-0">
              <Link href="/ingredienser">
                <Button>Les om ingredienser</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mitt Utstyr  */}
        <div className="row py-2" style={{ minHeight: "280px" }}>
          <div className="col-6" style={{ paddingLeft: "0" }}>
            <Image
              src="https://images.unsplash.com/photo-1560291544-bc203f6f95be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW5lc2UlMjBrbml2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
              alt=""
              className="mx-0"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-6 p-2 position-relative">
            <h4>Mitt kjøkkenutstyr</h4>
            <p>
              Nysgjerrig på utstyret som driver mine kulinariske eventyr? Ta en
              titt inne på mitt kjøkken!
            </p>
            <div className="position-absolute bottom-0 start-0">
              <Link href="kjokkenutstyr">
                <Button>Se mitt kjøkkenutstyr</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
