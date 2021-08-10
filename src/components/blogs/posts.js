import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
//pages
import SinglePost from './singlePost'
import Post from './post'

export class Posts extends Component {
    //عشان اخزن البيانات اللى جيالى 
    state = {
        posts: [],
        showModal: false,
        currentId: null,
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            this.setState({ posts: res.data })
            // console.log(this.state.posts);

        })
    }
    renderPosts = () => {
        if (this.state.posts.length > 0) {
            return (
                this.state.posts.map((post) => {
                    return (
                        <Col md={6} lg={4} key={post.id}>
                            <Post post={post} openPost={this.openPost} />
                        </Col>
                    )

                })
            )
        } else {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="danger" />
                </div>

            )
        }
    }

    openPost = (id) => {
        this.showModalHandler()
        this.setState({ currentId: id })
    }

    showModalHandler = () => {
        this.setState({ showModal: true })
    }
    closeModalHandler = () => {
        this.setState({ showModal: false })
    }
    render() {
        return (
            <Container>
                <Row >
                    <Col>
                        <h2 style={{ marginTop: '48px' }} className='h3 text-secondary border-bottom
                        pb-3 mb-4'>Latest Posts</h2>
                    </Col>
                </Row>
                <Row>

                    {this.renderPosts()}

                </Row>
                <SinglePost
                    showModal={this.state.showModal}
                    closeModalHandler={this.closeModalHandler}
                    id={this.state.currentId}
                />

            </Container>
        )
    }
}

export default Posts
