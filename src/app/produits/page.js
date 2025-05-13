'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaFilter, FaSortAmountDown, FaGamepad, FaTv, FaHeadphones, FaChevronDown } from 'react-icons/fa';
import styles from './produits.module.scss';

export default function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  // Produits fictifs pour la démo
  const products = [
    {
      id: 1,
      name: 'Super Nintendo Entertainment System',
      category: 'consoles',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1531594652722-322db808cd6f',
      rating: 5,
      reviewCount: 24,
      badge: 'Populaire'
    },
    {
      id: 2,
      name: 'The Legend of Zelda: Ocarina of Time',
      category: 'jeux-retro',
      price: 39.99,
      oldPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
      rating: 5,
      reviewCount: 42,
      badge: 'Promo'
    },
    {
      id: 3,
      name: 'PlayStation 1 (PSX)',
      category: 'consoles',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212',
      rating: 4,
      reviewCount: 18
    },
    {
      id: 4,
      name: 'Manette Nintendo 64',
      category: 'accessoires',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1579712267685-42da80181807',
      rating: 4,
      reviewCount: 15
    },
    {
      id: 5,
      name: 'Sonic the Hedgehog (Mega Drive)',
      category: 'jeux-retro',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      rating: 4,
      reviewCount: 28
    },
    {
      id: 6,
      name: 'Game Boy Color',
      category: 'consoles',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212',
      rating: 5,
      reviewCount: 31
    },
    {
      id: 7,
      name: 'Final Fantasy VII (PS1)',
      category: 'jeux-retro',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
      rating: 5,
      reviewCount: 56,
      badge: 'Classique'
    },
    {
      id: 8,
      name: 'Câble RGB SCART pour SNES',
      category: 'accessoires',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1579712267685-42da80181807',
      rating: 4,
      reviewCount: 12
    }
  ];

  // Filtrer les produits en fonction des sélections
  const filteredProducts = products.filter(product => {
    // Filtre par catégorie
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    
    // Filtre par prix
    if (selectedPrice === 'under30' && product.price >= 30) {
      return false;
    } else if (selectedPrice === '30to60' && (product.price < 30 || product.price > 60)) {
      return false;
    } else if (selectedPrice === '60to100' && (product.price < 60 || product.price > 100)) {
      return false;
    } else if (selectedPrice === 'over100' && product.price <= 100) {
      return false;
    }
    
    return true;
  });

  // Trier les produits
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      // Par défaut, trier par popularité (nombre d'avis)
      return b.reviewCount - a.reviewCount;
    }
  });

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars.join('');
  };

  return (
    <div className={styles.productsPage}>
      {/* Bannière de la page */}
      <section className={styles.pageBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.pageTitle}>Nos Produits</h1>
          <p className={styles.pageDescription}>
            Découvrez notre sélection de jeux vidéo et consoles rétro soigneusement choisis
          </p>
        </div>
        <div className={styles.pixelOverlay}></div>
      </section>

      {/* Contenu principal */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.productsLayout}>
            {/* Sidebar des filtres */}
            <aside className={`${styles.filterSidebar} ${isFilterOpen ? styles.open : ''}`}>
              <div className={styles.filterHeader}>
                <h2 className={styles.filterTitle}>Filtres</h2>
                <button 
                  className={styles.mobileFilterToggle}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <FaFilter />
                </button>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Catégories</h3>
                <div className={styles.filterOptions}>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="all" 
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                    />
                    <span className={styles.optionLabel}>Tous les produits</span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="jeux-retro"
                      checked={selectedCategory === 'jeux-retro'}
                      onChange={() => setSelectedCategory('jeux-retro')}
                    />
                    <span className={styles.optionLabel}>
                      <FaGamepad className={styles.optionIcon} />
                      Jeux Vidéo Rétro
                    </span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="consoles"
                      checked={selectedCategory === 'consoles'}
                      onChange={() => setSelectedCategory('consoles')}
                    />
                    <span className={styles.optionLabel}>
                      <FaTv className={styles.optionIcon} />
                      Consoles
                    </span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="accessoires"
                      checked={selectedCategory === 'accessoires'}
                      onChange={() => setSelectedCategory('accessoires')}
                    />
                    <span className={styles.optionLabel}>
                      <FaHeadphones className={styles.optionIcon} />
                      Accessoires
                    </span>
                  </label>
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Prix</h3>
                <div className={styles.filterOptions}>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="price" 
                      value="all"
                      checked={selectedPrice === 'all'}
                      onChange={() => setSelectedPrice('all')}
                    />
                    <span className={styles.optionLabel}>Tous les prix</span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="price" 
                      value="under30"
                      checked={selectedPrice === 'under30'}
                      onChange={() => setSelectedPrice('under30')}
                    />
                    <span className={styles.optionLabel}>Moins de 30€</span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="price" 
                      value="30to60"
                      checked={selectedPrice === '30to60'}
                      onChange={() => setSelectedPrice('30to60')}
                    />
                    <span className={styles.optionLabel}>30€ - 60€</span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="price" 
                      value="60to100"
                      checked={selectedPrice === '60to100'}
                      onChange={() => setSelectedPrice('60to100')}
                    />
                    <span className={styles.optionLabel}>60€ - 100€</span>
                  </label>
                  <label className={styles.filterOption}>
                    <input 
                      type="radio" 
                      name="price" 
                      value="over100"
                      checked={selectedPrice === 'over100'}
                      onChange={() => setSelectedPrice('over100')}
                    />
                    <span className={styles.optionLabel}>Plus de 100€</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Contenu principal des produits */}
            <div className={styles.productsContent}>
              <div className={styles.productsHeader}>
                <div className={styles.productsCount}>
                  {sortedProducts.length} produits trouvés
                </div>
                <div className={styles.productControls}>
                  <div className={styles.searchBox}>
                    <input type="text" placeholder="Rechercher..." className={styles.searchInput} />
                    <button className={styles.searchButton}>
                      <FaSearch />
                    </button>
                  </div>
                  <div className={styles.sortDropdown}>
                    <div className={styles.sortLabel}>
                      <FaSortAmountDown className={styles.sortIcon} />
                      <span>Trier par:</span>
                    </div>
                    <select 
                      className={styles.sortSelect}
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popularity">Popularité</option>
                      <option value="price-asc">Prix croissant</option>
                      <option value="price-desc">Prix décroissant</option>
                      <option value="name">Nom</option>
                    </select>
                    <FaChevronDown className={styles.dropdownIcon} />
                  </div>
                  <button 
                    className={styles.mobileFilterButton}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <FaFilter />
                    <span>Filtres</span>
                  </button>
                </div>
              </div>

              <div className={styles.productsGrid}>
                {sortedProducts.map(product => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productImage}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={300} 
                        height={300} 
                        layout="responsive"
                      />
                      {product.badge && (
                        <div className={styles.productBadge}>{product.badge}</div>
                      )}
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productTitle}>{product.name}</h3>
                      <p className={styles.productPrice}>
                        {product.oldPrice && (
                          <span className={styles.oldPrice}>{product.oldPrice.toFixed(2)} €</span>
                        )}
                        {product.price.toFixed(2)} €
                      </p>
                      <div className={styles.productRating}>
                        <span className={styles.stars}>{renderStars(product.rating)}</span>
                        <span className={styles.reviewCount}>({product.reviewCount} avis)</span>
                      </div>
                      <button className={styles.addToCartButton}>Ajouter au panier</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.pagination}>
                <button className={`${styles.pageButton} ${styles.active}`}>1</button>
                <button className={styles.pageButton}>2</button>
                <button className={styles.pageButton}>3</button>
                <span className={styles.pageDots}>...</span>
                <button className={styles.pageButton}>10</button>
                <button className={`${styles.pageButton} ${styles.nextButton}`}>
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
