import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Search from './components/Search';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import React from 'react';

export default class App extends React.Component{

  constructor() {
    super();
    this.storedList = JSON.parse(localStorage.getItem('local')) || ""
    this.state = {
      linkList: [...this.storedList],
      shownList: [...this.storedList]
    }
  }

  addLink = (name, url, tags) => {
    const obj = {
      name: name,
      url: url,
      tags: tags
    }
    const linkList = this.state.linkList.concat(obj)
    this.setState({
      linkList: linkList,
      shownList: linkList
    })
    localStorage.setItem('local', JSON.stringify(linkList))
  }

  searchLink = (searchValue) => {
    console.log("this is the searchvalue", searchValue)
    if(searchValue) {
      let filteredList = this.state.linkList.filter((link) => {
        let concat = link.name.concat(link.tags)
        return concat.toLowerCase().match(searchValue.toLowerCase())
      })
      this.setState({
        shownList: filteredList
      })
    } else {
      this.setState({
        shownList: this.state.linkList
      })
    }
  }

  render = () => {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row"> 
            <div className="col-3">
              <div className="sticky-top">
              <LinkForm addLink={this.addLink}/>
              <Search searchLink={this.searchLink}/>
              </div>
            </div>
            <div className="col">
              <LinkList links={this.state.shownList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
