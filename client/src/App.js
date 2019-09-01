import React, {Component} from 'react';
import AddForm from './Components/Add';
import ListForm from './Components/Notes';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default class App extends Component {
  render(){
    return (
      <React.Fragment>
        <AddForm/>

        <ListForm/>
      </React.Fragment>
    );
  }
}
