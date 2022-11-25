import { useState, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Ob = () => {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  // Const helper function to set the state to the input field value
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
      // make a copy of the previous item
      // return the copy of the array with the value of the input field
      return [...prev, value];
    });
    // set the value of the inputRef to a empty string
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
        <Form onSubmit={handleSumbit} key={items}>
          <Form.Group>
            <Form.Label>Search: </Form.Label>
            <Form.Control type="text" className="mb-3"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Entry: </Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              ref={inputRef}
            ></Form.Control>
          </Form.Group>
          <Button className="btn-success" type="submit">
            Sumbit
          </Button>
          <Button className="btn-success" type="submit">
            Remove
          </Button>
          <h2>
            Ob:{" "}
            {items.map((item) => {
              return <div key={item}>{item}</div>;
            })}
          </h2>
        </Form>
      </Container>
    </>
  );
};

export default Ob;
