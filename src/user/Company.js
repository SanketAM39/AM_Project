import React, { useEffect, useState } from "react";
import { remove, secureGet } from "../services/HttpService";
import ReactPaginate from "react-paginate";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

export default function Company() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    secureGet("/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);
  console.log(users);

  // const handleDelete = (id) => {
  //   remove("/users/:", id)
  //   .then((res) =>{
  //     console.log(res)
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  //   })

  // };

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
  };
const handelCreate = () =>{

}
  return (
    <div>
      <div className=" d-flex justify-content-center m-3">
        <button className="btn btn-primary">Company Details</button>
        {/* <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={handelCreate}
        >
          Create User
        </button> */}
      </div>
      <table
        className="table table-hover mb-3"
        style={{ width: "50%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.results?.map((element, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.role}</td>
                <td>
                  {<BiEdit size="23" style={{ cursor: "pointer" }} />}
                  {
                    <MdDeleteForever
                      size="23"
                      className="m-1"
                      style={{ cursor: "pointer" }}
                      // onClick={handleDelete(element._id)}
                      onClick={() => {
                        console.log(element._id);
                      }}
                    />
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={users.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      {/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
