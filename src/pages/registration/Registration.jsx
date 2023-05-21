import { Link, useNavigate } from "react-router-dom";
import registerphoto from "../../assets/register.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Registration = () => {
  useTitle("Registration");
  const { registerUser, LogOut, updateUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigte = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    if (password.length < 8) {
      return setError("Please Enter upto 6 character password");
    }

    registerUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUser(displayName, photoURL)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
          })
          .catch((error) => {
            setError(error.message);
          });
        LogOut();
        navigte("/login");
      })
      .catch((error) => {
        return setError(error.message);
      });
    form.reset();
    setError("");
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={registerphoto} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <h3 className="font-bold text-center text-2xl">Register</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
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
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo url"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-info btn-outline"
                />
              </div>
              <p className="text-red-500">{error}</p>
              <p className="mt-3">
                Already Have an account{" "}
                <Link to="/login" className="font-bold text-primary">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
