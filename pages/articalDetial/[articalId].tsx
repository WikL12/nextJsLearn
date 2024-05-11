import { notFound } from "next/navigation"

export default function ArticalDetial({ artical }) {
    return (
        <div>
            <h1>{artical.title}</h1>
            <p>{artical.body}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const id = context.params.articalId
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const articals = await res.json()

     // 如果查询的数据是错的或者没有，那么返回404页面
     if(!articals){
        return {
         notFound:true
        } 
     }
    return {
        props: {
            artical: articals
        }
    }
  
}

// 告诉nextjs这个动态的articalId可能会传什么值，以避免不知道要穿什么值报错
export async function getStaticPaths() {
   
    return {
        // 这个paths也可以动态生成
        paths:[
            {params:{articalId:'1'}},
            {params:{articalId:'2'}},
            {params:{articalId:'3'}},
        ],
        // 如果为false，那么任何不在paths里的都会返回404
        // 如果为true，那么任何不在paths里的都会返回fallback指定的组件，然后再进行查询并生成页面，如果下一次再次访问则返回生成好的页面
        // 如果设置为blocking ，那么任何不在paths里的路径都会正常走，但是会在浏览器里发请求，等待请求完成并渲染页面，在下一次访问时直接返回生成好的页面
        fallback: false
    }
}
