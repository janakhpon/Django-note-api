import React, {Component} from 'react';
import AddForm from './Components/Add';
import ListForm from './Components/Notes';
import {getNotes, addNote} from './Fetch';
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
      let data = await getNotes();
      this.setState({notes: data, is_fetching: false});
      console.log(this.state.notes)
    }

    async handleItemClick(id) {

    }

    async handleAddNote(note) {
      await addNote(note);
      await this.getData();
    }



    handleData(data) {

    }

    handleOnChange(e) {

    }


  componentDidMount(){
    this.getData();
    console.log(this.state.notes);

  }


  render(){
    return (
      <React.Fragment>
        <AddForm handleSave={this.handleAddNote} />

        <ListForm notes={this.state.notes}/>
      </React.Fragment>
    );
  }
}
