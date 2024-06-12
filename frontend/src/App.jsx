import { useState } from "react";
import { useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

import "./App.css";

function App() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get("/api/animals")
      .then((response) => {
        // handle success
        setAnimals(response.data.animals);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {animals.map((animal) => {
        return <h1>{animal.name}</h1>;
      })}
    </>
  );
}

export default App;
