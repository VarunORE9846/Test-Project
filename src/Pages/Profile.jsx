import React, { useState } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import '../Pages/styles.css';
export const Profile = () => {
  const [name, setName] = useState("");
  const [namee, setNamee] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
    return;
  };
  const handleChhange = (e) => {
    setNamee(e.target.value);
    return;
  };
  const handleClick = () => {
    if (name.length < 4) {
      alert("please enter your name in field 1");
      return;
    }
    if (namee.length < 4) {
      alert("please enter your name in field 2");
      return;
    }
    if (name === namee) {
      alert("name entered in both fields is same")
    }
    else {
      alert("name entered in both fields are not same")
      return;
    }

    setShow(!show)
  };
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder='enter your name' onChange={handleChange} />
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder='enter your name' onChange={handleChhange} />
      <button onClick={handleClick} >Click Me</button>
      {show && <> <h2>{name}</h2>
        <h2>{namee}</h2> </>}

    </>
  )
};

