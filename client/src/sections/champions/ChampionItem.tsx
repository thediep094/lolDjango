import React from "react";
import { IChampionInformation } from "../../types/champion";
import "../../styles/sections/champions/championItem.scss";
type TProp = {
  data: IChampionInformation;
};
const ChampionItem = (data: TProp): any => {
  return (
    <div className="championItem col-lg-3 col-6">
      <div className="championItem__image">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.data.id}_0.jpg`}
          alt=""
        />
        <div className="championItem__name">
          <span>{data.data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ChampionItem;
