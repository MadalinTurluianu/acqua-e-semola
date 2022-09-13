import { useState } from "react";

import LineBar from "../../general/components/LineBar/LineBar";
import MenuItem from "./components/MenuItem/MenuItem";
import MenuNavigationButton from "./components/MenuNavigationButton/MenuNavigationButton";

import { menuData } from "./menu-data";

import styles from "./Menu.module.css";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("pasta");

  const menuToShow = menuData[selectedMenu];

  const menuTypes = Object.keys(menuData);

  const clickHandler = (type) => {
    setSelectedMenu(type.toLowerCase());
  };

  return (
    <section className={styles.menu}>
      <div className={styles.title}>
        <h2>I nostri prodotti</h2>
        <div>
          {menuTypes.map((type) => (
            <MenuNavigationButton
              content={type[0].toUpperCase() + type.slice(1)}
              clickHandler={clickHandler}
              selected={selectedMenu === type}
              key={type}
            />
          ))}
        </div>
        <LineBar style={{ width: "clamp(20rem, 100%, 60rem)" }} />
      </div>
      <div>
        {menuToShow.map((product, index) => (
          <MenuItem
            title={product.title}
            ingredients={product.ingredients}
            price={product.price}
            picture={product.picture}
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
