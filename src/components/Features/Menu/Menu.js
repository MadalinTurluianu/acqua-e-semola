import { useState } from "react";

import LineBar from "../../general/components/LineBar/LineBar";
import MenuItem from "./components/MenuItem/MenuItem";
import MenuNavigationButton from "./components/MenuNavigationButton/MenuNavigationButton";

import { menuData } from "./menu-data";

import styles from "./Menu.module.css";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("pasta fresca");

  const menuToShow = menuData[selectedMenu];

  const menuTypes = Object.keys(menuData);

  const clickHandler = (type) => {
    setSelectedMenu(type.toLowerCase());
  };

  return (
    <section className={styles.menu}>
      <h2 className={styles.title}>I nostri prodotti</h2>
      <div className={styles.navigation}>
        {menuTypes.map((type) => (
          <MenuNavigationButton
            content={type[0].toUpperCase() + type.slice(1)}
            clickHandler={clickHandler}
            selected={selectedMenu === type}
            key={type}
          />
        ))}
      </div>
      <LineBar width="clamp(20rem, 100%, 60rem)" />

      <div className={styles.products}>
        {menuToShow.map((product, index) => (
          <MenuItem
            title={product.title}
            description={product.description}
            price={product.price}
            icons={product.icons}
            listIndex={index}
            color={
              index % 2 === 0 ? "var(--color-yellow)" : "var(--color-green)"
            }
            key={`menu${index}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
