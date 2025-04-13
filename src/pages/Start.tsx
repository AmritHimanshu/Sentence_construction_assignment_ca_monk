import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";

function Start() {
  return (
    <div className="h-[100vh] bg-gray-50 text-black flex items-center justify-center">
      <div className="text-[50px]">
        <span className="font-bold">Sentence Construction</span>{" "}
        <span>
          <NavLink to="/instruction"><EastIcon sx={{ fontSize: "50px", cursor: "pointer" }} /></NavLink>
        </span>
      </div>
    </div>
  );
}

export default Start;
