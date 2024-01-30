import "./App.css";

function App() {
  console.log("branch created");
  return (
    <>
      <div className="flex justify-center mt-16 ">
        <div className=" border rounded mx-10 bg-white md:mx-0  md:w-80">
          <div className="flex justify-center pt-5">
            <img src="instagram logo.svg" className="w-44 center" />
          </div>
          <div className="">
            <form className="bg-white rounded-xl p-7  ">
              <input
                type="email"
                placeholder="Phone number, email or username"
                className="w-full border bg-neutral-100 p-1 rounded-sm my-2 placeholder"
              ></input>
              <br />
              <input
                type="email"
                placeholder="Password"
                className="w-full border bg-neutral-100 p-1 rounded-sm mb-4"
              ></input>
              <br />
              <button className="bg-blue-400 hover:bg-blue-500 rounded py-1 text-white text-center w-full mb-1">
                Log In
              </button>
              <span className="text-slate-400 py-2 text-xs">
                Forgot your login details?{" "}
              </span>{" "}
              <span className="text-xs font-medium text-slate-500">
                Get help logging in.
              </span>
            </form>

            <div className="flex justify-center pt-3">
              <hr className="w-28" style={{ height: "2px" }} />
              <span className="-mt-3 px-2 text-slate-300">OR</span>
              <hr className="w-28" style={{ height: "2px" }} />
            </div>
            <div className="flex justify-center pt-5">
              <a
                href="#"
                className="flex text-center text-blue-900 hover:text-blue-700 font-medium"
              >
                {" "}
                <img className="w-4 h-4 mt-1 me-1" src="facebook logo.png" />
                Login with Facebook{" "}
              </a>
            </div>
            <div className="flex justify-center p-4">
              <a
                href="#"
                className="text-center text-sky-800 hover:text-sky-700 text-sm font-medium "
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="border rounded mx-10 bg-white md:mx-0 w-96 md:w-80 ">
          <span className="flex justify-center py-6 ">
            Don't have an account?{" "}
            <a href="#" className="text-sky-500 hover:text-sky-600 font-medium">
              Sign up
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="my-2">Get the app.</h1>
      </div>
    </>
  );
}

export default App;
