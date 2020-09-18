import React from 'react';
import './App.css';
import EmailPanel from "./components/EmailPanel";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <h1>CatchAll Inbox</h1>

                <EmailPanel/>

            </header>
        </div>);
}

export default App;

