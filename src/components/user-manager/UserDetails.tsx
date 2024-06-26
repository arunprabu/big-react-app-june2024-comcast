import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IUser } from "../../models/IUser";

const UserDetails = () => {
  // Read the URL param and send the request to rest api
  const { userId } = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("It is over!");
      });
  }, []);
  
  return (
    <div className="container">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <Link
          to="/user-manager"
          className="btn btn-outline-primary btn-sm px-5 mb-3"
        >
          Back
        </Link>
        <h1 className="text-body-emphasis">User Details</h1>
        <p className="lead">You can view user, update and delete here.</p>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{user?.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                You are viewing the details of user id: {user?.id}
              </h6>
              <p className="card-text">Phone: {user?.phone}</p>
              <p className="card-text">Email: {user?.email}</p>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-outline-danger ms-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
