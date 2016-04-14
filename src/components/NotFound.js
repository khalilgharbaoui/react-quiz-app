import React from 'react';
import { Link } from 'react-router';
class NotFound extends React.Component{

  constructor(){
    super();

  }
  render(){
    return (
      <div>
      <h1>{this.props.notfound}</h1>
        <Link to={"/"} className="btn btn-primary">homepage</Link>
        </div>
    )
  }
}
//adding default and defaultPropsTypes to this Component
NotFound.propTypes = { notfound: React.PropTypes.string.isRequired }
NotFound.defaultProps = { notfound: 'F0UR 04!' }

export default NotFound;
