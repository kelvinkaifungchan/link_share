import React from 'react';

export default class LinkForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    handleSearchChange = (e) => {
        console.log("this is working")
        this.setState({
            search: e.target.value
        })
        this.props.searchLink(e.target.value)
    }

    render = () => {
        return (
        <div>
            <input type="text" placeholder="SEARCH" onChange={this.handleSearchChange} value={this.state.search}/>
        </div>
        )
    }
}