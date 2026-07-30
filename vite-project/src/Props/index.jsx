function Parent() {
  // Primitive Data Types
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;

  // Non-Primitive Data Types
  const fruits = ["Apple", "Banana", "Orange"];

  const student = {
    name: "Rachel",
    age: 22,
    country: "Kenya",
  };

  function greet() {
    alert("Hello from Parent!");
  }

  return (
    <div>
      <h1>I am the Parent Component</h1>

      <Child
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        fruits={fruits}
        student={student}
        greet={greet}
      />
    </div>
  );
}

/* ---------------- CHILD COMPONENT ---------------- */

function Child(props) {
  console.log(props);

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>I am the Child Component</h2>

      <ul>
        <li>
          Favourite String: <b>{props.str}</b>
        </li>

        <li>
          Amount: <b>{props.amountInNumber}</b>
        </li>

        <li>
          Boolean: <b>{String(props.isOk)}</b>
        </li>

        <li>
          Null Value: <b>{String(props.notSet)}</b>
        </li>

        <li>
          Student Name: <b>{props.student.name}</b>
        </li>

        <li>
          Student Age: <b>{props.student.age}</b>
        </li>

        <li>
          Student Country: <b>{props.student.country}</b>
        </li>

        <li>
          Fruits:
          <ul>
            {props.fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </li>
      </ul>

      <button onClick={props.greet}>Click Me</button>
    </div>
  );
}

export default Parent;
