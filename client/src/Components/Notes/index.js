import React, {Component} from 'react';
import {Container, Table} from 'semantic-ui-react';
import ListItem from './listitem';

export default class ListForm extends Component {
  render() {
    return (<Container text>
      <hr/>
      <hr/>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>TITLE</Table.HeaderCell>
            <Table.HeaderCell>CONTENT</Table.HeaderCell>
            <Table.HeaderCell>DATE</Table.HeaderCell>
            <Table.HeaderCell>OPTION</Table.HeaderCell>
            <Table.HeaderCell>COMPLETED</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <ListItem/>
        </Table.Body>
      </Table>
    </Container>);
  }
}
