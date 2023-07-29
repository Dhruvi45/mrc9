import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </ProSidebarProvider>
    </div>
  );
}
