import { Container } from "react-bootstrap";

const Incidents = () => {
  return (
    <>
      {/* Container 1 */}
      <Container className="split p-3">
        <div className="content d-flex align-items-center flex-column justify-content-evenly p-2">
          <h3>Incident Reports</h3>
          <p>
            Our system provides you with the ability to write and send the
            report directly to the relevant managers and as a plus the client if
            so desired.
          </p>
        </div>
        <div className="image">
          <img
            className="d-block w-100"
            src="/reporting.jpg"
            alt="Reporting img"
          />
        </div>
      </Container>
    </>
  );
};

export default Incidents;
