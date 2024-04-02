export default function CardSix ({about,description,myInfo, Gender, Operation,Degree, Designation}){
    return (
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
        <div className="card mb-3 h-auto" >
      <div className="card-header fw-bold fs-5 text-start">{about}</div>
      <div className="card-body">
        <h5 className="fw-normal text-start fs-5">{description}</h5>
        <p className="card-text">{myInfo}</p>
        <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b className="float-start">Gender</b>
                  <span className="float-end  fw-normal">{Gender}</span>
                </li>
                <li className="list-group-item">
                  <b className="float-start">Operation Done</b>
                  <span className="float-end  fw-normal">{Operation}</span>
                </li>
                <li className="list-group-item">
                  <b className="float-start">Degree</b>
                  <span className="float-end  fw-normal">{Degree}</span>
                </li>
                <li className="list-group-item">
                  <b className="float-start">Designation</b>
                  <span className="float-end  fw-normal">{Designation}</span>
                </li>
              </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
        </>
    )
}