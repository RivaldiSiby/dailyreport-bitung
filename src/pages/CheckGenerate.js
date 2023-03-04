import { useLocation, useNavigate } from "react-router-dom";

function CheckGenerate() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.data);
  if (location.data === undefined) {
    navigate("/");
  }
  return;
}

export default CheckGenerate();
