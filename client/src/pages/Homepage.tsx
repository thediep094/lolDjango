import React, { Fragment, useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
function Homepage() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://vn2.api.riotgames.com/lol/summoner/v4/summoners/by-name/x2muadacam?api_key=RGAPI-03cc609d-34f2-4ca3-a37d-481bf62dff18`
      );
      const data = await res.json();
    };
    fetchData();
  }, []);
  return (
    <div className="Homepage">
      <Header />
      <Fragment>Home page</Fragment>
      <Footer />
    </div>
  );
}

export default Homepage;
