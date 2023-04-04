import React, { useEffect, useRef, useState } from "react";
import { IChampionInformation, IChampions } from "../types/champion";
import ChampionItem from "../sections/champions/ChampionItem";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/Champions.scss";
import SectionTitle from "../components/section-title/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// import data
import { role } from "../data/role";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icons from "../components/icons/Icons";
function Champions() {
  const [champions, setChampions] = useState<IChampionInformation[]>([]);
  const [searchData, setSearchData] = useState<IChampionInformation[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [chooseRole, setChooseRole] = useState<String>("all");
  const [searchInput, setSearchInput] = useState<String>("");
  const [openModalRole, setOpenModalRole] = useState<Boolean>(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // check click outside element

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenModalRole(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const championUrl = `https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json`;
  const fetchData = async () => {
    const res = await fetch(championUrl);
    const productExtraJson: IChampions = await res.json();
    const data = [];
    for (const property in productExtraJson.data) {
      data.push(productExtraJson.data[property]);
    }
    setChampions(data);
    setSearchData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const changeRole = (role: String) => {
    setLoading(true);
    setChooseRole(role);
    if (role.toLowerCase() === "all") {
      if (searchInput === "") {
        setSearchData(champions);
      } else {
        const searchChampions = champions.filter(
          (item: IChampionInformation) => {
            return item.name.toLowerCase().includes(String(searchInput));
          }
        );
        setSearchData(searchChampions);
      }
      setLoading(false);
    } else {
      const newChampions = champions.filter((item: IChampionInformation) => {
        return item.tags.find((tag) => tag === role);
      });
      if (searchInput === "") {
        setSearchData(newChampions);
      } else {
        const searchChampions = newChampions.filter(
          (item: IChampionInformation) => {
            return item.name.toLowerCase().includes(String(searchInput));
          }
        );
        setSearchData(searchChampions);
      }

      setLoading(false);
    }
  };

  const changeSearch = (e: any) => {
    const data = e.target.value;
    setSearchInput(data);
    if (chooseRole.toLowerCase() === "all") {
      const searchChampions = champions.filter((item: IChampionInformation) => {
        return item.name.toLowerCase().includes(data);
      });
      setSearchData(searchChampions);
    } else {
      const newChampions = champions.filter((item: IChampionInformation) => {
        return item.tags.find((tag) => tag === chooseRole);
      });
      const searchChampions = newChampions.filter(
        (item: IChampionInformation) => {
          return item.name.toLowerCase().includes(data);
        }
      );
      setSearchData(searchChampions);
    }
  };

  return (
    <div className="champions">
      <Header />
      <div className="champions_heading">
        <div className="champions__heading-news">
          <div className="champions__heading-news-desktop">
            <div className="champions__heading-article">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt398b5bd347a34e86/635c684dda572d57ecd26a5c/110322_KSante_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">
                  Game Updates
                </div>
                <div className="champions__heading-article-title">
                  K’Sante Champion Spotlight
                </div>
              </div>
            </div>
            <div className="champions__heading-article-second">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta49af2d89002f965/625896162777714c51b30986/041822_ChampionRoadmapApril2022_Banner.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">Dev</div>
                <div className="champions__heading-article-title">
                  Champion Roadmap: April 2022
                </div>
              </div>
            </div>
            <div className="champions__heading-article-second">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">Lore</div>
                <div className="champions__heading-article-title">
                  Previously on Star Guardian
                </div>
              </div>
            </div>
          </div>
          <div className="champions__heading-news-mobile">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="champions__heading-article">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt398b5bd347a34e86/635c684dda572d57ecd26a5c/110322_KSante_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Game Updates
                    </div>
                    <div className="champions__heading-article-title">
                      K’Sante Champion Spotlight
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="champions__heading-article-second">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta49af2d89002f965/625896162777714c51b30986/041822_ChampionRoadmapApril2022_Banner.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Dev
                    </div>
                    <div className="champions__heading-article-title">
                      Champion Roadmap: April 2022
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="champions__heading-article-second">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Lore
                    </div>
                    <div className="champions__heading-article-title">
                      Previously on Star Guardian
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SectionTitle
          data={{
            subtitle: "Choose Your",
            title: "CHAMPION",
            description:
              "With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.",
          }}
        />
      </div>
      <div className="champions__search">
        <div className="champions__search-input">
          <Icons name="icon-search" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => changeSearch(e)}
          />
        </div>
        <div className="champions__role-choose">
          {role
            ? role.map((item: any, index: Number) => {
                return (
                  <div
                    className={`champions__role-item ${
                      item.role.toLowerCase() === chooseRole.toLowerCase()
                        ? "is-active"
                        : ""
                    }`}
                    key={Number(index)}
                    onClick={() => changeRole(item.role)}
                  >
                    {item.role}
                  </div>
                );
              })
            : null}

          <div
            className="champions__role-show"
            onClick={() => {
              if (!openModalRole) {
                setOpenModalRole(true);
              }
            }}
            ref={wrapperRef}
          >
            {chooseRole.toLowerCase() === "all" ? "All Role" : chooseRole}
            <div
              className={`champions__role-dropdown ${
                openModalRole ? "is-active" : ""
              }`}
            >
              {role
                ? role.map((item: any, index: Number) => {
                    return (
                      <div
                        className={`champions__role-dropdown-item ${
                          item.role.toLowerCase() === chooseRole.toLowerCase()
                            ? "is-active"
                            : ""
                        }`}
                        key={Number(index)}
                        onClick={() => {
                          setOpenModalRole(false);
                          changeRole(item.role);
                        }}
                      >
                        {item.role}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="champions__difficulties">All Difficulties</div>
      </div>
      <div className="container ">
        <div
          className={`row champions__wrapper ${loading ? "is-loading" : ""}`}
        >
          {searchData
            ? searchData.map((item: IChampionInformation, index: Number) => {
                return <ChampionItem data={item} key={Number(index)} />;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Champions;
