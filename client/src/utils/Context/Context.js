import React, { createContext } from 'react'

const Context = createContext({
  search: '',
  book: [],
  handleInputChange: () => { },
  handleSearchGoogle: () => { },
  handleSaveBook: () => { }
})

export default Context
