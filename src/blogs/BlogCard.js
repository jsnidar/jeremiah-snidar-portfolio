
import { Card, NavLink, Col } from "react-bootstrap"

const BlogCard = ({ post }) => {

  const ToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node;
    node = tag.innerText;
    return node
  }

  const description = ToText(post.description);

  return(
    <Col sm={12} lg={6} className='g-4'>
      <Card className="bg-light border-3 d-flex blog-card">
        <Card.Img variant="top" src={post.thumbnail} />
        <Card.Body className="card-body">
          <Card.Title className="fs-4">
            <NavLink 
              onClick={() => window.open(`${post.link}`)}
            >{post.title}</NavLink>
          </Card.Title>
          <Card.Text className="fs-5 description">
            {description.length > 400 ? description.substring(0, 600) + '...' : description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BlogCard;