import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>首页</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        <a>电影</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies/[id]" as="/movies/3">
                        <a>电影详情页</a>
                    </Link>
                </li>
                <li>
                    <button onClick={() => {
                        router.push("/movies/[...argsa]", "/movies/a/b/123/a")
                    }}>
                        跳转到params页面
                        </button>
                </li>
            </ul>
        </div>
    )
}
