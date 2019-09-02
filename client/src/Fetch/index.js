const url = 'http://127.0.0.1:8000/api/notes/';

export const getNotes = async () => {
  return fetch(url, {})
  .then(res => res.json() )
  .then(data => {
    return data
  });
}
