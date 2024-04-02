import CustomSidebar from "../../SideBar/CustomSidebar";
import CardTwo from "../../Components/CardTwo";
export default function DashboardTwo () {
    return (
        <>
        <div className="container-fluid">
        <div className="row no-gutters"> 
          <div className="col-2">
            <CustomSidebar />
          </div>
          <div className="col-md-4"> 
            <div className="d-flex flex-wrap"> 
            <h1 className="mb-5">Dashboard</h1>
            <div className="row">
              <div className="col-md-6 mb-3"> 
                <CardTwo
                  header="Total Student"
                  iname="bi bi-people-fill"
                  totalCount="4586"
                  description=" 10.32% Since last week"
                  backgroundColor="trending_up 10.32% Since last week" 
                />
              </div>
              <div className="col-md-6 mb-3"> 
                <CardTwo
                  
                  header="New Student"
                  iname="bi bi-person"
                  totalCount="323"
                  description="trending_up 21..19% Since last week"
                  backgroundColor="text-bg-light"
                />
              </div>
              <div className="col-md-6 mb-3"> 
                <CardTwo
                  
                  header="Total Course"
                  iname="bi bi-menu-app-fill"
                  totalCount="103"
                  description="ending_up 10.32% Since last week"
                  backgroundColor="text-bg-light"
                />
              </div>
              <div className="col-md-6 mb-3"> 
                <CardTwo
                  
                  header=" visitor "
                  iname="bi bi-cup-hot-fill"
                  totalCount="2352"
                  description="trending_down -4.27% Since last week"
                  backgroundColor="text-bg-light"
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