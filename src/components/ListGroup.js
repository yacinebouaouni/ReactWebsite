function ListGroup() {
  const items = ["Algiers", "Paris", "Roma", "Barcelona"];

  //Event handler function
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>Basic List Example</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick = {handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
