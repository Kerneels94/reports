import { Container } from "react-bootstrap";

const ObReports = () => {
  return (
    <>
      {/* Container 2 */}
      <Container className="split p-3">
        <div className="image">
          <img className="d-block w-100" src="/ob3.jpg" alt="Reporting img" />
        </div>
        <div className="content d-flex align-items-center flex-column justify-content-evenly p-2">
          <h3>OB Entries</h3>
          <p>
            The Ob entry system can be used onsite by guards to make entries of
            vehicles and people entering and exiting a premises or as a
            reference for patrols.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ObReports;
