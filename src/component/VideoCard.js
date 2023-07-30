import { Card } from "react-bootstrap";
import { MdWatchLater } from "react-icons/md";
import "../style/VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function VideoCard(props) {
  const { video, category, watchLater } = props;
  const navigate = useNavigate();
  
  const [watch, setWatch] = useState(watchLater);

  const selectVideo = (video) => {
    navigate(`/videosList/${category}/${video._id}`);
  };

  const addWatchLater = () => {
    setWatch([...watch, video._id]);

    // Update local storage with the new video ID added to watch later
    localStorage.setItem("watchLater", JSON.stringify([...watch, video._id]));
  };

  const removeWatchLater = () => {
    const filteredData = watch.filter((temp) => temp !== video._id);
    setWatch(filteredData);

    // Update local storage with the new watch later array after removing the video ID
    localStorage.setItem("watchLater", JSON.stringify(filteredData));
  };

  useEffect(() => {
    console.log("watch", watch);
    console.log("watchLater", watchLater);
  }, [watch]);

  useEffect(() => {
    const initialWatchLater = JSON.parse(localStorage.getItem("watchLater")) || [];
    setWatch(initialWatchLater);
  }, []);
  return (
    <>
      <Card>
        <div className="card-container">
          <div className="button-container">
            <button
              onClick={() =>
                 watch?.includes(video._id)
                  ? removeWatchLater()
                  : addWatchLater()
              }
            >
              <MdWatchLater
                color={
                  watch?.includes(video._id)
                    ? "#33adff"
                    : "#33adff49"
                }
              />
            </button>
          </div>
          <Card.Img
            variant="top"
            src={video.thumbnail}
            onClick={() => selectVideo(video)}
          />
          <Card.Body>
            <Card.Title>{video.title}</Card.Title>
            <div>
              {video.views} views | {video.creator}
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}
