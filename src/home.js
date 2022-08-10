import React from "react";
import { useState } from "react";
import "./App.css";
import { Button, Input } from "reactstrap";
import axios from "axios";

const Home = () => {
  const [file, setFile] = useState();
  const [ans, setAns] = useState("Upload the image");

  function handleChange(event) {
    console.log(event.target.files);
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8000/predict";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      setAns(
        `I can tell you "${response.data.confidence}" % the disease is "${response.data.class}"`
      );
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "rgb(24, 33, 46)" }}>
        Tomato Leaf Disease Prediction
      </h1>
      <div className="App">
        <Input
          onInput={handleChange}
          name="in"
          type="file"
          placeholder="enter the sq feet"
        />
        <Button onClick={handleSubmit} color="success">
          sub
        </Button>
        <h2 className="formla">{ans}</h2>
      </div>
    </div>
  );
};

export default Home;
