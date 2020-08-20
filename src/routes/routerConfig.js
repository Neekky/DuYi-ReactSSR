import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import NotFound from '@/pages/NotFound';
import Front from '@/pages/Front';
import Admin from '@/pages/Admin';
import AdminHome from '@/pages/Admin/home';
import AdminNotFound from '@/pages/Admin/NotFound';
import AdminSystemManage from '@/pages/Admin/systemManage';
import AdminUserManage from '@/pages/Admin/userManage';
import {Redirect} from 'react-router-dom';
import React from 'react';

export default [
    {
        key: 'admin',
        path: '/admin',
        component: Admin,
        routes: [
            {
                path: '/admin/home',
                exact: true,
                component: AdminHome,
                key: 'home'
            },
            {
                path: '/admin/user',
                exact: true,
                component: AdminUserManage,
                key: 'user'
            },
            {
                path: '/admin/system',
                exact: true,
                component: AdminSystemManage,
                key: 'sys'
            },
            {
                component: AdminNotFound,
                key: 'notfound'
            }
        ]
    },
    {
        key: 'front',
        path: '/',
        component: Front,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                key: 'home'
            },
            {
                path: '/movies',
                exact: true,
                component: Movies,
                key: 'movies'
            },
            {
                path: '/temp',
                exact: true,
                component: ()=>{
                    return <Redirect to='/movies' />
                },
                key: 'temp'
            },
            {
                component: NotFound,
                key: 'notfound'
            }
        ]
    }
];