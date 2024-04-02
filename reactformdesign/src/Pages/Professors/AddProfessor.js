import CustomSidebar from "../../SideBar/CustomSidebar";
import FormTwo from "../../Components/FormTwo";
export default function AddProfessor() {
  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-2">
            <CustomSidebar />
          </div>
          <div className="col-10">
            <div className="container">
              <h1 className="fs-4">Add Professor</h1>
              <FormTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}