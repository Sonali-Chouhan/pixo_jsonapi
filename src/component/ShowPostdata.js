import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ShowPostdata = (props) => {
  const {
    postData,
    postDeleted,
    singleData,
    updatedPost
  } = useSelector((state) => {
    return {
      postData: state?.userReducer?.postData?.data,
      postDeleted: state?.userReducer?.postDeleted?.data,
      singleData: state?.userReducer?.singleData?.data,
      updatedPost: state?.userReducer?.updatedPost?.data
    };
  });

  const handleClose = () => {
    // Define the handleClose logic here
    // For example: props.onHide();
  };

  return (
    <div>
      <Modal {...props}>
        {postData ? (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>{postData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{postData.body}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        ) : postDeleted ? (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>{postDeleted.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{postDeleted.body}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        ) : (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              the escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ShowPostdata;