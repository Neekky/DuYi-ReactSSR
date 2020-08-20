import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <h1>系统管理</h1>
            <nav>
                <Link to='/admin/user'>用户管理</Link>
                <Link to='/admin/system'>系统管理</Link>
            </nav>
        </div>
    )
}
