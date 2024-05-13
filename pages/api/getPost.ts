export default function handler(res: any, req: any): any {
    if (req.method === 'GET') {
        res.status(200).json('asdadsa')

    } else if (req.method === 'POST') {
        let comment = req.body.params;
        res.status(200).json(comment)
    }
}