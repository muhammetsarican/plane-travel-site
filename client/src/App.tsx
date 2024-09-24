import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("flights");
  }, []);
  return (
    // < !--container - start-- >
    <div className="container my-[3.125%]">
      <Outlet />
    </div>
    // <!-- container - end-- >
  )
}

export default App
