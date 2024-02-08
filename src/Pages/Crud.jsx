import React from 'react';
import { useState, useEffect } from 'react';
 const Crud = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const handleOnChangeValues = (e) => {
    const { name, value } = e.target
    if (name === "name") {
      setName(value);
    }
    if (name === "age") {
      setAge(value);
    }

  };
  const handleClick = (e) => {
    if (name.length < 2) {
      alert("Please enter your name");
      return;
    }
    if (age <= 0) {
      alert("Please enter age correctly");
      return;
    }

    localStorage.setItem("usersTable", JSON.stringify([...users, { name, age }]));
    setUsers([...users, { name, age }])

    setName("");
    setAge(0);
  };
  const handleDelete = (e) => {
    console.log(e);
    const temp = [...users]
    let newArray = []
    for (let index = 0; index < temp.length; index++) {
      if (index === e) {
        continue
      } else {
        newArray.push(temp[index])
      }
    }
    console.log(newArray);
    localStorage.setItem("usersTable", JSON.stringify(newArray));
    setUsers(newArray)
  };
  const resetLocalStorage = () => {
    localStorage.removeItem("usersTable");
    setUsers([]);
  };
  useEffect((e) => {
    // e.preventdefault();
    const users = localStorage.getItem("usersTable");
    console.log(users)
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);
  return (
    <div className='IFF'>
      <label htmlFor="">Name:</label>
      <input type="text" value={name} onChange={(e) => handleOnChangeValues(e)} name="name" placeholder='enter your name' />
      <label htmlFor="">Age:</label>
      <input type="number" value={age} onChange={(e) => handleOnChangeValues(e)} name="age" placeholder='enter your age' />
      <button className="btn btn-outline-success" onClick={handleClick}>Insert</button>
      <button className="btn btn-outline-danger" onClick={resetLocalStorage}>Reset</button>
      {users.length > 0 &&
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">Name</th>
              <th scope="col">age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => (
              <tr key={`${i}_row`} className='tablerow'>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.age}</td>
                <td><button className="btn btn-outline-dark" onClick={() => handleDelete(i)}>delete</button></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      }
      {/* <h3>{name}</h3> */}
    </div>
  )
}

export default Crud

