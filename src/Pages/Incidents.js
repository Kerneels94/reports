import { Form, Button, Container, FormGroup } from "react-bootstrap";

const Incidents = () => (
  <>
    {/*
        This Component will render a form with multiple options to choose from when writing a report
        The values will be saved in the browser upon submission for testing purposes
  
        The form will consist of the following:
        1: Date
        2: Address
        3: Responding officer
        4: Call sign of the vehicle
        5: Type of incident
        6: Saps information
        7: Report
        */}

    <Container className="p-3">
      <h1>Incident Report</h1>
      <h2>
        Please fill in the form below with all the relevant information for the
        incident report
      </h2>
      <Form>
        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" className="mb-3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Residential/Business address</Form.Label>
          <Form.Control type="text" className="mb-3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="Time">
          <Form.Label>Time of incident</Form.Label>
          <Form.Control type="time" className="mb-3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="TypeOfIncident">
          <Form.Label>Type Of incident</Form.Label>
          <Form.Select
            aria-label="Select from the different incidents"
            className="mb-3"
          >
            <option value="1">Attempted residential break-in</option>
            <option value="2">Attempted business break-in</option>
            <option value="3">Positive residential break-in</option>
            <option value="4">Positive business break in</option>
            <option value="5">Attempted armed robbery</option>
            <option value="6">Positive armed robbery</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="RespondingOfficer">
          <Form.Label>Responding Officer</Form.Label>
          <Form.Control type="text" className="mb-3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="CallSign">
          <Form.Label>Vehicle Call Sign</Form.Label>
          <Form.Control type="text" className="mb-3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="SapsInformation">
          <Form.Label>Saps Information</Form.Label>
          <Form.Control type="text" className="mb-3"></Form.Control>
          <Form.Text className="text-muted">
            Information required 1: IR Number 2: Responding Officer 3: Vehicle
            Registration
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="Report">
          <Form.Label>Report</Form.Label>
          <Form.Control as="textarea" rows={5} className="mb-3"></Form.Control>
        </Form.Group>

        <Button className="btn-success" type="submit">
          Sumbit
        </Button>
      </Form>
    </Container>
  </>
);

export default Incidents;
