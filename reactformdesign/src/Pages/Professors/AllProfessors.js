import Table from "../../Components/Table";
import CustomSidebar from "../../SideBar/CustomSidebar";
export default function AllProfessor () {
    const data = [
        {
            Name: "Pooja Patel",
            Department: "Mechanical" ,
            Gender: "Male",
            Degree: "M.E.",
            Mobile: 444786876,
            Email: "pooja@gmail.com",
            Joining: "27 Aug 2005",
           

        },
        {
            Name: "Megha Trivedi",
            Department: "Mathematics" ,
            Gender: "Female",
            Degree: "M.Com, B.Ed",
            Mobile: 444543564,
            Email: "megha@gmail.com",
            Joining: "27 Aug 2005",
        },
        {
            Name: "Rajesh",
            Department: "Computer" ,
            Gender: "Male",
            Degree: "M.Com, B.Ed",
            Mobile: 4444565756,
            Email: "rajesh@gmail.comsdgfsdfg",
            Joining: "22 Feb 2000",
        }
    ]

    const repeatedData = [];
    for(let i = 0; i<10; i++){
      repeatedData.push(...data);
    }
    const showHeaders = {
        Name: true,
        Department: true,
        Gender: true,
        Degree: true,
        Mobile: true,
        Email: true,
        Joining: true,
      };
    
    return (
        <>
        <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-2">
          <CustomSidebar />
        </div>

        <div className="col-10">
          <h1 className="mb-5">Dashboard</h1>
          <div className="row">
            <div className="col-md-12 mb-3">
            <Table data={repeatedData} showHeaders={showHeaders} />
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}