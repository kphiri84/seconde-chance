# Seconde Chance - Boutique de Jeux Vidéo Rétro

Seconde Chance est une boutique e-commerce spécialisée dans les jeux vidéo et consoles rétro, développée avec Next.js et JavaScript. Le design est inspiré de l'univers des jeux vidéo rétro avec une palette de couleurs néon et un style pixelisé.

## Description

Seconde Chance propose une sélection de jeux vidéo et de consoles rétro soigneusement choisis, allant des classiques intemporels aux dernières pépites. Que vous soyez un collectionneur passionné ou un amateur de rétro-gaming, vous trouverez ici des articles de qualité pour satisfaire toutes vos envies de gaming !

### Catégories de produits

- **Jeux vidéo rétro** : Des titres emblématiques pour vos consoles vintage telles que la Super Nintendo, Mega Drive, PlayStation 1, etc.
- **Consoles rétro et modernes** : Une gamme de consoles, du Game Boy au PS4 en passant par la Nintendo 64 et autres.
- **Accessoires et objets de collection** : Tout ce qu'il vous faut pour compléter votre setup et plonger dans l'univers des jeux vidéo rétro.

## Fonctionnalités

- Design inspiré des jeux vidéo rétro avec effets néon
- Navigation intuitive par catégories
- Filtrage et tri des produits
- Système de recherche
- Panier d'achat
- Système d'authentification
- Responsive design pour tous les appareils

## Technologies utilisées

- **Frontend** : Next.js, React, JavaScript, SASS
- **Styles** : SCSS Modules
- **Icônes** : React Icons
- **Images** : Next.js Image Optimization
- **Animation** : Framer Motion
- **Paiement** : Stripe (préparé pour l'intégration)
- **Authentification** : NextAuth.js

## Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## Structure du projet

```
src/
├── app/                    # Structure des pages (App Router)
│   ├── (shop)/             # Layout partagé pour les pages de la boutique
│   ├── api/                # Routes API
│   ├── auth/               # Pages d'authentification
│   ├── categories/         # Pages des catégories
│   ├── produits/           # Page des produits
│   ├── panier/             # Page du panier
│   ├── compte/             # Page du compte utilisateur
│   ├── a-propos/           # Page À propos
│   ├── contact/            # Page de contact
│   ├── globals.css         # Styles globaux CSS
│   └── layout.js           # Layout principal
├── components/             # Composants réutilisables
├── lib/                    # Utilitaires et fonctions
└── styles/                 # Styles SCSS globaux
```

## Déploiement

Ce projet peut être facilement déployé sur Vercel ou toute autre plateforme supportant Next.js.
