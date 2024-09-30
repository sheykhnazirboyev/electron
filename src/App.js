import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/user/Home';
import SingleProduct from './Pages/user/SingleProduct';
import Shop from './Pages/user/Shop';
import Cart from './Pages/user/Cart';
import Dashboard from './Pages/admin/Home';
import Profile from './Pages/admin/Profile';
import ProductAll from './Pages/admin/ProductAll';
import ProductCreate from './Pages/admin/ProductCreate';
import CategoryAll from './Pages/admin/CategoryAll';
import CategoryCreate from './Pages/admin/CategoryCreate';

function App() {
  return (
    <div className = "App">
		<Switch>
			  <Route exact  path = "/" component = {Home} />
        	  <Route exact path = "/single-product/:id"  component = {SingleProduct} />
			  <Route exact path = "/shop" component = {Shop} />
			  <Route exact path = "/cart" component = {Cart} />
			  <Route exact path = "/admin" component = {Dashboard} />
			  <Route exact path = "/admin/profile" component = {Profile} />
			  <Route exact path = "/admin/product/all" component = {ProductAll} />
			  <Route exact path = "/admin/product/create" component = {ProductCreate} />
			  <Route exact path = "/admin/category/all" component = {CategoryAll} />
			  <Route exact path = "/admin/category/create" component = {CategoryCreate} />
		</Switch>
    </div>
  );
}

export default App;
