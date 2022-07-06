import styles from './LoadingScreen.module.scss';

const LoadingScreen = () => {
  return (
    <div className={styles.Background}>
      <div className={styles.Spinner}></div>
    </div>
  );
};

export default LoadingScreen;
