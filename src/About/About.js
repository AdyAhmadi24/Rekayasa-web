import react from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import Navabar from "../Navbar/Navbar";

function About() {
  return (
    <div>
      <Navabar />
      <body>
        <div class="jumbotron text-center">
          <img src="img/59805933_2261818983909111_5166405006328332288_n.jpg" alt="Foto" width="180px" class="rounded-circle img-thumbnail" />
          <h1 class="display-4">Ady Ahmadi</h1>
          <p class="lead">Hasanuddin University's Student</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L30,96C60,96,120,96,180,96C240,96,300,96,360,96C420,96,480,96,540,112C600,128,660,160,720,149.3C780,139,840,85,900,106.7C960,128,1020,224,1080,229.3C1140,235,1200,149,1260,122.7C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </body>
    </div>
  );
}

export default About;
