const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, isCooked } = this.props.vegetable
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} vegetable={this.props.vegetable}>
        <p>{capName} is {color} and {isCooked ? 'it\'s cooked' : 'it\'s not cooked'}</p>
      </Default>
    )
  }
}

module.exports = Show
