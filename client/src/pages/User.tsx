import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import UserInformation from "../sections/userInformation/UserInformation";

const User = () => {
  return (
    <div className="user">
      <Header />
      <UserInformation />
      <Footer />
    </div>
  );
};

export default User;
