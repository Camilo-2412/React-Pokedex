import React from "react";

const Pagination = (props) =>{
    const {onLeft, onRigth, page, totalPages} = props; 
    return (
        <div className="pagination">
            <button onClick={onLeft}>&#9194;</button>
            <div>{page} of {totalPages}</div>
            <button onClick={onRigth}>&#9193;</button>
        </div>
    )
}

export default Pagination;