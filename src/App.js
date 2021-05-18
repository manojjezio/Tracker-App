import React from 'react';
import './App.css';

// Import pages
import Global from './containers/Global.js';
import Countries from './containers/Countries/Countries';

function App() {
    return(
        <div>
            <Global />
            <Countries />
            
        </div>
    );
}

export default App;