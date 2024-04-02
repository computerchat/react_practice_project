export default function CardFour({ fullName, subject, followers, following, friends, profileImage }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              {profileImage && 
                <div className="d-flex justify-content-center">
                  <img
                    src={profileImage} 
                    className="rounded-circle w-50 h-50"
                    alt="profile image"
                  />
                </div>
              }
              {fullName && <div className="fs-5 fw-bold">{fullName}</div>}
              {subject && <p className="fw-lighter">{subject}</p>}
              <div className="card-body"></div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b className="float-start">Followers</b>
                  {followers !== undefined && 
                    <span className="float-end text-primary fw-medium">{followers}</span>
                  }
                </li>
                <li className="list-group-item">
                  <b className="float-start">Following</b>
                  {following !== undefined && 
                    <span className="float-end text-primary fw-medium">{following}</span>
                  }
                </li>
                <li className="list-group-item">
                  <b className="float-start">Friends</b>
                  {friends !== undefined && 
                    <span className="float-end text-primary fw-medium">{friends}</span>
                  }
                </li>
              </ul>

              <div className="text-center m-3">
                <button type="button" className="btn btn-primary rounded-pill me-2">FOLLOW</button>
                <button type="button" className="btn btn-danger rounded-pill me-2">MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
