
import { Card, NavLink, Col } from "react-bootstrap"

const BlogCard = ({ post }) => {

  console.log(post)

  const ToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node;
    node = tag.innerText;
    return node
  }
  return(
    <Col sm={12} lg={6} xl={4} className='g-4'>
      <Card className="bg-light border-3">
        <Card.Img variant="top" src={post.thumbnail} />
        <Card.Body>
          <Card.Title className="fs-4">
            <NavLink 
              onClick={() => window.open(`${post.link}`)}
            >{post.title}</NavLink>
          </Card.Title>
          <Card.Text className="fs-5">
            {`${ToText(post.description.slice(0, 400))}...`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BlogCard;