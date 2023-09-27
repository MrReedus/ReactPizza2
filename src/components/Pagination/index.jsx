import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'

const Pagination = ({ onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={e => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3} // захардкожили так как бэкэнд мокапи не отправляет количество страниц
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;