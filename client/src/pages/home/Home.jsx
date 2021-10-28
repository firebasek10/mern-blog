// import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import Axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get('http://localhost:5000/api/posts/');
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
