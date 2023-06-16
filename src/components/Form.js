import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

import "./Form.css";

const Form = () => {
  const input = useRef(null);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${input.current.value}`,
        {
          params: {
            client_id: "1ZNDDaeKfQtgTL5NxYmvolvYOiZKMWnS2kuqaR2Tlsw",
          },
        }
      )
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
      });
    input.current.value = "";
  };

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/search/photos?query="desktop"`, {
        params: {
          client_id: "1ZNDDaeKfQtgTL5NxYmvolvYOiZKMWnS2kuqaR2Tlsw",
        },
      })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="Form">
        <h1>Unsplash</h1>
        <h1 className="Form__Header">Image Searcher 🔍</h1>
        <form>
          <input ref={input} type="text" />
          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
      <Card data={data} />
    </>
  );
};

export default Form;
