import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Form Submitted!");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={nameOnChange}
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={emailOnChange}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={passwordOnChange}
        />
      </div>

      <br />

      <button type="submit">Submit</button>

      <hr />

      <h3>Current Form Values</h3>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Password:</strong> {password}
      </p>
    </form>
  );
}

export default Form;