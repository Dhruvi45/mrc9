import { Card } from "react-bootstrap";
import { MdWatchLater } from "react-icons/md";
import "../style/VideoCard.css";
import { useNavigate } from "react-router-dom";

export default function VideoCard(props) {
  const { video, category } = props;
  const nevigate = useNavigate();

  const selectVideo = (video) => {
    nevigate(`/videosList/${category}/${video._id}`);
  };

  return (
    <>
      <Card>
        <div className="card-container">
          <div className="button-container">
            <button>
              <MdWatchLater />
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
