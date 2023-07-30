import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import PlayListCard from "../../component/PlayListCard";

export default function PlayList() {
  const playList = JSON.parse(localStorage.getItem("playList"));

  const [data, setData] = useState(playList || []);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const addPlayList = () => {
    const obj = {
      id: data.length + 1,
      name: text,
    };

    setData([...data, obj]);
    localStorage.setItem("playList", JSON.stringify([...data, obj]));
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onEdit = () => {
    setData((prev) => {
      const updated = [...prev]; // Create a copy of the 'notes' array
      updated[editIndex].name = text; // Update the text at index 1
      localStorage.setItem("playList", JSON.stringify(updated));
      console.log('updated', updated)
      return updated;
    });
    setText("")
    setEditIndex(null)
    handleClose()
  };

  const onDelete = (playListIndex)=>{
    setData((prev) => {
      const updated = prev.filter((_, index) => index !== playListIndex); // Filter out the object at index 1

      // Update local storage with the updated notes array
      localStorage.setItem("playList", JSON.stringify(updated));

      return updated;
    });
  }
  
  return (
    <>
      <div>
        <Button onClick={() => setShow(true)}>Add PlayList</Button>
        <Row>
          {data.length > 0 &&
            data.map((playList, index) => {
              return (
                <Col key={index}>
                  <PlayListCard
                    playList={playList}
                    onEdit={() => {
                      setShow(true);
                      setEditIndex(index);
                    }}
                    onDelete={()=>onDelete(index)}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
      {(show || editIndex !== null) && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              defaultValue={editIndex !== null ? data[editIndex].name : ""}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => editIndex!== null? onEdit(): addPlayList()}>
              {editIndex !== null?"Update":"Save"}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
