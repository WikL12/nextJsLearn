import Link from "next/link";
import { useRouter } from "next/router";
const PerRending =({data}:any):any=>{

    const route = useRouter();
    const goto = ():void=>{
        route.push('/profile')
    }
    return <>
        <Link href='/about'>
            <button>去/About</button>
        </Link>
        <Link href='/about' replace>
            <button>去/About 但是是replace</button>
        </Link>
        <button onClick={goto}>点击我去/Profile</button>
        {data.map((x:any)=><>
            <div key={x.id} style={{marginTop:'20px'}}>
                <li>{x.name}</li>
                <li>{x.username}</li>
                <li>{x.email}</li>
                <li>{x.phone}</li>
            </div>
        </>)}
        </>
}
export default PerRending
// 预渲染，等到接口请求完成并且页面渲染好后再交给浏览器，提升性能
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return {
        props:{
            data:data
        }
    }
}