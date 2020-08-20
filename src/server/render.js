import React from 'react';
import App from './App';
import ReactDom from 'react-dom/server';
import getHTML from './getHTML';
import loadData from './loadData';
import makeStore from '../store';

export default async (req, res) => {
    const context = {};
    const store = makeStore();
    // 加载数据到仓库
    // 调用对应组件的loadData
    await loadData(req.path, store);

    // 渲染组件
    const conponentHTML = ReactDom.renderToString(<App store={store} location={req.path} context={context} />);
    if(context.url) {
        res.redirect(301,context.url);
        return;
    }
    context.resCode && res.status(context.resCode);
    res.send(getHTML(conponentHTML, req.path, store));
}