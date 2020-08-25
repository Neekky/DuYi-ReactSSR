import { useState, useEffect } from 'react'
import Head from 'next/head'

export default () => {
	console.log('home 主页渲染了')
	const [advs, setAdvs] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setAdvs([
				{
					name: '百度',
					link: 'www.baidu.com'
				},
				{
					name: '新浪',
					link: 'www.sina.com'
				},
				{
					name: '渡一',
					link: 'duyiedu.com'
				}
			])
		}, 1000)
	}, [])
	return (<div>
		<Head>
			<title>啊哈哈哈</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div>
			<h1>首页信息</h1>
		</div>
		<ul>
			<li>
				{advs.map(adv => (
					<a href={adv.link} target="_blank">
						{adv.name}
					</a>
				))}
			</li>
		</ul>
	</div>);
}
