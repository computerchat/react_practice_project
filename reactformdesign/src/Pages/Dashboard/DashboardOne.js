import CustomSidebar from "../../SideBar/CustomSidebar";
import CardOne from "../../Components/CardOne";

export default function DashboardOne() {
  return (
    <>
  
      <div className="container-fluid">
        <div className="row no-gutters"> 
          <div className="col-2">
            <CustomSidebar />
          </div>
          <div className="col-10"> 
            <div className="d-flex flex-wrap"> 
            <h1 className="mb-5">Dashboard</h1>
            <div className="row">
              <div className="col-md-3 mb-3"> 
                <CardOne
                  imgSrc="/dashboardCard.png"
                  imgAlt="dashboardCard"
                  heading="Total Student"
                  totalStudents="450"
                  percentage="45% Increase in last 28 days"
                  backgroundColor="bg-info" 
                />
              </div>
              <div className="col-md-3 mb-3"> 
                <CardOne
                  imgSrc="/dashboardCard.png"
                  imgAlt="dashboardCard"
                  heading="Total Student"
                  totalStudents="155"
                  percentage="45% Increase in last 28 days"
                  backgroundColor="bg-danger"
                />
              </div>
              <div className="col-md-3 mb-3"> 
                <CardOne
                  imgSrc="/dashboardCard.png"
                  imgAlt="dashboardCard"
                  heading="Total Course"
                  totalStudents="52"
                  percentage="45% Increase in last 28 days"
                  backgroundColor="rgb(252, 240, 226)"
                />
              </div>
              <div className="col-md-3 mb-3"> 
                <CardOne
                  imgSrc="/dashboardCard.png"
                  imgAlt="dashboardCard"
                  heading=" Fess Collection "
                  totalStudents="13921$"
                  percentage="45% Increase in last 28 days"
                  backgroundColor="bg-warning"
                />
              </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
