import { Link } from "react-router-dom";
import Togle from "./Togle.js";
import "./HomeDesign.css";
function Head() {
  return (
    <div className="">
      <div className="LandingHead">
        <img src="./LandingLogo.png" className="position-absolute" />
        <header>
          <nav className="Nav">
            <ul className="navList">
              <li className="">
                <Link className="text-white text-decoration-none">
                  Features
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-decoration-none">Pricing</Link>
              </li>
              <li className="">
                <Link className="text-white text-decoration-none">
                  Resources
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-decoration-none">
                  Free tools
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-decoration-none">Blog</Link>
              </li>
              <Togle />
            </ul>
          </nav>
        </header>
        <hr className="navLine" />
        <div className="text-center">
          <p className="text-white h1 m-5">
            Find The Contant That
            <br /> Perform Best
          </p>
          <button className="m-2 p-2 rounded border-0">
            Start 7 Day Free Trail
          </button>
        </div>
        <div className="text-center m-5">
          <img src="./HeadImage.PNG" className="m-5" />
        </div>
      </div>
    </div>
  );
}

export default Head;
