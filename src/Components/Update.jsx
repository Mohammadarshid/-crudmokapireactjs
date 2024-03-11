import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  /*
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://65edd3d308706c584d9aade7.mockapi.io/crudyoutube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  */
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://65edd3d308706c584d9aade7.mockapi.io/crudyoutube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        console.log("Update successful");
        navigate("/read");
      })
      .catch((error) => {
        console.error("Update failed", error);
      });
  };

  return (
    <>
      <h2> Update</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="Update"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className=" btn btn-secondary mx-2">back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
