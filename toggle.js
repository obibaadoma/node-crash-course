import React, { useState, createContext } from 'react';
import { createRoot } from 'react-dom/client';

const FavoriteLanguageContext = createContext();

const languages = ['JavaScript', 'Python'];

function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleFavoriteLanguage = () => {
    const newIndex = (favoriteLanguage === languages[0]) ? 1 : 0;
    setFavoriteLanguage(languages[newIndex]);
  };

  return (
    <FavoriteLanguageContext.Provider value={{ favoriteLanguage, toggleFavoriteLanguage }}>
      <MainSection />
    </FavoriteLanguageContext.Provider>
  );
}

function MainSection() {
  const context = useContext(FavoriteLanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {context.favoriteLanguage}</p>
      <button id="changeFavorite" onClick={context.toggleFavoriteLanguage}>toggle language</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
