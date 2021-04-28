import React from "react";
import Articles from "../components/Articels";
import User from "../components/User";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Articles />
      </div>
    </div>
  );
}

export default Home;
