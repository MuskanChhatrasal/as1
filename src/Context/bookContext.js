import { createContext, useContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [search, setSearch] = useState("react");
  const [bookData, setBookData] = useState([]);
  const ApiKey = "AIzaSyAlp5nD_97i39xM1HZ9Zo0xTgRsNBi5WJE";

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  const getData = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        search +
        "&key=" +
        ApiKey +
        "&maxResults=40"
    );
    setBookData(response.data.items);
    console.log(response.data.items);
  };
  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        bookData,
        setBookData,
        handleSubmit,
        getData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

const useBook = () => useContext(BookContext);

export { BookProvider, useBook };
