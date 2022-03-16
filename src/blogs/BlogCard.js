
import { Card, NavLink, Col } from "react-bootstrap"

const BlogCard = ({ post, profile }) => {

  console.log(post)

  const ToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node;
    node = tag.innerText;
    return node
  }
  return(
    <Col>
      <Card className="bg-light border-3">
        <Card.Img variant="top" src={post.thumbnail} />
        <Card.Body>
          <Card.Title className="fs-4">
            <NavLink 
              onClick={() => window.open(`${post.link}`)}
            >{post.title}</NavLink>
          </Card.Title>
          <Card.Text className="fs-5">
            {`${ToText(post.description.slice(0, 1000))}...`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BlogCard;