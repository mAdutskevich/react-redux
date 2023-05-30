import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Root } from 'components/templates/Root';

function App() {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

export default App;
