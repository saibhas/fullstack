import { Routes, Route } from "react-router-dom";
import "./App.css";
import Addroute from "./Components/Addroute";
import Routelist from "./Components/Routelist";
import Vehiclelist from "./Components/Vehiclelist";
import Addvehicle from "./Components/Addvehicle";
// import Navbar from "./Components/Navbar";
import DriverList from "./Components/DriverList";
import AddDriver from "./Components/AddDriver";
import Reservationlist from "./Components/Reservationlist";
import Booking from "./Components/Booking";
import Login from "./Components/Login";
import Addprofile from "./Components/Addprofile";
import ReservationById from "./Components/ReservationById";
import Admin from "./Components/Admin";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Admin/>}/>
        <Route path="/addprofile" element={<Addprofile />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/routeList" element={<Routelist />} />
        <Route path="/editroute/:id" element={<Addroute />} />
        <Route path="/createroute" element={<Addroute />} />
        <Route path="/vehiclelist" element={<Vehiclelist />} />
        <Route path="/editvehicle/:id" element={<Addvehicle />} />
        <Route path="/addvehicle" element={<Addvehicle />} />
        <Route path="/driverlist" element={<DriverList />} />
        <Route path="/adddriver" element={<AddDriver />} />
        <Route path="/editdriver/:id" element={<AddDriver />} />
        <Route path="/viewreservation" element={<Reservationlist />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/resrvationbyuseid/:id" element={<ReservationById />} />
      </Routes>
    </div>
  );
}

export default App;
