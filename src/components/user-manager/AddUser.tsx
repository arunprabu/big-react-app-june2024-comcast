import { Link } from "react-router-dom";

const AddUser = () => {
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
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="nameInput" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="emailInput" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">
                Phone
              </label>
              <input type="text" className="form-control" id="phoneInput" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="mt-3">
            <div className="alert alert-success" role="alert">
              Saved Successfully!
            </div>
            <div className="alert alert-danger" role="alert">
              Something went wrong! Unable to create user. Try again later!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
