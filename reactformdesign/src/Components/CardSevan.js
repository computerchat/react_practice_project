export default function CardSevan({adress, fullAdress}) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div class="card  mb-3 h-auto" >
              <div class="card-header fw-bold text-start">{adress}</div>
              <div class="card-body">
                <div class="card-title">{fullAdress}</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
