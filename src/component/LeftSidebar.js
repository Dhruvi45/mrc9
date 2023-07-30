import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function RightSideBar() {
  const nevigate = useNavigate();

  return (
    <>
      <Sidebar className="custom-sidebar">
        <Menu>
          <MenuItem onClick={() => nevigate("/home")} icon={<AiFillHome />}>
            Home
          </MenuItem>
          <MenuItem
            onClick={() => nevigate("/explore")}
            icon={<MdOutlineExplore />}
          >
            Explore
          </MenuItem>
          <MenuItem
            onClick={() => nevigate("/playList")}
            icon={<MdPlaylistAdd />}
          >
            Playlists
          </MenuItem>
          <MenuItem onClick={() => nevigate("/watchLater")} icon={<MdWatchLater />}>
            Watch Later
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
