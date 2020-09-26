
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App () {
  return (
    
  <Router>
<div>
<p>Google API Book Search</p>
      <Nav>
        <NavItem>
          <NavLink className="nav" href="/">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/saved">Saved</NavLink>
        </NavItem>
      </Nav>
      <hr />
     
<Switch>
<Route exact path="/" component={Search} />
<Route path="/saved" component={Saved} />
</Switch>
</div>
</Router>
  )
}

export default App