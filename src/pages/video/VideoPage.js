import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { videos } from "../../dummyData/videosData";
import { useParams } from "react-router-dom";
import { MdWatchLater, MdPlaylistAdd, MdEditNote } from "react-icons/md";

export default function VideoPage() {
  const { id } = useParams();
  const watchLater = JSON.parse(localStorage.getItem("watchLater"));
  const [watch, setWatch] = useState(watchLater);

  const [video, setVideo] = useState();
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
  useEffect(() => {
    const data = videos.find((temp) => temp._id === parseInt(id));
    setVideo(data);
  }, []);

  return (
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
                 watch.includes(video._id)
                  ? removeWatchLater()
                  : addWatchLater()
              }
            >
              <MdWatchLater
                color={
                  watch.includes(video._id)
                    ? "#33adff"
                    : "#33adff49"
                }
              />
              </button>
          <button>
            <MdPlaylistAdd />
          </button>         

          <button>
            {" "}
            <MdEditNote />
          </button>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
