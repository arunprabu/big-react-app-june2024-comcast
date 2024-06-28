import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const { onLogin } = useAuth();

  const handleLogin = (formData: any) => {
    // collect the form data here
    console.log(formData);
    // 1. send the above credentials to the REST API
    axios
      .post("https://reqres.in/api/login", formData)
      .then((res) => {
        // 2. get the response
        if (res && res.status == 200) {
          setIsError(false);
          console.log(res.data);
          // update the context along with token
          onLogin(res.data.token, "SUPER_ADMIN");

          // 3. redirect to the home page -- static implementation
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });

    // 4. Post Login -- Logout should be displayed in header. not login
  };
  return (
    <div className="p-5 text-center bg-body-tertiary rounded-3">
      <div className="row justify-content-center">
        <div className="col-4">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email")}
                value={"eve.holt@reqres.in"}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password")}
                value={"123456789"}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>

            {isError && (
              <div className="alert alert-danger mt-3">
                Seems like you have entered invalid email / password
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
