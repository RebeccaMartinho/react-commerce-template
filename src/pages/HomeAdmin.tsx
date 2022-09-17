export function HomeAdmin() {
  return (
    <div>
      <h1>admin</h1>
      <button
        onClick={() => {
          console.log("logout");
        }}
      >
        logout
      </button>
    </div>
  );
}
