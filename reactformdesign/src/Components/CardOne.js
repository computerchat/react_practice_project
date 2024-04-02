import styles from "./Card.module.css"
export default function CardOne ({
    imgSrc,
    imgAlt,
    heading,
    totalStudents,
    percentage,
    backgroundColor
}) {
    
    return (
        <>
        <div className={`${styles.card} text-bg-primary card mb-3 ${backgroundColor}`}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4 text-center">
          <img src={imgSrc} className="img-fluid rounded-start" alt={imgAlt} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-block fs-5 fw-normal">{heading}</div>
            <div className="fw-light fs-3">{totalStudents}</div>
            <div className="d-block fs-5 fw-normal">{percentage}</div>
          </div>
        </div>
      </div>
    </div>


    
        </>
    );
}