import React, {Component} from 'react';
import AddForm from './Components/Add';
import ListForm from './Components/Notes';
import {fetchNotes} from './Fetch';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      notes: [],
      note:{},
      current_note_id: 0,
      is_creating: true,
      is_fetching: true,
    }



  }


    async getData() {
      let data = await fetchNotes();
      this.setState({notes: data, is_fetching: false});
    }

    async handleItemClick(id) {

    }

    handleAddNote() {

    }



    handleData(data) {

    }

    handleOnChange(e) {

    }


  componentDidMount(){

  }


  render(){
    return (
      <React.Fragment>
        <AddForm/>

        <ListForm/>
      </React.Fragment>
    );
  }
}
