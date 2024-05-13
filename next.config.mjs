/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async ()=>{
        return [
            {
                source:'/about', //原路由
                destination:'/', //重定向路由
                permanent:false //是否永久重定向
            },
        ]
    },
};

export default nextConfig;
