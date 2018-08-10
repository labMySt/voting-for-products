import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import gradation from '../gradation'
import Fild from './Fild';

class Groups extends Component {

  render() {
    const id = this.props.match.params.id;

    const listItems = gradation[id].map((group) => {
      if(!group.subgroups)
      return (
        <li>
         <Link to={`${this.props.match.url}/${group.path}`}>
           <span>{group.name}</span>
         </Link>
       </li>
      )
      else {
        const listSubgroups = group.subgroups.map((sub) =>
          <li>
           <Link to={`${this.props.match.url}/${group.path}/${sub.path}`}>
             <span>{sub.name}</span>
           </Link>
         </li>
       )
       return (
         <li>
           <Link to={`${this.props.match.url}/${group.path}`}>
             <span>{group.name}</span>
           </Link>
               <ul>{listSubgroups}</ul>
         </li>
       )
     }
   });

    return (
    <div>
      <div className="groups-list">
        <ul>{listItems}</ul>
      </div>
      <Route path={`${this.props.match.path}/:group/:subgroup?`} component={Fild}/>
    </div>
   );
  }
}

export default Groups;
