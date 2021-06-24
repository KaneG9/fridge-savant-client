import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { FlashContext } from '../../providers/Flash';
import { StoreContext } from "../../providers/store";


const SearchBox = () => {
  const [ingredientInput, setIngredientInput] = useState("");

  const [{ basket }, { addIngredient }] =
    useContext(StoreContext);

  const {createFlashMessage} = useContext(FlashContext);

  const queryChange = (ingredientInput) => {
   if(ingredientInput === "" ) {
    createFlashMessage({
      type: 'error',
      message: 'Please enter a valid ingredient.'
    })
    return
   } else if (basket.find((ingredient) => ingredient.name === ingredientInput.toLowerCase())) {
    createFlashMessage({
      type: 'error',
      message: 'You have already added that ingredient.'
    })
    setIngredientInput("")
    return
   }
    addIngredient({ name: ingredientInput.toLowerCase()})
    setIngredientInput("")
  }

  return (
    <div className="SearchBox">
      <div className="form-container">
        <div className="form-tab">
          <div className="search-field">
            <FontAwesomeIcon icon={faCarrot} className="search-icon" />
            <form>
              <input
                type="text"
                className="ingredient-input"
                placeholder="What's in your fridge?"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
            </form>
          </div>
          <div
            className="add-ingredient-btn"
            onClick={() =>
              queryChange(ingredientInput)
            }
          >
            <p>add ingredient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
