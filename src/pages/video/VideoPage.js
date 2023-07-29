import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { videos } from "../../dummyData/videosData";
import { useParams } from "react-router-dom";
import { MdWatchLater, MdPlaylistAdd, MdEditNote } from "react-icons/md";

export default function VideoPage() {
  const { id } = useParams();

  const [video, setVideo] = useState();

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
          <MdWatchLater />
          <MdPlaylistAdd />
          <MdEditNote />
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
