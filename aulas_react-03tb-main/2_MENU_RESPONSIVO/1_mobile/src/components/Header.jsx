import { List } from "@phosphor-icons/react"

import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.mobile}>
            <div className={styles.menu}>
                <button>
                    <List size={32} />
                </button>

                <h1>Logo</h1>
            </div>

            <div className={styles.options}>
              <nav>
                <a href="">Home</a>
                <a href="">Resultados</a>
                <a href="">Produtos</a>
                <a href="">Login</a>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header