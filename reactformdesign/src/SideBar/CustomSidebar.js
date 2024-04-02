import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CustomSidebar.module.css';

const CustomSidebar = () => {
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
    <div className={`row bg-dark  ${styles.sidebarContainer}`}>
      <nav className={`col-lg-12 col-md-10 col-sm-10 col-8   ${styles.sidebar}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button
              onClick={() => toggleDropdown('dashboard')}
              className="nav-link active text-white"
            >
              Dashboard
            </button>
            {dropdownState.dashboard && (
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <NavLink to="/dashboard/dashboard1" className="nav-link text-white">
                    Dashboard 1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/dashboard2" className="nav-link text-white">
                    Dashboard 2
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/dashboard3" className="nav-link text-white">
                    Dashboard 3
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <button
              onClick={() => toggleDropdown('professor')}
              className="nav-link active text-white"
            >
              Professor
            </button>
            {dropdownState.professor && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to="/all_professor" className="nav-link text-white">
                    All Professors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/add_professor" className="nav-link text-white">
                    Add Professor
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about_professor" className="nav-link text-white">
                    About Professor
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <button
              onClick={() => toggleDropdown('student')}
              className="nav-link active text-white"
            >
              Student
            </button>
            {dropdownState.student && (
              <ul className="nav flex-column ml-3">
                <li className="nav-item">
                  <NavLink to="/all_student" className="nav-link text-white">
                    All Students
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/add_student" className="nav-link text-white">
                    Add Student
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about_student" className="nav-link text-white">
                    About Student
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomSidebar;
