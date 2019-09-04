import React, {Component} from 'react';
import {Button, Checkbox, Table} from 'semantic-ui-react';

export default class ListItem extends Component {
  render() {
    return (
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>meet
            </Table.Cell>
            <Table.Cell>watch the rambo last blood
            </Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>
              <Button primary size='small'>VIEW</Button>
            </Table.Cell>
            <Table.Cell collapsing>
              <Checkbox slider/>
            </Table.Cell>
          </Table.Row>
        );
  }
}
