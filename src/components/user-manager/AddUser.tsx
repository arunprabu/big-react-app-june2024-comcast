import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddUser = () => {
  const { register, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleAddUser = (formData: any) => {
    console.log(formData); // this is the form data to be submitted to REST API
    // What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // What's the Http Method?  POST
    // What's the REST API Client? axios
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res) => {
        console.log(res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over");
      });
  };

  return (
    <div className="container">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <Link
          to="/user-manager"
          className="btn btn-outline-primary btn-sm px-5 mb-3"
        >
          Back
        </Link>
        <h1 className="text-body-emphasis">Add User</h1>
        <p className="lead">You can add a new user here.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-4">
          <form onSubmit={handleSubmit(handleAddUser)}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                {...register("email")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                {...register("phone")}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="mt-3">
            {isSuccess && (
              <div className="alert alert-success" role="alert">
                Saved Successfully!
              </div>
            )}

            {isError && (
              <div className="alert alert-danger" role="alert">
                Something went wrong! Unable to create user. Try again later!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
