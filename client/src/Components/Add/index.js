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
  state = {
    open: false
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  close = () => this.setState({open: false})

  render() {
    const {open, closeOnEscape, closeOnDimmerClick} = this.state

    return (<Container text>
      <Header as='h2'>
        <hr></hr>
      </Header>
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>
          No Close on Dimmer Click
        </Button>

        <Modal open={open} closeOnEscape={closeOnEscape} closeOnDimmerClick={closeOnDimmerClick} onClose={this.close}>
          <Modal.Header>Fill Your Credetials
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>User Input</label>
                <input/>
              </Form.Field>
              <Form.Field>
                <TextArea placeholder='Tell us more' style={{
                    minHeight: 100
                  }}/>
              </Form.Field>

            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button onClick={this.close} positive labelPosition='right' icon='checkmark' content='Yes'/>
          </Modal.Actions>
        </Modal>
      </div>
    </Container>);
  }
}
