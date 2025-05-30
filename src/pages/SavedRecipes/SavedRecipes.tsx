import React, { useEffect } from 'react';
import { useGlobal } from '../../hooks/GlobalContext';

const SavedRecipes: React.FC = () => {
  const { savedRecipes, setSavedRecipes } = useGlobal();

  useEffect(() => {
    // Example: fetch saved recipes from API or local storage if needed
    // (Assume setSavedRecipes is used to update global state)
    // fetchSavedRecipes().then(setSavedRecipes);
  }, [setSavedRecipes]);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', boxSizing: 'border-box', background: '#fafafa' }}>
      <h1>Saved Recipes</h1>
      <div>
        Hi
      </div>
    </div>
  );
};

export default SavedRecipes;