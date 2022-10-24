const React = require('react')

class Default extends React.Component {
  render () {
    const { vegetable, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/vegetables'>Go to Home Page For Vegetables</a>
            <a href='/vegetables/new'>Create a New Fruit</a>
            {vegetable ? <a href={`/vegtables/${vegetable._id}/edit`}> {vegetable.name} Edit Page </a> : ''}
            {vegetable ? <a href={`/vegetables/${vegetable._id}`}>{vegetable.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
