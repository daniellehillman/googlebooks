import React, { useState, useEffect } from 'react'
import API from '../../utils/api'

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleDeleteBook = id => {
    API.deleteSaved(id)
      .then(() => {
        let saved = savedState.saved.filter(saved=> saved._id !== id)
        setSavedState({ ...savedState, saved })
      })
  }

  useEffect(() => {
    API.getSavedBook()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
    <h1>Your saved Movies/TV</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(saved => (
            <div key={saved.apiID}>
              <img src={saved.image} alt={saved.title} />
              <h3>{saved.title}</h3>
              <h4>Authors {saved.authors}</h4>
              <h4>Descriptions {saved.description}</h4>
              <h4> {saved.description}</h4>
              <h5>apiID {saved.apiID}</h5>
              <button onClick={() => savedState.handleDeleteBook(saved._id)}>Delete</button>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved