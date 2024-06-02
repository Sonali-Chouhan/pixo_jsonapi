import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUsers, DeleteUsers, SingleUsers, UpdateUsers, Users } from "../redux/action/GetUsers";
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { CommonData } from "./Data";
import ShowPostdata from "./ShowPostdata";

const GetUsers = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state?.userReducer?.list?.data)
  const [modalShow, setModalShow] = useState(false);
  const createUsers = () => {
    dispatch(CreateUsers(CommonData?.create))
  }
  const deleteUsers = () => {
    dispatch(DeleteUsers(3))
  }
  const singleUsers = () => {
    dispatch(SingleUsers(3))
  }
  const updateUsers = () => {
    dispatch(UpdateUsers(CommonData?.update))
  }
  useEffect(() => {
    dispatch(Users())
  }, []);
  return (
    <div className="maindiv">
      <Table striped bordered hover className="tableDiv" >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            userList && userList?.slice(0, 5).map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <button onClick={createUsers}>Create Post</button>
      <button onClick={deleteUsers}>Delete Post</button>
      <button onClick={singleUsers}>Single Post</button>
      <button onClick={updateUsers}>Update Post</button>
      <button variant="primary" onClick={() => setModalShow(true)}>
        Show Data
      </button>
      <ShowPostdata show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}
export default GetUsers;