import React, {Component} from 'react';
import {Container, Button, Checkbox, Table} from 'semantic-ui-react';

export default class ListForm extends Component {
  render() {
    return (<Container text="text">
      <hr/>
      <hr/>
      <Table compact="compact" celled="celled" definition="definition">
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
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>meet
            </Table.Cell>
            <Table.Cell>watch the rambo last blood
            </Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>
              <Button primary="primary" size='small'>VIEW</Button>
            </Table.Cell>
            <Table.Cell collapsing="collapsing">
              <Checkbox slider="slider"/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>);
  }
}
