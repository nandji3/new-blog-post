import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../Styles/Posts.module.css";
import { removePost } from "../../Redux/postsSlice";
import Pagination from "../Pagination/Pagination";

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, currentPage } = useSelector((state) => state.posts);

    const currentData = posts.slice((currentPage - 1) * 6, currentPage * 6);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.postsDiv}>
                {currentData.map((post) => {
                    return (
                        <div key={post.id} className={styles.postsCard}>
                            <div className={styles.action}>
                                <button
                                    onClick={() =>
                                        dispatch(removePost(post.id))
                                    }
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <div className={styles.content}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.paginationDiv}>
                <Pagination />
            </div>
        </div>
    );
};

export default Posts;
