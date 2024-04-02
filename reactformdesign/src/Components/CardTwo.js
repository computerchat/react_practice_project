import styles from "./CardTwo.module.css";

export default function CardTwo({
    header,
    totalCount,
    description,
    iname
}) {
    return (
        <div className={`card text-bg-light mb-3 h-80 ${styles.cardTwo}`}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    {header && <div className="text-start fw-semibold fs-5 ms-4 font-size-base">{header}</div>}
                    {iname && <i className={`ms-5 bi bi-${iname} fs-3`}></i>}
                </div>
            </div>
            <div className="card-body">
                { totalCount &&<h5 className="card-title fs-1 text-start b">{totalCount}</h5>}
                { description && <p className="card-text text-start">{description}</p>}
            </div>
        </div>
    );
}
