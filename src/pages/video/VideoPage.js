import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { videos } from "../../dummyData/videosData";
import { useParams } from "react-router-dom";
import { MdWatchLater, MdPlaylistAdd, MdOutlinePostAdd } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

export default function VideoPage() {
  const { id } = useParams();
  const watchLater = JSON.parse(localStorage.getItem("watchLater"));
  const [watch, setWatch] = useState(watchLater);
  const [isAdd, setIsAdd] = useState(false);
  const [show, setShow] = useState(false);

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [video, setVideo] = useState();
  const [noteText, setNoteText] = useState();
  const [loadding, setLodding] = useState(false);
  const [editNoteNo, setEditNoteNo] = useState(null);
  const playList = JSON.parse(localStorage.getItem("playList"));

  const [data, setData] = useState(playList || []);
  const [text, setText] = useState("");

  const addWatchLater = () => {
    setWatch([...watch, video._id]);

    // Update local storage with the new video ID added to watch later
    localStorage.setItem("watchLater", JSON.stringify([...watch, video._id]));
  };
  const addNotes = () => {
    setNotes([...notes, { id: video._id, text: noteText }]);
    localStorage.setItem(
      "notes",
      JSON.stringify([...notes, { id: video._id, text: noteText }])
    );
    setIsAdd(false);
    setNoteText("");
  };
  const addPlayList = () => {
    const obj = {
      id: data.length + 1,
      name: text,
      video: video,
    };

    setData([...data, obj]);
    localStorage.setItem("playList", JSON.stringify([...data, obj]));
    setShow(false);
  };
  const updateNotes = () => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes]; // Create a copy of the 'notes' array
      updatedNotes[editNoteNo].text = noteText; // Update the text at index 1
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    setNoteText("");
    setEditNoteNo(null);
  };

  const removeWatchLater = () => {
    const filteredData = watch.filter((temp) => temp !== video._id);
    setWatch(filteredData);

    // Update local storage with the new watch later array after removing the video ID
    localStorage.setItem("watchLater", JSON.stringify(filteredData));
  };

  useEffect(() => {
    setLodding(true);
    const data = videos.find((temp) => temp._id === parseInt(id));
    setVideo(data);

    const initialWatchLater =
      JSON.parse(localStorage.getItem("watchLater")) || [];
    // const intNote = JSON.parse(localStorage.getItem("notes"))||[]
    // const currentNotes = intNote.filter((temp)=>temp.id === video._id)
    // setNotes(currentNotes)
    setWatch(initialWatchLater);
    setLodding(false);
  }, []);

  return (
    <>
      {loadding ? (
        <p>Loadding..........</p>
      ) : (
        <>
        <Card className="m-3">
          <iframe
            width="802"
            height="400"
            src={video?.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Card.Body>
            <Card.Title>
              {video?.title}
              <button
                onClick={() =>
                  watch.includes(video?._id)
                    ? removeWatchLater()
                    : addWatchLater()
                }
              >
                <MdWatchLater
                  color={watch?.includes(video?._id) ? "#33adff" : "#33adff49"}
                />
              </button>
              <button onClick={() => setIsAdd(!isAdd)}>
                <MdOutlinePostAdd /> Add note
              </button>
              <button
                onClick={() => {setShow(true);console.log("first")}}
                // disabled={
                //   data.find((temp) => temp?.video?._id === video?._id) !==
                //   undefined
                // }
              >
                <MdPlaylistAdd /> Add playlist
              </button>
            </Card.Title>
            <div>
              <h1 className="display-5">My notes</h1>
              {(isAdd || editNoteNo !== null) && (
                <>
                  <textarea
                    cols={100}
                    onChange={(e) => setNoteText(e.target.value)}
                    defaultValue={
                      editNoteNo !== null ? notes[editNoteNo]?.text : ""
                    }
                  />
                  <Button
                    onClick={() =>
                      editNoteNo !== null ? updateNotes() : addNotes()
                    }
                  >
                    {editNoteNo !== null ? "Update note" : "Add note"}
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAdd(false);
                      setEditNoteNo(null);
                    }}
                  >
                    Cancle notes
                  </Button>
                </>
              )}
              <ul className="list-group">
                {notes.length > 0 &&
                  notes.map((note, index) => {
                    return (
                      <li className=" list-group-item h-50">
                        <span>{note?.text}</span>
                        <span className="ps-4">
                          <GrEdit onClick={() => setEditNoteNo(index)} />
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Card.Body>
      {show && (
        <Modal show={show} onHide={() => setShow(false)}> 
          <Modal.Header closeButton>
            <Modal.Title>Add playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => addPlayList()}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
        </Card>
      </>
      )}
    </>
  );
}
