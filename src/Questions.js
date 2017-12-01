import React from 'react'
import Suggestions from './components/Suggestions'
import jenny_img from './assets/jenny.jpeg'
import bob_img from './assets/bob.jpeg'
import brad_img from './assets/brad.jpeg'
import kerry_img from './assets/kerry.jpeg'

const Questions = ({handleSwitch, handleType, text}) => {
  return (
    <div className="container">
      <div className="field">

      </div>
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="New question..."
                value={text}
                onChange={handleType}></textarea>
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Tag people" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </p>
              <div className="space"></div>
              <div className="level-item">
                <input type='checkbox' className='ios8-switch' id='checkbox-1' />
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="file">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa fa-upload"></i>
                      </span>
                      <span className="file-label">
                        Upload a file…
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="level-item">
                <a className="button is-info">Submit</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
      {!!text.length && <Suggestions />}
      <div className="columns">
        <div className="column">
          <article className="box"
            onClick={() => handleSwitch('thread')}>
            <figure className="image is-48x48">
              <img src={jenny_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">New software for fluorescence imaging integrated protein analytics.</p>
              <span className="tag is-info">#software</span>
            </div>
          </article>
        </div>
        <div className="column">
          <article className="box">
            <figure className="image is-48x48">
              <img src={kerry_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">How do I inhibit the biosynthesis of cellulose for invasive grass?</p>
              <span className="tag is-info">#biomolecular</span>
            </div>
          </article>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <article className="box">
            <figure className="image is-48x48">
              <img src={bob_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">How to improve extraction of enzymes from the Bacillus Thuringiensis bacteria for coating corn seeds?</p>
              <span className="tag is-info">#enzymes</span>
            </div>
          </article>
        </div>
        <div className="column">
          <article className="box">
            <figure className="image is-48x48">
              <img src={jenny_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">Is there an alternative to Clothianidin see treatments?</p>
              <span className="tag is-info">#Clothianidin</span>
            </div>
          </article>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <article className="box">
            <figure className="image is-48x48">
              <img src={brad_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">Other sequencing solutions for bread wheat?</p>
              <span className="tag is-info">#wheat</span>
            </div>
          </article>
        </div>
        <div className="column">
          <article className="box">
            <figure className="image is-48x48">
              <img src={jenny_img} />
            </figure>
            <div className="card-body">
              <p className="title is-4">Can I mix Monocotelydoneous proto-chromosomes?</p>
              <span className="tag is-info">#Genomics</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Questions
