// SSR ： 用户发起请求时，nextjs 请求数据并生成HTML，然后返回给浏览器，而不需要让浏览器操作，这样也有利于SEO，更加释放了浏览器性能。

function NewsArticalList({ news }) {
    return <>
        <div>
            <h1>News Artical List</h1>
            {news.map(x=>{
                return <>
                    <h3>{x.title}</h3>
                    <p>{x.body}</p>
                    </>
            })
            }
        </div>
        </>
}

export default NewsArticalList
// 服务端渲染
// getServerSideProps 永远不会在浏览器中出现
// getServerSideProps 在请求页面时执行
// 只能用作预渲染，不能作为请求用户数据使用
export async function getServerSideProps(context:any) {
    // params 为路由传参
    let {params,res,req} = context;
    let cookies = req.headers.cookies;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            news: data
        }
    }
}