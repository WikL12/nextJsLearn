export default function handler(req,res){
    const {deleteItemId} = req.query;
    let comment = [1];
    res.status(200).json({comment})
}