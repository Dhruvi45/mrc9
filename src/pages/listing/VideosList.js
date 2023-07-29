import { videos } from "../../dummyData/videosData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoCard from "../../component/VideoCard";
import { Row, Col } from "react-bootstrap";

export default function VideoList() {
  const { category } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === undefined) {
      setData(videos);
    } else {
      const filteredData = videos.filter(
        (video) => video.category === category
      );
      setData(filteredData);
    }
  }, []);

  return (
    <div>
      <div className="title">{category}</div>

      <Row xs={1} md={4} className="g-4">
        {data.map((video, index) => {
          return (
            <Col key={index}>
              <VideoCard video={video} category={video.category} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
