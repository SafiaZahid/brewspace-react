import { useState } from "react";

import React from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const copyUsers = [...users];
    copyUsers.push({ name, email, password });
    setUsers(copyUsers);

    setName("");
    setEmail("");
    setPassword("");

    console.log("Users:", copyUsers);
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow rounded-4 p-4">
              <h2 className="fw-bold mb-2">Join BrewSpace</h2>
              <p className="text-body-secondary mb-4">
                Create your account to get started.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    placeholder="Enter your Name"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    placeholder="Enter your Email Address"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder="Enter your Password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-100 rounded-pill px-3 py-2 signup-btn"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {users.map((user, index) => {
        return (
          <div key={index}  className="border rounded-3 p-3 mt-3">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SignupForm;
