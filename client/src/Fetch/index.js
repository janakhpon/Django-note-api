const url = 'http://127.0.0.1:8000/api/notes/';

export const getNotes = async () => {
  return fetch(url, {})
  .then(res => res.json() )
  .then(data => {
    return data
  });
}




export const addNote = (note) => {
  fetch(url, {
    method: 'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(note)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });

  return note;
}


export const updateNote = (note, id) => {
  fetch(url+id+'/', {
    method: 'PUT',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(note)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });

  return note;
}


export const delNote = (id) => {
  fetch(url+id+'/', {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });

}
