// 守卫路由，可以获取所有路由参数

export default function handler(req,res){
    const params = req.query.params;
    let comment = params;
    res.status(200).json({comment})
}