import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/home/Home";
import VideoList from "../pages/listing/VideosList";
import VideoPage from "../pages/video/VideoPage";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/videosList" element={<Layout><VideoList /></Layout>} />
        <Route path="/videosList/:category" element={<Layout><VideoList /></Layout>} />
        <Route path="/videosList/:category/:id" element={<Layout><VideoPage /></Layout>} />
      </Routes>
    </>
  );
}
