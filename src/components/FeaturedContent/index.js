import React from 'react';
import styles from './FeaturedContent.module.scss';

const FeaturedContent = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length < 1) {
    description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum tincidunt lectus eget mollis. Integer mauris ligula, sagittis accumsan libero sed, rutrum mattis mi. Vestibulum consequat, mauris quis maximus mollis, neque tellus scelerisque risus, nec tincidunt leo tellus iaculis eros.';
  }
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featured_vertical}>
        <div
          className={styles.featured_horizontal}
          style={
            item.original_name === '理想之城' ||
            item.original_name === '亲爱的爸妈'
              ? { paddingBottom: '150px' }
              : null
          }
        >
          <div className={styles.featured_name}>{item.original_name}</div>

          {/* INFO */}
          <div className={styles.featured_info}>
            <div className={styles.featured_points}>
              {item.vote_average} pontos
            </div>
            <div className={styles.featured_year}>
              {firstDate.getFullYear()}
            </div>
            <div className={styles.featured_seasons}>
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.featured_description}>{description}</div>

          {/* BUTTONS */}
          <div className={styles.featured_buttons}>
            <a
              href={`watch/${item.id}`}
              className={styles.featured_watchButton}
            >
              ▶ Assistir
            </a>
            <a
              href={`list/add/${item.id}`}
              className={styles.featured_myListButton}
            >
              ✚ Minha Lista
            </a>
          </div>

          <div className={styles.featured_genres}>
            <strong>Genêro:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
