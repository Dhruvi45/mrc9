import { useEffect } from "react";
import { useState } from "react";
import { videos } from "../../dummyData/videosData";
import VideoCard from "../../component/VideoCard";
import { Row, Col } from "react-bootstrap";
export default function WatchLater() {
  const watchLater = JSON.parse(localStorage.getItem("watchLater"));

  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredVideos = videos.filter((video) =>
      watchLater.includes(video._id)
    );
    console.log("filteredVideos",filteredVideos);
    setData(filteredVideos);
  }, []);

  return (
    <>
     <div>
      <div className="title">Watch later</div>

      <Row xs={1} md={4}>
        {data.map((video, index) => {
          return (
            <Col key={index}>
              <VideoCard video={video} category={video.category} watchLater={watchLater} />
            </Col>
          );
        })}
      </Row>
    </div>
    </>
  );
}
