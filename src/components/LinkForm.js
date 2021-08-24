import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            url: "",
            tags: "",
        }
    }

    toggle = () => {
        this.setState({
            modal:!this.state.modal
        })
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleUrlChange = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleTagsChange = (e) => {
        this.setState({
            tags: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLink(this.state.name, this.state.url, this.state.tags)
        console.log("this is the tag state", this.state.tags)
        this.setState({
            modal: false,
            name: "",
            url: "",
            tags: ""
        })
    }

    render = () => {
        return (
        <div>
            <span className="customButton" onClick={this.toggle}>ADD LINK</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="p-5 modal-full" size="lg" >
                <form onSubmit={this.handleSubmit}>
                    <ModalBody className="p-5 modal-content">
                        <div>
                            <input type="text" placeholder="INSERT NAME" className="p-3" onChange={this.handleNameChange} value={this.state.name}/>
                        </div>
                        <div>
                            <input type="text" placeholder="INSERT URL" className="p-3" onChange={this.handleUrlChange} value={this.state.url}/>
                        </div>
                        <div>
                            <input type="text" placeholder="ADD TAG" className="p-3" onChange={this.handleTagsChange} value={this.state.tags}/>
                        </div>
                        <button type="submit" className="border-0 bg-transparent">SUBMIT</button>
                    </ModalBody>
                </form>
            </Modal>
        </div>
        )
    }
}