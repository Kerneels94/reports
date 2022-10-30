import { Container } from "react-bootstrap";
import Incidents from "../Components/IncidentsReports";
import ObReports from "../Components/ObReports";

const Home = () => {
  return (
    <>
      <Container className="p-3">
        <h1>Welcome to reports</h1>
        <h2>
          A online web based solution for security companies that write incident
          reports and OB Books.
        </h2>
        <Incidents />
        <ObReports />
      </Container>

      <footer className="d-flex align-items-center justify-content-around bg-dark text-light">
        <h2>Created by Inpulsa &copy;2022</h2>
      </footer>
    </>
  );
};

export default Home;
