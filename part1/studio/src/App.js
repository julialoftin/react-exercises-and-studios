import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/RecipeDescription';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';
import RecipeAuthor from './components/Description';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
      <div className="recipePhotoBlock">
        <RecipeDescription />
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
    </div>
  );
}

export default App;
