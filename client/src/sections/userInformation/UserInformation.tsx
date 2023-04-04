import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/sections/userInformation/userInformation.scss";
import { useParams } from "react-router-dom";
const User = () => {
  let { username } = useParams();
  const [idInGameUser, setIdIngameUser] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [dataUser, setDataUser] = useState<any>({});
  const fetchEncrypIdUser = async () => {
    setLoading(true);
    const encrypId = await fetch(
      `https://vn2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=RGAPI-b27f987e-4ae4-4cd8-9f0f-2cf04d9cc942`
    );
    const dataEncrypId = await encrypId.json();
    setIdIngameUser(dataEncrypId.id);

    const res = await fetch(
      `https://vn2.api.riotgames.com/lol/league/v4/entries/by-summoner/${dataEncrypId.id}?api_key=RGAPI-b27f987e-4ae4-4cd8-9f0f-2cf04d9cc942`
    );
    const data = await res.json();
    setDataUser(data);
    setLoading(false);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
    fetchEncrypIdUser();
  }, []);
  console.log(dataUser);
  return (
    <div className="userInformation">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-12 userInformation__avatar"
            data-aos="fade-down"
          >
            <div className="userInformation__username">{username}</div>
            <img
              src="/Logo/flag.png"
              alt=""
              className="userInformation__banner"
            />
            <img
              src="/Logo/iframe.png"
              alt=""
              className="userInformation__frame"
            />
            <img
              src="/Logo/Caitlyn_13.jpg"
              alt=""
              className="userInformation__ava"
            />
          </div>
          <div className="col-lg-7 col-12 userInformation__info"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
