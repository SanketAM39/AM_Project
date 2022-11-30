import React, { useEffect, useState } from "react";
import { post, remove, secureGet } from "../services/HttpService";
import ReactPaginate from "react-paginate";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

export default function Company() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [details, setDetails] = useState(false);

  const temp = {
    name: "",
    email: "",
    password: "",
  };

  const [currentUserData, setCurrentUserData] = useState(temp);

  useEffect(() => {
    secureGet("/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);
  console.log(users);

  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const handlePageClick = (data) => {
  //   let currentPage = data.selected + 1;
  // };

  const onSubmit = (values) => {
    delete values.confirmPassword;
    post("/users", values)
      .then((res) => {
        toast.success("User Created");
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const update = (data) => {
    console.log(data);
  }
  console.log(currentUserData);

  return (
    <div>
      <div className=" d-flex justify-content-center m-3">
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            if (details === false) {
              setDetails(true);
            } else {
              setDetails(false);
            }
          }}
        >
          Users Details
        </button>
        <Button
          onClick={() => {
            setShow(true);
          }}
          className="btn btn-primary m-1"
        >
          Create Users
        </Button>
      </div>
      {details && (
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
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.role}</td>
                  <td>
                    {
                      <BiEdit
                        size="23"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowUpdate(true);
                          console.log(element);
                          setCurrentUserData({
                            name: element.name,
                            email: element.email,
                          });
                        }}
                      />
                    }
                    {
                      <MdDeleteForever
                        size="23"
                        className="m-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          remove(`/users/${element._id}`)
                            .then((res) => {
                              console.log(res);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                      />
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={users.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerclassName={"pagination justify-content-center"}
        pageclassName={"page-item"}
        pageLinkclassName={"page-link"}
        previousclassName={"page-item"}
        previousLinkclassName={"page-link"}
        nextclassName={"page-item"}
        nextLinkclassName={"page-link"}
        breakclassName={"page-item"}
        breakLinkclassName={"page-link"}
        activeclassName={"active"}
      /> */}

      {/* Create Modal */}
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="rounded p-4 p-sm-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                {...register("name", { required: "Name is required." })}
              />
            </div>
            <p>{errors.name?.message}</p>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                {...register("email", { required: "Email is required." })}
              />
            </div>
            <p>{errors.email?.message}</p>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role:
              </label>
              <Form.Select
                aria-label="Default select example"
                {...register("role", { required: "Role is required." })}
                size="md"
              >
                <option value="user">--Select--</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "Passoword is required.",
                })}
              />
            </div>
            <p>{errors.password?.message}</p>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                {...register("confirmPassword")}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>

      {/* //Update Modal */}
      <Modal
        show={showUpdate}
        onHide={() => {
          setShowUpdate(false);
        }}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="rounded p-4 p-sm-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                defaultValue={currentUserData.name}
                {...register("name", { required: "Name is required." })}
              />
            </div>
            <p>{errors.name?.message}</p>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                defaultValue={currentUserData.email}
                {...register("email", { required: "Email is required." })}
              />
            </div>
            <p>{errors.email?.message}</p>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "Passoword is required.",
                })}
              />
            </div>
            <p>{errors.password?.message}</p>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                {...register("confirmPassword")}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit(update)}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </div>
  );
}
