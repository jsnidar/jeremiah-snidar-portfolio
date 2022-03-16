import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogsContainer = () => {

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jsnidar"

  const [profile, setProfile] = useState({
    name: "",
    profileImage: '',
    profileUrl: ''
  })

  const [ blog, setBlog ] = useState({
    item: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    if(blog.isLoading === true){
      fetch(mediumURL)
      .then(res => res.json())
      .then(info => {
         setProfile({
           name: "Jeremiah Snidar",
           profileUrl: info.feed.link,
           profileImage: info.feed.image
         })
  
         setBlog({
           item: info.items.filter(post => post.categories.length > 0),
           isLoading: false
          })
      })
      .catch(err => setBlog({error: err.message}))
    }
  }, [blog.isLoading])

  const renderBlogs = blog.item.length > 0 ? blog.item.map((post, index) => <BlogCard profile={profile} post={post} key={index} />) : null

  return (
    <>
      <Row className="pb-4">
        <h2>Blog Posts</h2>
      </Row>
      <Row>
        { blog.isLoading ? <Spinner animation="grow" variant="dark" /> : renderBlogs}
      </Row>
    </>
  )
}

export default BlogsContainer;