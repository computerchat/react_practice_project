import React, { useState } from "react";
import CustomNavLink from "../../NavBar/Navlink"; // Import your custom NavLink component
import styles from "./Dashboard.module.css";
import CustomSidebar from "../../SideBar/CustomSidebar";

const Dashboard = () => {
  const [dropdownState, setDropdownState] = useState({
    dashboard: false,
    professor: false,
    student: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-2" >
      {/* Add the CustomSidebar component here */}
      <CustomSidebar />
      </div>
      
      <div className="col-10"> {/* Adjust the column size based on your layout */}
        <nav className={styles.sidebar}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <span
                onClick={() => toggleDropdown("dashboard")}
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
              >
                Dashboard
              </span>
              {dropdownState.dashboard && (
                <ul className="nav flex-column ml-3">
                  <li className="nav-item">
                    <CustomNavLink to="/dashboard/dashboard1">Dashboard 1</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/dashboard/dashboard2">Dashboard 2</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/dashboard/dashboard3">Dashboard 3</CustomNavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <span
                onClick={() => toggleDropdown("professor")}
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
              >
                Professor
              </span>
              {dropdownState.professor && (
                <ul className="nav flex-column ml-3">
                  <li className="nav-item">
                    <CustomNavLink to="/all_professor">All Professors</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/add_professor">Add Professor</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/about_professor">About Professor</CustomNavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <span
                onClick={() => toggleDropdown("student")}
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
              >
                Student
              </span>
              {dropdownState.student && (
                <ul className="nav flex-column ml-3">
                  <li className="nav-item">
                    <CustomNavLink to="/all_student">All Students</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/add_student">Add Student</CustomNavLink>
                  </li>
                  <li className="nav-item">
                    <CustomNavLink to="/about_student">About Student</CustomNavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
