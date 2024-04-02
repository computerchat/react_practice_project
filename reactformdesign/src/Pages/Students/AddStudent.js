import CustomSidebar from "../../SideBar/CustomSidebar";

import FormOne from "../../Components/FormOne";
export default function AllStudent() {
  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-2">
            <CustomSidebar />
          </div>
          <div className="col-10">
            <div className="container">
              <h1 className="fs-4">Add Student</h1>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
