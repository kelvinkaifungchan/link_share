import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            url: "",
            tags: [],
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

    handleTagsChange = (i, e) => {
        let tags = this.state.tags.slice();
        tags[i] = {
            tag: e.target.value
        };
        this.setState({
            tags: tags
        });
    }

    addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{ tag: "" }]),
          });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLink(this.state.name, this.state.url, this.state.tags)
        this.setState({
            modal: false,
            name: "",
            url: "",
            tags: []
        })
    }

    render = () => {
        return (
        <div>
            <span className="customButton" onClick={this.toggle}>add link</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-full rounded-0" size="lg" >
                <form onSubmit={this.handleSubmit}>
                    <ModalBody className="modal-content d-flex justify-content-start rounded-0">
                        <div>
                            <input type="text" placeholder="add name" className="p-3" onChange={this.handleNameChange} value={this.state.name}/>
                        </div>
                        <div>
                            <input type="text" placeholder="add url" className="p-3" onChange={this.handleUrlChange} value={this.state.url}/>
                        </div>
                        {this.state.tags.map((tag, i) => {
                            return(
                                <div>
                                <input key={i} type="text" placeholder="add tag" className="p-3" onChange={this.handleTagsChange.bind(this, i)} value={tag.tag}/>
                            </div>
                            )
                        })}
                        <div>
                        <button type="button" className="border-0 bg-transparent" onClick={this.addTag}>another tag</button>
                        </div>
                        <div>
                        <button type="submit" className="border-0 bg-transparent">submit</button>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
        </div>
        )
    }
}