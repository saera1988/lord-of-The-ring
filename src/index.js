import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const movie =[

//     <Movie title="The Fellowship of the Ring" hours="2" minutes="58"/>
//     <Movie title="The Two Towers" hours="2" minutes="59"/>
//     <Movie title="The Return of king " hours="3" minutes="21"/>
// ]

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
