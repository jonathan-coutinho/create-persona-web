import React from 'react'
import { BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from "./pages/Home"
import UserForm from './pages/Userform'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path exact = "/" component = {Home}></Route>
                <Route path = "/user" component = {UserForm}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes