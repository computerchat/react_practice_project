export default function Table({ data, showHeaders }) {
    return (
      <>
        <div className="container">
          <table className="table  table-hover">
            <thead>
              <tr>
              {showHeaders.Roll && <th>Roll No</th>}    
                {showHeaders.Name && <th>Name</th>}
               
                {showHeaders.Department && <th>Department</th>}
                {showHeaders.Gender && <th>Gender</th>}
                {showHeaders.Degree && <th>Degree</th>}
                {showHeaders.Mobile && <th>Mobile</th>}
                {showHeaders.Email && <th>Email</th>}
                {showHeaders.Joining && <th>Joining</th>}
                {showHeaders.Admission && <th>Admission Date</th>}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                      {showHeaders.Roll && <th>{item.Roll}</th>}
                  {showHeaders.Name && <td>{item.Name}</td>}
                
                  {showHeaders.Department && <td>{item.Department}</td>}
                  {showHeaders.Gender && <td>{item.Gender}</td>}
                  {showHeaders.Degree && <td>{item.Degree}</td>}
                  {showHeaders.Mobile && <td>{item.Mobile}</td>}
                  {showHeaders.Email && <td>{item.Email}</td>}
                  {showHeaders.Joining && <td>{item.Joining}</td>}
                  {showHeaders.Admission && <th>{item.Admission}</th>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  