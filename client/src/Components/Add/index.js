import React, {Component} from 'react';
import {
  Container,
  Header,
  Button,
  Modal,
  Form,
  TextArea
} from 'semantic-ui-react';

export default class AddForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title:'',
      content:''
    }
  }




  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  close = () => this.setState({open: false})

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSave(this.state);

    this.setState({
      title: '',
      content: ''
    })

    this.close();


  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    const {open, closeOnEscape, closeOnDimmerClick} = this.state

    return (<Container text>
      <Header as='h2'>
        <hr></hr>
      </Header>
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>
         new task
        </Button>

        <Modal open={open} closeOnEscape={closeOnEscape} closeOnDimmerClick={closeOnDimmerClick} onClose={this.close}>
          <Modal.Header>Fill Your Credetials
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>User Input</label>
                <input name='title' value={this.state.title} onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <TextArea placeholder='Tell us more' style={{
                    minHeight: 100
                  }} name='content' value={this.state.content} onChange={this.onChange} />
              </Form.Field>

            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button onClick={this.handleSubmit} positive labelPosition='right' icon='checkmark' content='Yes'/>
          </Modal.Actions>
        </Modal>
      </div>
    </Container>);
  }
}
