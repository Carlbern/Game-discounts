# Game Discounts 🎮

A React + TypeScript web application that helps you find the best deals on video games by aggregating discounts from multiple retailers using the Cheapshark API.

## 📸 Preview


## 🚀 Features

- **🔍 Game Search**: Search for specific games to find current discounts
- **🏷️ Best Deals**: View the best available prices across multiple stores
- **🆓 Free Games**: Discover currently available free game deals
- **🎮 Game Details**: Get comprehensive information about specific games including:
  - Game title and thumbnail
  - Steam and Metacritic reviews
  - Best available prices
  - Discounts from different retailers
- **📊 Triple A Games**: Browse deals on popular AAA titles
- **📈 Recent &amp; Review Lists**: View recently added deals and highly reviewed games

## 🛠️ Built With

- **Frontend**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: CSS Modules for component-scoped styles
- **UI Components**: [React Slick](https://react-slick.neostack.com/) for carousels
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Loading Indicators**: [React Loading Indicators](https://www.npmjs.com/package/react-loading-indicators)
- **API**: [Cheapshark](https://www.cheapshark.com/api) - Game price comparison API

## 📁 Project Structure

```
game-discounts/
├── public/                  # Static assets
│   └── logos/               # Store logos (steam, metacritic)
├── src/
│   ├── assets/              # Fonts and other assets
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── FreeDeal.tsx
│   │   ├── GameDeal.tsx
│   │   ├── Header.tsx
│   │   ├── ListSimple.tsx
│   │   └── TripleA.tsx
│   ├── pages/               # Main page components
│   │   ├── About.tsx
│   │   ├── Game.tsx
│   │   ├── Home.tsx
│   │   └── Search.tsx
│   ├── styles/              # CSS modules
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/Carlbern/Game-discounts.git
   cd Game-discounts
  ```
2. Install dependencies:
  ```bash
   npm install
  ```
3. Start the development server:
  ```bash
   npm run dev
  ```
4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts


| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the app for production         |
| `npm run lint`    | Runs ESLint to check for code issues  |
| `npm run preview` | Previews the production build locally |


## 🌐 API Usage

This application uses the [Cheapshark API](https://www.cheapshark.com/api) to fetch game data, deals, and store information. The API is free to use and requires no authentication.

### API Endpoints Used

- `https://www.cheapshark.com/api/1.0/games` - Search for games
- `https://www.cheapshark.com/api/1.0/games?id={id}` - Get specific game details
- `https://www.cheapshark.com/api/1.0/deals` - Get current deals
- `https://www.cheapshark.com/api/1.0/stores` - Get store information

## 📱 Pages

### Home Page

The landing page featuring:

- Free game deals section
- Triple A games showcase
- Recently added deals list
- Highly reviewed games list

### Game Page

Detailed view for a specific game showing:

- Game banner and thumbnail
- Steam and Metacritic ratings
- Best available deal
- Price comparisons across stores
- Direct links to purchase

### Search Page

Search functionality that allows users to:

- Search for games by title
- View search results with game thumbnails
- Navigate to individual game pages

### About Page

Information about the website including:

- Purpose and functionality
- Technologies used
- API information

## 🎨 Components

### Header

Navigation header with main menu and branding

### Footer

Page footer with additional links and information

### FreeDeal

Displays currently available free game deals with:

- Game thumbnail background
- Original price and discount percentage
- Direct link to claim the free game

### GameDeal

Reusable component for displaying game deals with:

- Price information
- Store logos
- Review scores

### TripleA

Showcase of popular AAA games with current discounts

### ListSimple

Generic list component for displaying game collections

## 🎯 Usage Examples

### Finding Game Deals

1. Navigate to the home page
2. Browse the free deals, AAA games, or recent lists
3. Click on any game to see detailed pricing information

### Searching for Specific Games

1. Use the search functionality
2. Enter the game title you're looking for
3. View search results with current prices
4. Click on a game to see all available deals

### Comparing Prices

1. Navigate to a specific game page
2. View prices from different retailers
3. Click on the best deal to be redirected to the store

## 🙏 Acknowledgments

- [Cheapshark API](https://www.cheapshark.com/api) for providing game deal data
- [React](https://react.dev/) for the frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Font Awesome](https://fontawesome.com/) for icons

## 📧 Contact

For questions or feedback, please contact the project maintainer.

---

**Project Link**: [https://github.com/Carlbern/Game-discounts](https://github.com/Carlbern/Game-discounts)

**Last Updated**: September 3, 2026
