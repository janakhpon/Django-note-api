import React from 'react';
import {Button, Checkbox, Table} from 'semantic-ui-react';
import Moment from 'react-moment';
import './index.css';

const ListItem = ({title, content, id, time}) => {


    return (
          <Table.Row>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{title}
            </Table.Cell>
            <Table.Cell>{content}
            </Table.Cell>
            <Table.Cell>

              <Moment fromNow ago>{time}</Moment>
            </Table.Cell>
            <Table.Cell>
              <Button primary size='small'>VIEW</Button>
            </Table.Cell>
            <Table.Cell collapsing className="changeme">
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
        );

}

export default ListItem;