function Parent() {
  return (
    <div>
      <h1>I am the parent component</h1>

      <Child name="Rich" age={22} country="Kenya" />
    </div>
  );
}

function Child(props) {
  console.log(props);

  return (
    <div>
      <h1>I am the child component</h1>

      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}
