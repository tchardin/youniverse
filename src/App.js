import React, { Component } from 'react'
import NHaas from './assets/NHaasGroteskTXStd-75Bd.otf'
import './App.css'

import SideMenu from './components/SideMenu'
import Questions from './Questions'
import Nav from './components/Nav'
import Thread from './Thread'
import Search from './components/Search'

class App extends Component {
  state = {
    tab: 'questions',
    text: '',
    inspired: false
  }
  switchTab = (newTab) => {
    this.setState({
      tab: newTab
    })
  }
  handleType = ({target}) => {
    this.setState({
      text: target.value
    })
  }
  toggleSwitch = () => {
    this.setState(prevState => ({
      inspired: !prevState.inspired
    }))
  }
  render() {
    const {tab, showResources, inspired, text} = this.state
    let content
    if (inspired) {
      content = (
        <section className="list-container">
          <div className="content-container">
            <div className="inspire-container"></div>
            <div className="learn-container"></div>
          </div>
        </section>
      )
    } else {
      content = (
        <section className="list-container">
          <div className="content-container">
            <SideMenu
              tab={tab}
              handleSwitch={this.switchTab}/>
            {tab === 'questions' &&
              <Questions
                handleSwitch={this.switchTab}
                handleType={this.handleType}
                text={text}/>}
            {tab === `thread` &&
              <Thread
                onSubmit={this.switchTab}/>}
            {tab === 'search' &&
              <Search
                title="Resources"
                handleQuit={this.switchTab}/>}
          </div>
        </section>
      )
    }
    return (
      <div className="App">
        <Nav
          check={inspired}
          handleChange={this.toggleSwitch}/>
        {content}
        {tab === 'thread' &&
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>YOUniverse</strong> by <a>BAYER</a>.
              </p>
            </div>
          </div>
        </footer>}
      </div>
    )
  }
}

export default App
