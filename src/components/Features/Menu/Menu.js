import MenuItem from "./components/MenuItem/MenuItem";

import menuData from "./menu-data";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <section className={styles.menu}>
      <h2>I nostri prodotti</h2>
      <div>
        {menuData.map((product, index) => (
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
