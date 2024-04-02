export default function CardFive({ fullName, mobile, email, location, aboutMeOne, aboutMeTwo, aboutMeThree,ed, education,exp, experience,conf, conferences, certificate, certificateDes }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 h-auto">
              <div className="col-2 mt-4">
                <button type="button" className="btn btn-primary rounded-pill">
                  About me
                </button>
              </div>
              <div className="card-body">
                <div className="card-title">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {fullName && <td className="fw-light">{fullName}</td>}
                        {mobile && <td className="fw-light">{mobile}</td>}
                        {email && <td className="fw-light">{email}</td>}
                        {location && <td className="fw-light">{location}</td>}
                      </tr>
                    </tbody>
                  </table>
                </div>
                {aboutMeOne && <p className="card-text text-start">{aboutMeOne}</p>}
                {aboutMeTwo && <p className="card-text text-start">{aboutMeTwo}</p>}
                {aboutMeThree && <p className="card-text text-start">{aboutMeThree}</p>}

                {ed &&<h5 className="card-text text-start my-5">{ed}</h5>}
                <ul className="card-text text-start">
                  {education && (
                    education.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  )}
                </ul>

                {exp &&<h5 className="card-text text-start my-5">{exp}</h5>}
                <ul className="card-text text-start">
                  {experience &&  (
                    experience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) 
                   
                }
                </ul>

                {conf &&<h5 className="card-text text-start my-5">{conf}</h5>}
                <ul className="card-text text-start">
                  {conferences && (
                    conferences.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) }

                  
                </ul>
                {certificate &&<h5 className="card-text text-start my-5">{certificate}</h5>}
                <ul className="card-text text-start">
                  {certificateDes && (
                    certificateDes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
