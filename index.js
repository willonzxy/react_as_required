/*
 * @Author: willon 
 * @Date: 2019-01-05 14:41:35 
 * @Last Modified by: wilon
 * @Last Modified time: 2019-01-05 18:42:19
 */
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router ,Link,Route} from 'react-router-dom';
import Foo from "./foo.js";
import Loadable from 'react-loadable';
const Loading = (props) => {
    return <div>Loading...</div>
  };
const B = Loadable({
    loader: () => import('./foo.js'),
    loading: Loading,
  })

const App = ()=>{
    return (
        <div>
            this is main.js 
            <Router>
                <div>
                    <Route path="/b" component = {B} />
                    <Link to="/b">to b</Link>
                </div>
            </Router>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'))