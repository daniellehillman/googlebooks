import React, { useState } from 'react'
import Context from '../../utils/Context'
import Form from '../../components/Form'
import Book from '../../components/Book'
import API from '../../utils/api'
import Typography from '@material-ui/core/Typography'


const Search = () => {

    const [bookState, setBookState] = useState({
        search: '', 
        book: []
      })

      bookState.handleInputChange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value })
      }

      bookState.handleSearchGoogle = event => {
        event.preventDefault()
        API.getBook(bookState.search)
          .then(({ data }) => {
            setBookState({ ...bookState, book: data, search: '' })
          })
          .catch(err => console.error(err))
      
      }

      bookState.handleSaveBook = googleId => {
        const saveBook = bookState.book.filter(x => x.googleId === googleId)[0]
        API.saveBook(saveBook)
          .then(() => {
            const book = bookState.book.filter(x => x.googleId !== googleId)
            setBookState({ ...bookState, book })
          })
      }

    return (
        <>
        <hr />
        <Typography variant="h6">
          Search for Books on Google
        </Typography>
        <Context.Provider value={bookState}>
        <Form />
        {
          bookState.book.length > 0 ? (
            bookState.book.map(book => (
              <Book
                key={book.googleId}
                book={book}
                handleSaveBook={bookState.handleSaveBook} />
            ))
          ) : null
        }
        </Context.Provider>
      </>
    )
  }
  
  export default Search