import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout/Layout";

const Practice = () => {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name) => <li>{name}</li>);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  const increment = () => {
    setCount(count + 1);
  };
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The submitted username is: " + usernameRef.current.value);
  };
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <Layout>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <p>You entered: {value}</p>
      </div>
      <ul>{listItems}</ul>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>You clicked {count} times</p>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <p>Count: {count}</p>
      </div>
      <div>
        <p>{time}</p>
        <button onClick={handleStart}>start</button>
        <button onClick={handlePauseResume}>resume</button>
        <button onClick={handleReset}>reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" ref={usernameRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="app">
        <div>
          Search: <input name="query" type="text" onChange={handleSearch} />
        </div>
        {filterList &&
          filterList.map((item, index) => (
            <div key={index}>{item}</div> //Display each item
          ))}
      </div>
    </Layout>
  );
};

export default Practice;
