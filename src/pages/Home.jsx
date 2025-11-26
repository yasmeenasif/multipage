import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Vite + React Multi-Page App</h1>
      <p>This app demonstrates routing using React Router.</p>

      <Link to="/about">Go to About</Link> <br />
      <Link to="/users">View Users</Link>
    </div>
  );
};

export default Home;
