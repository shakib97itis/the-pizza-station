import { useRouteError, useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.statusText}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
