import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'

export class singlePost extends Component {
    state = {
        post: null
    }
    componentDidUpdate(prevProps) {
        if (this.props.id && this.props.id !== prevProps.id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then((res) => {
                this.setState({ post: res.data })
            })
        }

    }

    renderPost = () => {
        if (this.state.post) {
            return (
                <Modal
                    show={this.props.showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.props.closeModalHandler}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.post.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <h4>Centered Modal</h4> */}
                        <p>
                            {this.state.post.body}

                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModalHandler} className='btn-secondary'>Close</Button>
                    </Modal.Footer>
                </Modal>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderPost()}
            </>
        )
    }
}

export default singlePost
