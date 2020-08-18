import React from 'react';
import App from './App';
import ReactDom from 'react-dom/server';
import getHTML from './getHTML';

export default (req, res) => {
    console.log(req.path, 'req');
    const context = {};
    const conponentHTML = ReactDom.renderToString(<App location={req.path} context={context} />);
    res.send(getHTML(conponentHTML));
}