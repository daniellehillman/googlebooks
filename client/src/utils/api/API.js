import axios from 'axios'

const API = {
  getBook: search => axios.get(`/api/google/${search}`),

  getSavedBook: () => axios.get('/api/book'),

  // passing media through to post 
  saveBook: book => axios.post('/api/book', book),

  // deleting the media with that id

  deleteBook: id => axios.delete(`/api/book/${id}`)
}

export default API
