import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/home/Home";
import VideoList from "../pages/listing/VideosList";
import VideoPage from "../pages/video/VideoPage";
import WatchLater from "../pages/listing/WatchLater";
import Explore from "../pages/home/Explore";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<Layout><Explore /></Layout>} />

        <Route path="/videosList" element={<Layout><VideoList /></Layout>} />
        <Route path="/watchLater" element={<Layout><WatchLater /></Layout>} />
        <Route path="/videosList/:category" element={<Layout><VideoList /></Layout>} />
        <Route path="/videosList/:category/:id" element={<Layout><VideoPage /></Layout>} />
      </Routes>
    </>
  );
}
