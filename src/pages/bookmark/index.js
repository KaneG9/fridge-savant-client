import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { getAuthToken } from "../../lib/token";
import Header from "../../components/Header";
import UserText from "../../components/UserText";
import MealList from "../../components/MealList";
import Footer from "../../components/Footer";

const Bookmark = () => {
  const [bookmarkData, setBookmarkData] = useState([]);

  const getBookmarks = async () => {
    let bookmarkIds = await getBookmarkAll()
    console.log('bookmarkids', bookmarkIds)
    let bookmarkIdString = bookmarkIds.join(",");
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${bookmarkIdString}`
    );
    setBookmarkData(response.data);
  };

  const getBookmarkAll = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}api/bookmarks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    console.log(response)
    return response.data;
  };

  document.addEventListener("DOMContentLoaded", () => {
    getBookmarks();
  });

  return (
    <div className="Bookmark">
      <div className="Header">
        <Header />
      </div>
      <div className="UserText">
        <UserText />
      </div>
      <div class="Recipes">
        <MealList mealData={bookmarkData} />
      </div>
      <div class="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Bookmark;
