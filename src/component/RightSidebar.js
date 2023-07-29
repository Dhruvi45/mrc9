import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export default function RightSidebar() {
  return (
    <Sidebar className="custom-sidebar">
      <Menu>
        <MenuItem
        // onClick={() => navigate("/MyBookmark")}
        >
          Bookmarks
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
