const React = require('react');

class Show extends React.Component {
   
    render(){
        const {name, color, cooked, _id} = this.props.vegetable
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <>
            <h1> {capName} Show Page </h1>
            <nav>
                <a href="/vegetables">Back To Vegetables Home</a> <br />
                <a href={`/vegetables/${_id}/edit`}>{`Edit the ${capName}`}</a>
            </nav>
            <p>{capName} is {color} and {readyToEat? 'it\'s cooked': 'it\'s not cooked'}</p>
        </>
        )
   } 
}

module.exports = Show