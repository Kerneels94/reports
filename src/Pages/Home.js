import { Container } from "react-bootstrap";
import Incidents from "../Components/IncidentsReports";
import ObReports from "../Components/ObReports";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Welcome to reports</h1>
        <h2>
          A online web based solution for security companies that write incident
          reports and OB Books.
        </h2>
        <Incidents />
        <ObReports />
      </Container>
    </>
  );
};

export default Home;
