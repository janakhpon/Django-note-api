import React  from 'react';
import {
  Modal, Button, Icon, Checkbox, Table, Form,
  TextArea
} from 'semantic-ui-react';
import Moment from 'react-moment';
import { updateNote, delNote, getNotes } from '../../Fetch';
import './index.css';


export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      open: false,
      id: props.id,
      title: props.title,
      content: props.content,
      time: props.time

    }

  }

  handleUpdate = (e) => {
    e.preventDefault();

    updateNote(this.state, this.state.id);

    this.setState({
      open:false
    })

  }

  handleDelete = (e) => {
    e.preventDefault();
    delNote(this.state.id);
    this.getData();
  }

  async getData(){
    await getNotes();
  }


  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Table.Row>
        <Modal size='small' open={this.state.open} >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>User Input</label>
                <input name='title' onChange={e => { this.setState({ 'title': e.target.value }) }} value={this.state.title} />
              </Form.Field>
              <Form.Field>
                <TextArea name='content' onChange={e => { this.setState({ 'content': e.target.value }) }} value={this.state.content} style={{
                  minHeight: 100
                }} />
              </Form.Field>

            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.setState({ open: false })}>No</Button>
            <Button
              positive
              onClick={this.handleUpdate}
              icon='checkmark'
              labelPosition='right'
              content='update'
            />
          </Modal.Actions>
        </Modal>
        <Table.Cell>{this.state.id}</Table.Cell>
        <Table.Cell>{this.state.title}
        </Table.Cell>
        <Table.Cell>{this.state.content}
        </Table.Cell>
        <Table.Cell>

          <Moment fromNow ago>{this.state.time}</Moment> ago
      </Table.Cell>
        <Table.Cell>
          <Button icon labelPosition='left' primary onClick={() => this.setState({ open: true })}>
            <Icon name='pencil alternate' />
            EDIT
    </Button>
        </Table.Cell>
        <Table.Cell collapsing className="changeme">
          <Checkbox slider onChange={this.handleDelete} />
        </Table.Cell>
      </Table.Row>
    );
  }
}
