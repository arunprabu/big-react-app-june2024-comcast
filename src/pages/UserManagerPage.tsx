import { Link } from "react-router-dom";

const UserManagerPage = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">User Manager</h1>
          <p className="lead">You can manage your users here.</p>

          <Link to="/user-manager/add" className="btn btn-primary px-5 mb-5">
            Add User
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        <div className="text-center">
          <div className="alert alert-danger" role="status">
            Unable to fetch users! Something went wrong! Try again later
          </div>
        </div>

        <h2>Listing all users</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">John</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Phone: 3245678456ty7
                </h6>
                <p className="card-text">Email: a@b.com</p>
                <Link to="/user-manager/1" className="card-link">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagerPage;
