import { useState, useEffect } from "react";
import axios from "axios";

function GithubProject() {
  // State to store users
  const [people, setPeople] = useState([]);

  // Fetch users from API
  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      console.log(response.data);

      setPeople(response.data);
    } catch (error) {
      console.log("Error is:", error);
    }
  };

  // Runs once when the component mounts
  useEffect(() => {
    getUserData();
  }, []);

  console.log(people);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Github Users</h1>

      {people.map((person) => (
        <div
          key={person.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{person.name}</h2>

          <p>
            <strong>Username:</strong> {person.username}
          </p>

          <p>
            <strong>Email:</strong> {person.email}
          </p>

          <p>
            <strong>Phone:</strong> {person.phone}
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${person.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {person.website}
            </a>
          </p>

          <p>
            <strong>Company:</strong> {person.company.name}
          </p>

          <p>
            <strong>City:</strong> {person.address.city}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GithubProject;
