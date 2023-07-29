import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/home/Home";
import VideoList from "../pages/listing/VideosList";
import VideoPage from "../pages/video/VideoPage";

export default function MyRoutes() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videosList" element={<VideoList />} />
          <Route path="/videosList/:category" element={<VideoList />} />
          <Route path="/videosList/:category/:id" element={<VideoPage />} />
        </Routes>
      </Layout>
    </>
  );
}
