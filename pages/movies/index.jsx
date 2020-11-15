import Head from 'next/head'
import { getMovies } from '../../services/movieServices'

export default () => {
  console.log('movie render了')
  getMovies().then(res => {
    console.log(res, '看结果');
  })
  return (
    <div>
      <Head>
        <title>电影管理页面</title>
      </Head>
      <h1>电影页</h1>
    </div>
  )
}
