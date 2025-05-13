'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGamepad, FaTv, FaHeadphones } from 'react-icons/fa';
import styles from './categories.module.scss';

export default function Categories() {
  return (
    <div className={styles.categoriesPage}>
      {/* Bannière de la page */}
      <section className={styles.pageBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.pageTitle}>Catégories</h1>
          <p className={styles.pageDescription}>
            Explorez notre sélection de produits par catégorie et trouvez les trésors du gaming rétro que vous recherchez.
          </p>
        </div>
        <div className={styles.pixelOverlay}></div>
      </section>

      {/* Contenu principal */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.categoriesGrid}>
            {/* Catégorie Jeux Vidéo Rétro */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1" 
                  alt="Jeux Vidéo Rétro" 
                  width={600} 
                  height={400}
                  layout="responsive"
                />
                <div className={styles.categoryOverlay}></div>
                <div className={styles.categoryIcon}>
                  <FaGamepad />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryTitle}>Jeux Vidéo Rétro</h2>
                <p className={styles.categoryDescription}>
                  Des titres emblématiques pour vos consoles vintage telles que la Super Nintendo, Mega Drive, PlayStation 1, etc.
                </p>
                <div className={styles.categoryTags}>
                  <span className={styles.tag}>Super Nintendo</span>
                  <span className={styles.tag}>Mega Drive</span>
                  <span className={styles.tag}>PlayStation</span>
                  <span className={styles.tag}>Nintendo 64</span>
                </div>
                <Link href="/categories/jeux-retro" className={styles.categoryButton}>
                  Explorer la catégorie
                </Link>
              </div>
            </div>

            {/* Catégorie Consoles */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1531594652722-322db808cd6f" 
                  alt="Consoles" 
                  width={600} 
                  height={400}
                  layout="responsive"
                />
                <div className={styles.categoryOverlay}></div>
                <div className={styles.categoryIcon}>
                  <FaTv />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryTitle}>Consoles</h2>
                <p className={styles.categoryDescription}>
                  Une gamme de consoles, du Game Boy au PS4 en passant par la Nintendo 64 et autres.
                </p>
                <div className={styles.categoryTags}>
                  <span className={styles.tag}>Game Boy</span>
                  <span className={styles.tag}>Nintendo 64</span>
                  <span className={styles.tag}>PlayStation</span>
                  <span className={styles.tag}>Xbox</span>
                </div>
                <Link href="/categories/consoles" className={styles.categoryButton}>
                  Explorer la catégorie
                </Link>
              </div>
            </div>

            {/* Catégorie Accessoires */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1579712267685-42da80181807" 
                  alt="Accessoires" 
                  width={600} 
                  height={400}
                  layout="responsive"
                />
                <div className={styles.categoryOverlay}></div>
                <div className={styles.categoryIcon}>
                  <FaHeadphones />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryTitle}>Accessoires</h2>
                <p className={styles.categoryDescription}>
                  Tout ce qu&apos;il vous faut pour compléter votre setup et plonger dans l&apos;univers des jeux vidéo rétro.
                </p>
                <div className={styles.categoryTags}>
                  <span className={styles.tag}>Manettes</span>
                  <span className={styles.tag}>Cartes mémoire</span>
                  <span className={styles.tag}>Adaptateurs</span>
                  <span className={styles.tag}>Câbles</span>
                </div>
                <Link href="/categories/accessoires" className={styles.categoryButton}>
                  Explorer la catégorie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des sous-catégories populaires */}
      <section className={styles.subcategoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sous-catégories populaires</h2>
          <div className={styles.subcategoriesGrid}>
            <Link href="/categories/jeux-retro/super-nintendo" className={styles.subcategoryCard}>
              <div className={styles.subcategoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" 
                  alt="Super Nintendo" 
                  width={200} 
                  height={200}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.subcategoryTitle}>Super Nintendo</h3>
            </Link>

            <Link href="/categories/jeux-retro/playstation" className={styles.subcategoryCard}>
              <div className={styles.subcategoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1605901309584-818e25960a8f" 
                  alt="PlayStation" 
                  width={200} 
                  height={200}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.subcategoryTitle}>PlayStation</h3>
            </Link>

            <Link href="/categories/consoles/nintendo-64" className={styles.subcategoryCard}>
              <div className={styles.subcategoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1635141896259-89939c449ec3" 
                  alt="Nintendo 64" 
                  width={200} 
                  height={200}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.subcategoryTitle}>Nintendo 64</h3>
            </Link>

            <Link href="/categories/accessoires/manettes" className={styles.subcategoryCard}>
              <div className={styles.subcategoryImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0" 
                  alt="Manettes" 
                  width={200} 
                  height={200}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.subcategoryTitle}>Manettes</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
