import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";

import React from "react";

const Incidents = () => {
  // State

  const [date, setDate] = useState("");
  const [address, setAdress] = useState("");
  const [time, setTime] = useState("");
  const [typeOfIncident, settypeOfIncident] = useState("");
  const [respondingOfficer, setRespondingOfficer] = useState("");
  const [callsign, setCallsign] = useState("");
  const [saps, setSaps] = useState("");
  const [report, setReport] = useState("");

  // Event listerner
  const addToLocalStorage = () => {
    localStorage.setItem("date", date);
    localStorage.setItem("address", address);
    localStorage.setItem("time", time);
    localStorage.setItem("typeOfIncident", typeOfIncident);
    localStorage.setItem("respondingOfficer", respondingOfficer);
    localStorage.setItem("callsign", callsign);
    localStorage.setItem("saps", saps);
    localStorage.setItem("report", report);
  };

  return (
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

      <Container>
        <h1>Incident Report</h1>
        <h2>
          Please fill in the form below with all the relevant information for
          the incident report
        </h2>
        <Form>
          <Form.Group controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              className="mb-3"
              value={date}
              onChange={({ target }) => setDate(target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Residential/Business address</Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              value={address}
              onChange={({ target }) => setAdress(target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Time">
            <Form.Label>Time of incident</Form.Label>
            <Form.Control
              type="time"
              className="mb-3"
              value={time}
              onChange={({ target }) => setTime(target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="TypeOfIncident">
            <Form.Label>Type Of incident</Form.Label>
            <Form.Select
              aria-label="Select from the different incidents"
              className="mb-3"
              value={typeOfIncident}
              onChange={({ target }) => settypeOfIncident(target.value)}
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
            <Form.Control
              type="text"
              className="mb-3"
              value={respondingOfficer}
              onChange={({ target }) => setRespondingOfficer(target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="CallSign">
            <Form.Label>Vehicle Call Sign</Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              value={callsign}
              onChange={({ target }) => setCallsign(target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="SapsInformation">
            <Form.Label>Saps Information</Form.Label>
            <Form.Control
              type="text"
              className="mb-3"
              value={saps}
              onChange={({ target }) => setSaps(target.value)}
            ></Form.Control>
            <Form.Text className="text-muted">
              Information required 1: IR Number 2: Responding Officer 3: Vehicle
              Registration
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="Report">
            <Form.Label>Report</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              className="mb-3"
              value={report}
              onChange={({ target }) => setReport(target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            className="btn-success"
            type="submit"
            onClick={addToLocalStorage}
          >
            Sumbit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Incidents;
