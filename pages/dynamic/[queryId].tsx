import {useRouter} from 'next/router';
export default function Index() {
    const queryId = useRouter().query.queryId
    return <>
            <div>Index</div>
            <div>my router path is /dynamic/:queryId</div>
            <div>{queryId}</div>
        </>
}