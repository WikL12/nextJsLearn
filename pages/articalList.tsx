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
        }
    }
}

