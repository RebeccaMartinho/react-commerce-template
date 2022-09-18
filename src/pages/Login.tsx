import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await auth.sigIn(email, password);
    if (!res.success) {
      alert(res.message);
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <div className="col-12 bg-light d-flex justify-content-center">
      <form
        action=""
        className=" col-8 d-flex flex-column"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <h1>Login here</h1>
        <input
          type="name"
          name="name"
          placeholder="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="name"
          name="name"
          placeholder="name"
          id="name"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
