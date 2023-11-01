function ListGroup() {
  let items = ["Algiers", "Paris", "Roma", "Barcelona"];
  items = [];

  return (
    <>
      <h1>Basic List Example</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} on>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
