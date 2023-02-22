import { useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function CustomToggle({
  children,
  eventKey,
}: {
  children: string;
  eventKey: string;
}) {
  const [checked, setChecked] = useState(false);
  const expandFilter = useAccordionButton(eventKey);

  return (
    <ToggleButton
      className="mb-3"
      id="toggle-check"
      type="checkbox"
      variant="primary"
      checked={checked}
      value="0"
      onChange={(e) => setChecked(e.currentTarget.checked)}
      onClick={expandFilter}
    >
      {/* <button type="button" className="btn btn-primary"> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-sliders mx-1"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
        ></path>
      </svg>
      {children}
      {/* </button> */}
    </ToggleButton>
  );
}

export default function FilterRecipes() {
  return (
    <Accordion defaultActiveKey="0">
      <CustomToggle eventKey="1">Filter</CustomToggle>
      <Accordion.Collapse eventKey="1">
        {/* Filters */}
        <Card>
          {" "}
          <Card.Body>
            {/* Land */}
            <h2>Land</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="norsk" />
                <span className="mx-2">Norsk</span>
              </li>
              <li>
                <input type="checkbox" name="vietnamesisk" />
                <span className="mx-2">Vietnamesisk</span>
              </li>
              <li>
                <input type="checkbox" name="filipinsk" />
                <span className="mx-2">Filipinsk</span>
              </li>
              <li>
                <input type="checkbox" name="koreansk" />
                <span className="mx-2">Koreansk</span>
              </li>
            </ul>

            {/* Måltid */}
            <h2>Måltid</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="frokost" />
                <span className="mx-2">Frokost</span>
              </li>
              <li>
                <input type="checkbox" name="snack" />
                <span className="mx-2">Snack</span>
              </li>
              <li>
                <input type="checkbox" name="forrett" />
                <span className="mx-2">Forrett</span>
              </li>
              <li>
                <input type="checkbox" name="hovedrett" />
                <span className="mx-2">Hovedrett</span>
              </li>
              <li>
                <input type="checkbox" name="siderett" />
                <span className="mx-2">Siderett</span>
              </li>
              <li>
                <input type="checkbox" name="dessert" />
                <span className="mx-2">Dessert</span>
              </li>
            </ul>
            {/* Protein */}
            <h2>Protein</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="okse" />
                <span className="mx-2">okse</span>
              </li>
              <li>
                <input type="checkbox" name="svin" />
                <span className="mx-2">Svin</span>
              </li>
              <li>
                <input type="checkbox" name="kylling" />
                <span className="mx-2">Kylling</span>
              </li>
              <li>
                <input type="checkbox" name="lam" />
                <span className="mx-2">Lam</span>
              </li>
              <li>
                <input type="checkbox" name="fisk" />
                <span className="mx-2">Fisk</span>
              </li>
            </ul>
            {/* Tid */}
            <h2>Tid</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="15min" />
                <span className="mx-2">15 Min</span>
              </li>
              <li>
                <input type="checkbox" name="15-30min" />
                <span className="mx-2">15-30 Min</span>
              </li>
              <li>
                <input type="checkbox" name="1-2timer" />
                <span className="mx-2">1-2 Timer</span>
              </li>
              <li>
                <input type="checkbox" name="2timer+" />
                <span className="mx-2">2 Timer +</span>
              </li>
            </ul>
            {/* Kokemetode */}
            <h2>Kokemetode</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="ovnsbakt" />
                <span className="mx-2">Ovnsbakt</span>
              </li>
              <li>
                <input type="checkbox" name="grillet" />
                <span className="mx-2">Grillet</span>
              </li>
              <li>
                <input type="checkbox" name="stekt" />
                <span className="mx-2">Pannetekt</span>
              </li>
              <li>
                <input type="checkbox" name="kokt" />
                <span className="mx-2">Kokt</span>
              </li>
              <li>
                <input type="checkbox" name="dampet" />
                <span className="mx-2">Dampet</span>
              </li>
              <li>
                <input type="checkbox" name="fritert" />
                <span className="mx-2">Fritert</span>
              </li>
            </ul>
            {/* Seson */}
            <h2>Sesong</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <input type="checkbox" name="sommer" />
                <span className="mx-2">Sommer</span>
              </li>
              <li>
                <input type="checkbox" name="høst" />
                <span className="mx-2">Høst</span>
              </li>
              <li>
                <input type="checkbox" name="vinter" />
                <span className="mx-2">Vinter</span>
              </li>
              <li>
                <input type="checkbox" name="vår" />
                <span className="mx-2">Vår</span>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Accordion.Collapse>
    </Accordion>
  );
}
