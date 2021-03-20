import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {AboutPage, CartPage, CheckoutPage, HomePage, ErrorPage, ProductsPage, SingleProductPage} from './pages'
//import {AboutPage, CartPage, CheckoutPage, HomePage, ErrorPage, PrivateRoute, ProductsPage, SingleProductPage} from './pages'


function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/about'><AboutPage/></Route>
        <Route exact path='/cart'><CartPage/></Route>
        <Route exact path='/products'><ProductsPage/></Route>
        <Route exact path='/products/:id' children={<SingleProductPage/>}/>
        <Route exact path='/checkout'>
          {/*<PrivateRoute>*/}
            < CheckoutPage/>
          {/*</PrivateRoute>*/}
        </Route>
        <Route  path='/*'><ErrorPage/></Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
