import axios from "axios";
import StoreConstants from "../constants";
import { setAuthToken, getAuthToken } from "../../token";

export const signIn = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_URL}api/users/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Set the store token
    setAuthToken(response.data.token);

    // Create an action
    return {
      type: StoreConstants.SIGN_IN,
      payload: { user: response.data },
      status: response.status
    }
  } catch (error) {
    return {
      type: StoreConstants.STORE_ERROR,
      payload: { message: error.response.data },
      status: error.response.status
    }
  }
};

export const getUser = async () => {
  const response = await axios.get(`${process.env.SERVER_URL}api/users`, {
    headers: {
      Storeorization: `Bearer ${getAuthToken()}`,
    },
  });

  // Create an action
  return {
    type: StoreConstants.GET_USER,
    payload: { user: response.data },
  };
};

export const addIngredient = (ingredient) => {
  return {
    type: StoreConstants.ADD_TO_BASKET,
    payload: { ingredient },
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: StoreConstants.REMOVE_FROM_BASKET,
    payload: { ingredient },
  };
};

export const clearIngredients = () => {
  return {
    type: StoreConstants.CLEAR_BASKET,
  };
};

export const clearErrors = () => {
  return {
    type: StoreConstants.CLEAR_ERRORS,
  }
}
