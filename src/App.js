import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ReactToTuRail from './contents/ReactToTuRail'
import Navbar from './components/Navbar'
import ReacHook from './contents/ReacHook'
import UseEffectDamo1 from './contents/UseEffectDamo1'
import UseEffectDamo2 from './contents/UseEffectDamo2'
import UseEffectDamo3 from './contents/UseEffectDamo3'
import UseEffectDamo4 from './contents/UseEffectDamo4'
import UserContextDamo1 from './contents/UserContextDamoChild1'

import './App.css'




const App = () => {

  return <>
    <Router>
    <Switch>
      <div className="App">
          <Navbar />
        <Route  path='/ReactTotuRail' >
          {/* // Props */}
          <ReactToTuRail IsShow={true} />
        </Route>
        <Route  path='/ReacHook' >
          <ReacHook />
        </Route>
        <Route  path='/UseEffectDamo1' >
          <UseEffectDamo1 />
        </Route>
        <Route  path='/UseEffectDamo2' >
          <UseEffectDamo2 />
        </Route>
        <Route  path='/UseEffectDamo3' >
          <UseEffectDamo3 />
        </Route>
        <Route  path='/UseEffectDamo4' >
          <UseEffectDamo4 />
        </Route>
        <Route  path='/UserContextDamo1' >
          <UserContextDamo1 />
        </Route>
      </div>
      </Switch>
    </Router>
  </>
}

export default App
