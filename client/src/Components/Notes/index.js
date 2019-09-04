import React from 'react';
import { Container, Table } from 'semantic-ui-react';
import ListItem from '../ListItem';


const ListForm = ({notes}) => {

  let notes_list = notes.map((note, key) => {
    return (
      <ListItem title={note.title} content={note.content} id={note.id} key={key} time={note.updated_at}/>
    )
  })

  return (

    <Container text>
      <hr />
      <hr />
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
          {notes_list}
         
        </Table.Body>
      </Table>
    </Container>

  );
};


export default ListForm;