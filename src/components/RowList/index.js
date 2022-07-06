import React, { useState } from 'react';
import styles from './RowList.module.scss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const RowList = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className={styles.listRow}>
      <h2>{title}</h2>
      <div className={styles.listRow_left} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: '50' }} />
      </div>
      <div className={styles.listRow_right} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: '50' }} />
      </div>

      <div className={styles.listRow_listArea}>
        <div
          className={styles.listRow_list}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.listRow_content}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RowList;
