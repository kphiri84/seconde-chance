import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import { FaGamepad, FaTv, FaHeadphones, FaShippingFast, FaCheck, FaComments } from 'react-icons/fa'

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Bannière principale avec effet parallaxe */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleMain}>Seconde Chance</span>
            <span className={styles.heroTitleSub}>Retro Gaming</span>
          </h1>
          <p className={styles.heroText}>
            Redécouvrez les classiques du jeu vidéo et plongez dans la nostalgie avec notre sélection de jeux et consoles rétro
          </p>
          <div className={styles.heroButtons}>
            <Link href="/produits" className={`${styles.button} ${styles.primaryButton}`}>
              Explorer la boutique
            </Link>
            <Link href="/categories" className={`${styles.button} ${styles.secondaryButton}`}>
              Voir les catégories
            </Link>
          </div>
        </div>
        <div className={styles.pixelOverlay}></div>
      </section>

      {/* Section des catégories */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nos Catégories</h2>
          <div className={styles.categoriesGrid}>
            <Link href="/categories/jeux-retro" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <FaGamepad />
              </div>
              <h3 className={styles.categoryTitle}>Jeux Vidéo Rétro</h3>
              <p className={styles.categoryDescription}>
                Des titres emblématiques pour vos consoles vintage telles que la Super Nintendo, Mega Drive, PlayStation 1, etc.
              </p>
              <span className={styles.categoryLink}>Découvrir</span>
            </Link>

            <Link href="/categories/consoles" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <FaTv />
              </div>
              <h3 className={styles.categoryTitle}>Consoles</h3>
              <p className={styles.categoryDescription}>
                Une gamme de consoles, du Game Boy au PS4 en passant par la Nintendo 64 et autres.
              </p>
              <span className={styles.categoryLink}>Découvrir</span>
            </Link>

            <Link href="/categories/accessoires" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <FaHeadphones />
              </div>
              <h3 className={styles.categoryTitle}>Accessoires</h3>
              <p className={styles.categoryDescription}>
                Tout ce qu'il vous faut pour compléter votre setup et plonger dans l'univers des jeux vidéo rétro.
              </p>
              <span className={styles.categoryLink}>Découvrir</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section des produits en vedette */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Produits en Vedette</h2>
          <div className={styles.featuredGrid}>
            {/* Produit 1 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1531594652722-322db808cd6f" 
                  alt="Super Nintendo Entertainment System" 
                  width={300} 
                  height={300} 
                  layout="responsive"
                />
                <div className={styles.productBadge}>Populaire</div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>Super Nintendo Entertainment System</h3>
                <p className={styles.productPrice}>89,99 €</p>
                <div className={styles.productRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(24 avis)</span>
                </div>
                <button className={styles.addToCartButton}>Ajouter au panier</button>
              </div>
            </div>

            {/* Produit 2 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1" 
                  alt="The Legend of Zelda: Ocarina of Time" 
                  width={300} 
                  height={300} 
                  layout="responsive"
                />
                <div className={styles.productBadge}>Promo</div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>The Legend of Zelda: Ocarina of Time</h3>
                <p className={styles.productPrice}>
                  <span className={styles.oldPrice}>59,99 €</span>
                  39,99 €
                </p>
                <div className={styles.productRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(42 avis)</span>
                </div>
                <button className={styles.addToCartButton}>Ajouter au panier</button>
              </div>
            </div>

            {/* Produit 3 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1599409636295-e3cf3538f212" 
                  alt="PlayStation 1" 
                  width={300} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>PlayStation 1 (PSX)</h3>
                <p className={styles.productPrice}>79,99 €</p>
                <div className={styles.productRating}>
                  <span className={styles.stars}>★★★★☆</span>
                  <span className={styles.reviewCount}>(18 avis)</span>
                </div>
                <button className={styles.addToCartButton}>Ajouter au panier</button>
              </div>
            </div>

            {/* Produit 4 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1579712267685-42da80181807" 
                  alt="Manette Nintendo 64" 
                  width={300} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>Manette Nintendo 64</h3>
                <p className={styles.productPrice}>29,99 €</p>
                <div className={styles.productRating}>
                  <span className={styles.stars}>★★★★☆</span>
                  <span className={styles.reviewCount}>(15 avis)</span>
                </div>
                <button className={styles.addToCartButton}>Ajouter au panier</button>
              </div>
            </div>
          </div>
          <div className={styles.viewAllContainer}>
            <Link href="/produits" className={styles.viewAllButton}>
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Section des avantages */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShippingFast />
              </div>
              <h3 className={styles.featureTitle}>Expédition rapide</h3>
              <p className={styles.featureDescription}>
                Votre commande est préparée et expédiée dans les plus brefs délais pour que vous puissiez profiter de vos jeux sans attendre !
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCheck />
              </div>
              <h3 className={styles.featureTitle}>Produits vérifiés</h3>
              <p className={styles.featureDescription}>
                Chaque article est soigneusement testé et décrit pour vous garantir une expérience sans mauvaise surprise.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaComments />
              </div>
              <h3 className={styles.featureTitle}>Service client à l'écoute</h3>
              <p className={styles.featureDescription}>
                Vous avez des questions ? N'hésitez pas à nous contacter, nous répondons rapidement et avec plaisir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section de témoignages */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ce que disent nos clients</h2>
          <div className={styles.testimonialsSlider}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "J'ai acheté une Super Nintendo en excellent état. L'emballage était soigné et la console fonctionne parfaitement. Je recommande vivement cette boutique pour tous les amateurs de retro gaming !"
                </p>
                <div className={styles.testimonialRating}>★★★★★</div>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <Image 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                    alt="Avatar" 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>Thomas D.</h4>
                  <p className={styles.testimonialDate}>12 avril 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'appel à l'action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Prêt à redécouvrir vos jeux préférés ?</h2>
            <p className={styles.ctaText}>
              Faites un tour dans notre boutique, trouvez vos prochaines pépites et vivez l'expérience rétro comme jamais auparavant !
            </p>
            <Link href="/produits" className={styles.ctaButton}>
              Explorer la boutique
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
