import React from 'react';
import styles from './MyInfo.module.scss';

interface MyInfoProps {
  /** Полное имя пользователя */
  name: string;
  /** Профессия или описание */
  profession: string;
}

/**
 * Компонент отображения имени и профессии с красивым японским стилем.
 * Поддерживает forwardRef для внешнего управления.
 */
const MyInfo = React.memo(
  React.forwardRef<HTMLDivElement, MyInfoProps>(({ name, profession }, ref) => {
    return (
      <section ref={ref} className={styles.infoContainer} aria-label="User Information">
        <div className={styles.headerContent}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.profession}>{profession}</h2>
        </div>
      </section>
    );
  })
);

MyInfo.displayName = 'MyInfo';

export default MyInfo;
