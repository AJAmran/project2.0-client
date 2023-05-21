import loginpage from "../../assets/loginpage.jpg";
import google from "../../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../utils/firebase/firebase.config";
import useTitle from "../../Hooks/useTitle";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Login = () => {
  useTitle("Login")
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState();

  const { SignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        const loogedUser = result.user;
        console.log(loogedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
    console.log(email, password);
  };

  const hangleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .then((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={loginpage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h3 className="font-bold text-center text-2xl">Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-info btn-outline"
                />
              </div>
              <p>
                New to EduToysHub{" "}
                <Link to="/register" className="font-bold text-primary">
                  Register
                </Link>
              </p>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <div className="grid h-20 place-items-center">
                <button onClick={hangleGoogleLogin}>
                  <img src={google} alt="" className="h-20" />
                </button>
                <p className="mt-3 text-red-500">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
