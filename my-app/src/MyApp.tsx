import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useNavigate } from "react-router-dom";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <div>
      <ShellBar
        logo={
          <img
            src="https://github.com/SAPDocuments/Tutorials/raw/master/tutorials/ui5-webcomponents-react-dashboard/reactLogo.png"
            alt="Company Logo"
          />
        }
        profile={
          <Avatar>
            <img
              src="https://github.com/SAPDocuments/Tutorials/raw/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png"
              alt="User Avatar"
            />
          </Avatar>
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon={activateIcon} text="Activate" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}
