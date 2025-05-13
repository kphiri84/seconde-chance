'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <span className={styles.logoText}>Seconde<span className={styles.accent}>Chance</span></span>
                <span className={styles.logoSubtext}>Retro Gaming</span>
              </div>
              <p className={styles.footerDescription}>
                Votre boutique spécialisée dans les jeux vidéo et consoles rétro. Des classiques intemporels aux dernières pépites pour tous les passionnés.
              </p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Catégories</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/categories/jeux-retro" className={styles.footerLink}>
                    Jeux Vidéo Rétro
                  </Link>
                </li>
                <li>
                  <Link href="/categories/consoles" className={styles.footerLink}>
                    Consoles
                  </Link>
                </li>
                <li>
                  <Link href="/categories/accessoires" className={styles.footerLink}>
                    Accessoires
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className={styles.footerLink}>
                    Tous les Produits
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Informations</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/a-propos" className={styles.footerLink}>
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/conditions-generales" className={styles.footerLink}>
                    Conditions Générales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className={styles.footerLink}>
                    Politique de Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/livraison" className={styles.footerLink}>
                    Livraison & Retours
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={styles.footerLink}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Contact</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>123 Rue du Gaming, 75000 Paris</span>
                </li>
                <li className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>01 23 45 67 89</span>
                </li>
                <li className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>contact@secondechance.fr</span>
                </li>
              </ul>
              <div className={styles.newsletter}>
                <h4 className={styles.newsletterHeading}>Newsletter</h4>
                <p className={styles.newsletterText}>
                  Inscrivez-vous pour recevoir nos dernières nouveautés et offres spéciales.
                </p>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    S&apos;inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; {currentYear} Seconde Chance - Tous droits réservés
          </p>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentMethod}>Visa</span>
            <span className={styles.paymentMethod}>MasterCard</span>
            <span className={styles.paymentMethod}>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
