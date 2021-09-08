import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import RowList from "./components/RowList";
import FeaturedContent from "./components/FeaturedContent";
import Header from "./components/Header";

const App = () => {
  const [contentList, setContentList] = useState(null);
  const [featureData, setFeatureData] = useState(null);
  const [bgHeader, setBgHeader] = useState(false);

  document.title = "Netflix";

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBgHeader(true);
      } else {
        setBgHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const loadAll = async () => {
      // pegar toda a lista
      let list = await Tmdb.getHomeList();
      setContentList(list);

      // pegar o featured
      let originals = list.filter((i) => i.slug === "originals");
      console.log(originals);
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getContentInfo(chosen.id, "tv");

      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  if (contentList === null)
    return (
      <img
        className="loading"
        src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
        alt="Carregando"
      />
    );
  return (
    <div className="page">
      <Header background={bgHeader} />

      {featureData && <FeaturedContent item={featureData} />}

      <section className="lists">
        {contentList &&
          contentList.map((item, key) => (
            <RowList title={item.title} items={item.items} key={key} />
          ))}
      </section>

      <footer>
        <p>
          Feito por <strong>~Josué</strong>
        </p>
        <p>
          Direitos de imagem para{" "}
          <a href="https://www.netflix.com/br/" _blank="true">
            Netflix
          </a>
        </p>
        <p>
          Dados pegos do site{" "}
          <a href="https://www.themoviedb.org" _blank="true">
            The Movie DB
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
