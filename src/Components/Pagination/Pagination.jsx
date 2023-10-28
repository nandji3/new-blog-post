import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageAction } from "../../Redux/postsSlice";
import styles from "../../Styles/Pagination.module.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Pagination = () => {
    const dispatch = useDispatch();
    const { posts, currentPage } = useSelector((state) => state.posts);

    const totalPages = Math.ceil(posts.length / 6); // Assuming 6 items per page

    const handlePageChange = (newPage) => {
        dispatch(currentPageAction(newPage));
    };

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div className={styles.pagination}>
            <button
                className={styles.previousBtn}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <BiSolidLeftArrow />
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? "active" : ""}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                className={styles.nextBtn}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <BiSolidRightArrow />
            </button>
        </div>
    );
};

export default Pagination;
