import Head from 'next/head'
import Header from '../components/Header'
import axios  from 'axios'
import { useEffect, useState } from 'react'
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);

  console.log(posts);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Task-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Im the main body</h1>
        <Posts posts={currentPosts} loading={loading}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </main>
    </div>
  )
}
