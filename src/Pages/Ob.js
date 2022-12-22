import { useState, useRef, useMemo } from "react";
import { Container, Form, Button } from "react-bootstrap";

// Todo key error on click every item in a list should have a unique key

const Ob = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    // Reasing for using UseMemo hook => To only compute the values when needed to help with performance and page re render***
    return items.filter((item) => {
      return item.toLowerCase().includes(query);
    });
    // UseMemo has to return a array with dependencies to update the state
  }, [items, query]);

  // Create helper function to set the state to the input field value
  const handleSumbit = (e) => {
    // pervent the defualt state of the form
    e.preventDefault();
    // Get value
    const value = inputRef.current.value;
    // if value === '' return nothing
    if (value === "") {
      return;
    }
    // Update state
    setItems((prev) => {
      // Local storage
      localStorage.setItem("items", items);
      // make a copy of the previous item
      // return the copy of the array with the value of the input field
      return [...prev, value];
    });

    // set the value of the inputRef to a empty string (Value from the form)
    inputRef.current.value = "";
  };

  return (
    <>
      <Container>
        <h1>Ob Entries</h1>
        <h2>
          Our Ob Entry system can be used to manage entry and exiting at
          complexes, Shift change of guards etc..
        </h2>
        <Form onSubmit={handleSumbit}>
          <Form.Group>
            <Form.Label>Search: </Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              onChange={(e) => setQuery(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Entry: </Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              ref={inputRef}
            ></Form.Control>
          </Form.Group>
          <Button className="btn-success m-2" type="submit">
            Sumbit
          </Button>
          <Button className="btn-success m-2" type="submit">
            Remove
          </Button>
          <h2>
            {/* Returna div with the value of the item */}
            Ob:
            {filteredItems.map((item) => {
              return <div key={items}>{item}</div>;
            })}
          </h2>
        </Form>
      </Container>
    </>
  );
};

export default Ob;
