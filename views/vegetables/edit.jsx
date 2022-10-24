const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name } = this.props.vegetable
    return (
      <Default title={`${name} Edit Page`} fruit={this.props.vegetable}>

        <form method='POST' action='/vegetable'>
          Name: <input type='type' name='name' placeholder='Name of Vegetable Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Vegetable Here' /><br />
          Is Cooked: <input type='checkbox' name='cooked' /><br />
          <input type='submit' value='Edit Vegetable' />
        </form>
      </Default>
    )
  }
}
module.exports = Edit
