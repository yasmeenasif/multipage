import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id == id);

  return (
    <div>
      <h1>User Details</h1>

      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user found</p>
      )}

      <button onClick={() => navigate("/users")}>Go Back</button>
    </div>
  );
};

export default UserDetail;
