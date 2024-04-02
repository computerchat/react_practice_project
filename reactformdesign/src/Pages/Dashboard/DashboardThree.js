import CustomSidebar from "../../SideBar/CustomSidebar";
import CardThree from "../../Components/CardThree";

export default function DashboardThree() {
    return (
        <div className="container-fluid">
            <div className="row no-gutters"> 
                <div className="col-2">
                    <CustomSidebar />
                </div>
                <div className="col-10"> 
                    <h1 className="mb-5">Dashboard</h1>
                    <div className="row">
                        <div className="col-md-3 mb-3"> 
                            <CardThree
                                header="Total Students  "
                                totalCount="4586"
                                backgroundColor="text-bg-light" 
                                value={50}
                            />
                        </div>
                        <div className="col-md-3 mb-3"> 
                            <CardThree
                                header="New Student"
                                totalCount="589"
                                backgroundColor="text-bg-light"
                                value={50}
                            />
                        </div>
                        <div className="col-md-3 mb-3"> 
                            <CardThree
                                header="Total Course"
                                totalCount="48"
                                backgroundColor="text-bg-light"
                                value={33}
                            />
                        </div>
                        <div className="col-md-3 mb-3"> 
                            <CardThree
                                header="Visitor"
                                totalCount="2,479"
                                backgroundColor="text-bg-light"
                                value={49}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
