const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Vegetable'>
        <form method='POST' action='/fruits'>
          Name: <input type='text' name='name' placeholder='Name of Vegetable Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Vegetable Here' /><br />
          Is Cooked: <input type='checkbox' name='isCooked' /><br />
          <input type='submit' value='Submit Vegetable' />
        </form>
      </Default>
    )
  }
}

module.exports = New
