const API_KEY = process.env.REACT_APP_TMDB_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  const json = await res.json();
  return json;
};

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trendings',
        title: 'Recomendados para Você',
        items: await basicFetch(
          `/trending/all/week?&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt=BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt=BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getContentInfo: async (contentId, type) => {
    let info = {};

    if (contentId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${contentId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        case 'tv':
          info = await basicFetch(
            `/tv/${contentId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        default:
      }
    }

    return info;
  },
};

export default Tmdb;
