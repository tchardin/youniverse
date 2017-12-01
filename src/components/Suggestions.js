import React from 'react'

const Suggestions = () => {
  return (
    <table className="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <td>Suggested resources</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <i className="fa fa-book"></i>
            <span className="suggestion-head">Design Thinking Guide</span>
          </th>
          <td>Bayer Innovation Hub</td>
          <td>San Francisco</td>
          <td>July 2017</td>
        </tr>
        <tr>
          <th>
            <i className="fa fa-book"></i>
            <span className="suggestion-head">Innovation Grant</span>
          </th>
          <td>Bayer Grant Foundation</td>
          <td>Berlin</td>
          <td>January 2016</td>
        </tr>
        <tr>
          <th>
            <i className="fa fa-user-md"></i>
            <span className="suggestion-head">Aftab Hussain</span>
          </th>
          <td>Bayer Crop Science Dpt</td>
          <td>Cambridge</td>
          <td>Active 2h ago</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Suggestions
