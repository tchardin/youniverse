import React from 'react'
import bob_img from './assets/bob.jpeg'
import kerry_img from './assets/kerry.jpeg'
import jenny_img from './assets/jenny.jpeg'

const Thread = ({onSubmit}) => {
  return (
    <div>
      <article className="media">
        <div className="content">
          <h2 className="title">New software for fluorescence imaging integrated protein analytics.</h2>
          <small>September 5, 2017</small>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <figure className="image is-48x48">
            <img src={kerry_img} />
          </figure>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
              <figure className="image is-48x48">
                <img src={bob_img} />
              </figure>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                  <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
              <figure className="image is-48x48">
                <img src={jenny_img} />
              </figure>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Jenny Zhang</strong>
                  <br />
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                  <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <figure className="image is-48x48">
            <img src={jenny_img} />
          </figure>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button">Post comment</button>
              <button className="button"
                onClick={() => onSubmit('search')}>Resources</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Thread
