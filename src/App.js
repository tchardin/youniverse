import React, { Component } from 'react'
import NHaas from './assets/NHaasGroteskTXStd-75Bd.otf'
import './App.css'

import SideMenu from './components/SideMenu'
import Questions from './Questions'
import Nav from './components/Nav'
import Thread from './Thread'
import Search from './components/Search'

const inspire_titles = [
  "Bayer receives global recognition for strengthening employee innovation capabilities",
  "'Intra'preneurs spark innovation",
  "Bridging Data Science and R&D at Bayer",
  "Calling all R&D colleagues to submit cross-divisional projects to Life Science Collaboration program",
  "It all Started with a Dream",
  "Win an Amazon Alexa device by telling us Your Take on Customer Focus",
  "Hacking Farming 2017: The Wheat Seed Sorting Challenge",
  "Bayer Paraguay is fired up to innovate following its first Innovation Day",
  " Plugging into Boston to help solve Challenges in health and nutrition",
  "Stay Tuned for wave 2 of YOUniverse Contest",
  "World Science Day for peace and Development: Nov 10",
  "US Innovation Day for Crop Science engages more than 550"];

const inspire_images = [
  "\Inspire\image001.jpg",
  "\Inspire\image002.jpg",
  "\Inspire\image003.jpg",
  "\Inspire\image004.jpg",
  "\Inspire\image005.jpg",
  "\Inspire\image006.jpg",
  "\Inspire\image007.jpg",
  "\Inspire\image008.jpg",
  "\Inspire\image009.jpg",
  "\Inspire\image010.jpg",
  "\Inspire\image011.jpg",
  "\Inspire\image012.jpg"
];
const learn_titles = [
  "Communication Material",
  "Innovation Network",
  "Systematic Thinking",
  "Design Thinking",
  "Lean Startup",
  "Creative Spaces",
  "User Experience",
  "Customer Insight",
  "Industry Visit",
  "Startup Visit",
  "Visual Thinking",
  "SIT Division"];

const learn_images = [
  "\Learn\image01.jpg",
  "\Learn\image02.jpg",
  "\Learn\image03.jpg",
  "\Learn\image04.jpg",
  "\Learn\image05.jpg",
  "\Learn\image06.jpg",
  "\Learn\image07.jpg",
  "\Learn\image08.jpg",
  "\Learn\image09.jpg",
  "\Learn\image10.jpg",
  "\Learn\image11.jpg",
  "\Learn\image12.jpg",
  "\Learn\image13.jpg"]

class App extends Component {
  state = {
    tab: 'search',
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
                <strong>YOUniverse</strong> by <a href="http://jgthms.com">BAYER</a>.
              </p>
            </div>
          </div>
        </footer>}
      </div>
    )
  }
}

export default App
