import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function FarmerList() {
  const [responseData, setResponseData] = useState([]);
  const history = useHistory();
  const farmerList = () => {
    axios
      .get("http://localhost:9099/admin/farmer-list")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    farmerList();
  }, []);

  //   const farmerDelete = (evnt) => {
  //     axios
  //       .delete("http://localhost:9099/car/" + evnt.target.value)
  //       .then((response) => {
  //         farmerList();
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   };

  return (
    <>
      <div class="container mt-3">
        <h2>Farmer Information</h2>

        <table class="table table-striped">
          <thead>
            <tr>
              <th>user_name</th>
              <th>email</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>address</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.fid}">
                <td>{val.user_name}</td>
                <td>{val.email}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.address}</td>
                {/* <td>
                  <Link
                    to="/farmer/profile"
                    state={val}
                    class="btn btn-primary"
                  >
                    Update
                  </Link>{" "}
                </td> */}
                {/* <td>
                  <button
                    type="button"
                    id={val.id}
                    value={val.id}
                    onClick={farmerDelete}
                  >
                    X
                  </button>{" "}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={history.goBack}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default FarmerList;
