import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from "../../assets/images/2.jpeg"

const Post = (props) => {
    return (
        <Card style={{ width: '18rem' }} className='mb-4'>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>
                    {props.post.body}
                </Card.Text>
                <Button variant="secondary" onClick={() => props.openPost(props.post.id)}>Open Post</Button>
            </Card.Body>
        </Card>
    )
}

export default Post
