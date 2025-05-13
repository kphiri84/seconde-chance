'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simuler un compteur de panier (à remplacer par la logique réelle)
  useEffect(() => {
    // Ici, vous pourriez récupérer le nombre d'articles dans le panier depuis le localStorage ou un état global
    setCartCount(0);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <span className={styles.logoText}>Seconde<span className={styles.accent}>Chance</span></span>
              <span className={styles.logoSubtext}>Retro Gaming</span>
            </div>
          </Link>
        </div>

        <div className={styles.mobileMenuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Accueil
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/categories" className={styles.navLink}>
                Catégories
              </Link>
              <div className={styles.dropdown}>
                <ul className={styles.dropdownList}>
                  <li>
                    <Link href="/categories/jeux-retro" className={styles.dropdownLink}>
                      Jeux Vidéo Rétro
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/consoles" className={styles.dropdownLink}>
                      Consoles
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/accessoires" className={styles.dropdownLink}>
                      Accessoires
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/produits" className={styles.navLink}>
                Tous les Produits
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/a-propos" className={styles.navLink}>
                À Propos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Rechercher..." className={styles.searchInput} />
            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
          <Link href="/compte" className={styles.iconButton}>
            <FaUser />
          </Link>
          <Link href="/panier" className={styles.iconButton}>
            <FaShoppingCart />
            {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
