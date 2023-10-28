// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loader2 from './Components/Loader/Loader2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPostsDataAction } from './Redux/postsAction';
import Posts from './Components/Posts/Posts';

const App = () => {

  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getAllPostsDataAction())
  }, [dispatch]);

  return (
    <>
      {isLoading ? <Loader2 /> : <Posts />}
    </>
  );
}
export default App;