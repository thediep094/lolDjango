import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

function Search() {
  const [searchText, setSearchText] = useState<String>("");
  const [idInGameUser, setIdIngameUser] = useState<String>("");
  const [dataUser, setDataUser] = useState<any>({});
  const fetchEncrypIdUser = async () => {
    const encrypId = await fetch(
      `https://vn2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=RGAPI-b27f987e-4ae4-4cd8-9f0f-2cf04d9cc942`
    );
    const dataEncrypId = await encrypId.json();
    setIdIngameUser(dataEncrypId.id);

    const res = await fetch(
      `https://vn2.api.riotgames.com/lol/league/v4/entries/by-summoner/${dataEncrypId.id}?api_key=RGAPI-b27f987e-4ae4-4cd8-9f0f-2cf04d9cc942`
    );
    const data = await res.json();
    setDataUser(data);
  };
  return (
    <div className="search">
      <Header />
      <div
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={() => fetchEncrypIdUser()}>Search</button>
        <div className="render">{`${dataUser}`}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
