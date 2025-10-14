import { useNavigate } from "react-router";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const username = useSelector((state) => state.user.name);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (username) {
      navigate("/menu");
    }
  }, [username, navigate]);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
