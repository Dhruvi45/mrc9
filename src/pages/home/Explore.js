import { videos } from "../../dummyData/videosData";
import VideoCard from "../../component/VideoCard";
import { Row, Col } from "react-bootstrap";
import {useState} from "react"
export default function Explore() {
  const [data, setData] = useState(videos);
  const watchLater = JSON.parse(localStorage.getItem("watchLater"));

  const onSearch = (e) => {
    if (e.target.value.trim().length > 0) {
      const temp = videos.filter((data) => data.title.includes(e.target.value));
      setData(temp);
    } else {
      setData(videos);
    }
  };

  return (
    <>
      <input type="text" onChange={(e) => onSearch(e)} />
      <Row xs={1} md={4}>
        {data.map((video, index) => {
          return (
            <Col key={index}>
              <VideoCard
                video={video}
                category={video.category}
                watchLater={watchLater}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
