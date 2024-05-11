import Link from "next/link";
export default function ArticalList({articals}:{articals:{}[]}){
    return <>
        <span>i am articalList</span>
        {articals.map(x=>{
            return <>
            <Link href={'/articalDetial/'+x.id} key={x.id}>
            <h1>{x.title}</h1>  
                <h2>{x.body}</h2>
                <h3>{x.id}</h3>
            </Link>
            </>
        })}
    </>
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return {
        props: {
            articals: data
        },
        // ISR 增量静态生成  如果已经build了项目，那么有些旧的数据在改变时，不会改变静态生成的页面，所以我们需要引入增量静态生成，这样可以构建改变的页面而不需要重新构建整个应用
        // 每间隔20s检查一下，然后更新页面
        revaildate:true
    }
}

