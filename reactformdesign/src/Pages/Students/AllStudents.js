import CustomSidebar from "../../SideBar/CustomSidebar";
import Table from "../../Components/Table";

export default function AllStudents() {
    // Original data
    const originalData = [
        {
            Roll: 1,
            Name: "Pooja Patel",
            Department: "Mechanical",
            Mobile: 4444565756,
            Email: "pooja@gmail.com",
            Admission: "22 Feb 2010"
        },
        {
            Roll: 2,
            Name: "Megha Trivedi",
            Department: "Mathematics",
            Mobile: 444786876,
            Email: "megha@gmail.com",
            Admission: "27 Aug 2005",
        },
        {
            Roll: 3,
            Name: "Rajesh",
            Department: "Computer",
            Mobile: 4444565756,
            Email: "rajesh@gmail.comsdgfsdfg",
            Admission: "05 Jun 2011",
        }
    ];

    const repeatedData = [];
for (let i = 0; i < 10; i++) {
    const offset = i * originalData.length;
    const repeatedStudents = originalData.map((student) => ({
        ...student,
        Roll: student.Roll + offset
    }));
    repeatedData.push(...repeatedStudents);
}


    const showHeaders = {
        Roll: true,
        Name: true,
        Department: true,
        Mobile: true,
        Email: true,
        Admission: true,
    };

    return (
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
    );
}
