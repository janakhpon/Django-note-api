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
  state = { modalOpen: false }

handleOpen = () => this.setState({ modalOpen: true })

handleClose = () => this.setState({ modalOpen: false })

  render() {
    const {open, closeOnEscape, closeOnDimmerClick} = this.state

    return (<Container text="text">
      <Header as='h2'>
        <hr></hr>
      </Header>
      <div>

        <Modal trigger={<Button onClick = {
            this.handleOpen
          } > Show Modal</Button>} open={this.state.modalOpen} onClose={this.handleClose} basic="basic" size='small'>
          <Header icon='browser' content='Cookies policy'/>
          <Modal.Content>
            <h3>This website uses cookies to ensure the best user experience.</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted="inverted">
              <Icon name='checkmark'/>
              Got it
            </Button>
          </Modal.Actions>
        </Modal>

      </div>
    </Container>);
  }
}
