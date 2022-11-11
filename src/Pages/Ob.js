import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Ob = () => {
  const [item, setItem] = useState();
  const [list, setList] = useState([]);

  const addItem = (e) => {
    const data = { item };
    e.preventDefault();
    if (data) {
      setList((ls) => [...ls, data]);
      item("");
    }
  };

  return (
    <>
      <Container>
        <h1>Ob Entries</h1>
        <h2>
          Our Ob Entry system can be used to manage entry and exiting at
          complexes, Shift change of guards etc..
        </h2>

        {/* Form */}

        <Form>
          <Form.Group>
            <Form.Label>Entry: </Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="btn-success" type="submit" onClick={addItem}>
            Sumbit
          </Button>

          {list.map((i, index) => {
            return (
              <div>
                <li key={index}>{i.item}</li>
              </div>
            );
          })}
        </Form>
      </Container>
    </>
  );
};

export default Ob;
