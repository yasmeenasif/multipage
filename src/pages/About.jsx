import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>This app is built using the latest Vite + React setup.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
