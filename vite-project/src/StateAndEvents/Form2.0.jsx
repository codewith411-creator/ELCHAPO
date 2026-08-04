import { useState } from "react";

function Form2() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Form:");
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Phone</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={input.phone}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>

      <br />

      <button type="submit">Submit</button>

      <hr />

      <h3>Current State</h3>

      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Phone: {input.phone}</li>
        <li>Password: {input.password}</li>
      </ul>
    </form>
  );
}

export default Form2;