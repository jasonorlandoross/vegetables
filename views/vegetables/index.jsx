const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { vegetables } = this.props
    return (
      <Default title='Vegetables Index Page'>
        <ul>
          {
                        vegetables.map((vegetable) => {
                          const { name, color, isCooked, _id } = vegetable
                          return (
                            <li key={_id}>
                              <a href={`/vegetables/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        isCooked
                                          ? 'It\'s ready to eat'
                                          : 'It\'s not ready to eat'
                                    }
                              <br />
                              <form method='POST' action={`/vegetables/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
