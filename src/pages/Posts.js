import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import classes from "./Posts.module.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlerClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];

  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = posts.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handlerClick}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageInreamentBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageInreamentBtn = <li onClick={handleNextButton}> &hellip;</li>;
  }

  let pageDecreamentBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecreamentBtn = <li onClick={handlePrevButton}> &hellip;</li>;
  }

  return (
    <>
      <tbody>
        <tr>
          <th >Title</th>
          <th>Description</th>
          <th>Words</th>
          <th>Author</th>
        </tr>
        {currentItem.map((item, i) => (
          <tr key={i}>
            <td className={classes.title}>{item.title}</td>
            <td >{item.body}</td>
            <td>458</td>
            <td className={classes.description}>Lean Graham</td>
          </tr>
        ))}
      </tbody>

      <ul className={classes.pageNumbers}>
        <li>
          <button
            onClick={handlePrevButton}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecreamentBtn}
        {renderPageNumbers}
        {pageInreamentBtn}
        <li>
          <button
            onClick={handleNextButton}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}

export default Posts;
