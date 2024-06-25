import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserManagerPage = () => {
  const [isLoading, setIsLoading] = useState(true);  //loading state
  const [users, setUsers] = useState<any[]>([]); // positive state
  const [isError, setIsError] = useState(false); // negative state

  // useEffect will be called after initial UI Rendering
  useEffect(() => {
    // This is the ideal place for you to make REST API Calls
    // What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // What's the Http Method?  GET
    // What's the REST API Client? use either fetch or axios (npm i axios)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // if successful response
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        // if error occures
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
        setIsLoading(false);
      });
    console.log("Inside useEffect");
  }, []);

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
        <h2>Listing all users</h2>
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {isError && (
          <div className="text-center">
            <div className="alert alert-danger" role="status">
              Unable to fetch users! Something went wrong! Try again later
            </div>
          </div>
        )}

        <div className="row">
          {users &&
            users?.map((user) => {
              return (
                <div className="col-md-3 mb-3" key={user?.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{user?.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Phone: {user?.phone}
                      </h6>
                      <p className="card-text">Email: {user?.email}</p>
                      <Link
                        to={`/user-manager/${user?.id}`}
                        className="card-link"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UserManagerPage;
