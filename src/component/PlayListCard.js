import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PlayListCard(props) {
  const { playList, onEdit, onDelete } = props;
  const navigate = useNavigate();

  const selectVideo = (video) => {
    navigate(
      `/videosList/${playList?.video?.category}/${playList?.video?._id}`
    );
  };

  return (
    <>
      <Card>
        <div className="card-container">
          <div className="button-container"></div>
          <Card.Body>
            <Card.Title>{playList.name}</Card.Title>
            <Button onClick={() => onEdit()}> Edit</Button>
            <Button onClick={() => onDelete()}>Delete</Button>
            {playList?.video && (
              <Card>
                <div className="card-container">
                  <Card.Img
                    variant="top"
                    src={playList?.video?.thumbnail}
                    onClick={() => selectVideo(playList?.video?.video)}
                  />
                  <Card.Body>
                    <Card.Title>{playList?.video?.title}</Card.Title>
                    <div>
                      {playList?.video?.views} views |{" "}
                      {playList?.video?.creator}
                    </div>
                  </Card.Body>
                </div>
              </Card>
            )}
          </Card.Body>
        </div>
      </Card>
    </>
  );
}
