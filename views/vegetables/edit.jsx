const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, color, cooked} = this.props.vegetable
        return (
            <>
            <h1>Create A New Vegetable</h1>
            <nav>
                <a href="/vegetables"> Go Back To Vegetables Home Page</a>
            </nav>
            <form method="POST" action="/vegetable">
                Name: <input type="type" name="name" placeholder="Name of Vegetable Here"></input><br/>
                Color: <input type="text" name="color" placeholder="Color of Vegetable Here"></input><br/>
                Is Cooked: <input type="checkbox" name="cooked"></input><br/>
                <input type="submit" value="Edit Vegetable"></input>               
                </form>            
                </>
        )
    }
}
module.exports = Edit