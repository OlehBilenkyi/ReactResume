import React from 'react';
import styles from './MyInfo.module.scss';

interface MyInfoProps {
  name: string;
  profession: string;
}

const MyInfo = React.forwardRef<HTMLDivElement, MyInfoProps>(({ name, profession }, ref) => {
  return (
    <div ref={ref} className={styles.headerContent}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.profession}>{profession}</h2>
    </div>
  );
});

export default MyInfo;
