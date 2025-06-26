import React from "react";
import { Helmet } from "react-helmet";

// Вариант 1: Именованный экспорт (тогда импорт через { MetaHead })
export const MetaHead = () => (
  // Убрал `React.FC` для простоты
  <Helmet>
    <title>Олег Сущенко — Frontend Developer</title>
    <meta
      name="description"
      content="Портфолио Frontend разработчика Олега Сущенко"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

// ИЛИ Вариант 2: Default export (тогда импорт без {})
// export default MetaHead;
