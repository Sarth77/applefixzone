import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="py-9 px-4 text-center flex items-center justify-center">
        <div className=" max-w-[90%] flex flex-col items-center justify-center">
          <h2 className="text-[6rem]">404</h2>
          <h3 className="text-[4rem]">UH OH! You're lost.</h3>
          <p className="my-3 mx-0">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button className="bg-sky-500 p-3 rounded-lg text-white">
              Go Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
