import React, { useState } from 'react';
import {
  Modal, Button, Checkbox, Table, Form,
  TextArea
} from 'semantic-ui-react';
import Moment from 'react-moment';
import './index.css';

const ListItem = ({ title, content, id, time }) => {
  const [open, setOpen] = useState(false);


  return (
    <Table.Row>
      <Modal size='small' open={open} >
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>User Input</label>
              <input value={title} />
            </Form.Field>
            <Form.Field>
              <TextArea value={content} style={{
                minHeight: 100
              }} />
            </Form.Field>

          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>No</Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes'
          />
        </Modal.Actions>
      </Modal>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{title}
      </Table.Cell>
      <Table.Cell>{content}
      </Table.Cell>
      <Table.Cell>

        <Moment fromNow ago>{time}</Moment>
      </Table.Cell>
      <Table.Cell>
        <Button primary onClick={() => setOpen(true)}>Small</Button>
      </Table.Cell>
      <Table.Cell collapsing className="changeme">
        <Checkbox slider />
      </Table.Cell>
    </Table.Row>
  );

}

export default ListItem;