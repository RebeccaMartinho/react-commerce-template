import { useContext } from "react";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export function HomeAdmin() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo {auth.user?.name}</h1>
      <button
        onClick={() => {
          auth.sigOut();
        }}
      >
        logout
      </button>

      <span
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer text-decoration-none text-gray-700"
      >
        <Person size={25} />
      </span>
    </div>
  );
}
