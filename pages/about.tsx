import React, { useDeferredValue, useEffect, useMemo, useReducer, useState, useTransition, useRef, useCallback ,createContext,useContext,memo, forwardRef, useImperativeHandle} from "react"
type countType = string | number | null
const reducerAction = (state: string, action: any): string => {
    switch (action.type ) {
        case 'add':
            return state + '1'
        case 'decreate':
            return state.slice(0, 1)
        default:
            return state
    }
}
const contextValue = createContext('context');
export default function About() {

    const [count, setCount] = useState<countType>(0);
    useEffect(() => {
        console.log('im about')
        console.log(myRef)
    }, []);
    const countSlow = useDeferredValue<countType>(count);
    const addCount = (): void => {
        if (typeof count !== 'number') return;
        startTransition(() => { setCount(count + 1) })
    }
    const [text, dispatchText] = useReducer<(state: string, action: any) => string, string >(reducerAction, '', () => '');
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        if (value == '') {
            return
        }
        dispatchText({ type: 'add' })
    }, [value]);

    const [pending, startTransition] = useTransition();
    const text2 = useMemo(() => {
        console.log('text2')
        return text + '2'
    }, [text])
    const ref = useRef<any>(null);
    const onchage = useCallback<()=>void>(():void => {
        alert(1);
    },[text2])
    const myRef = useRef<any>(null);
    return <>
        <div>about</div>
        <div>{countSlow}</div>
        <button onClick={addCount}>add</button>
        <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} ref={ref}/>
        {text}
        <contextValue.Provider value={'im context provide value'}>
        <Son text={'the son text is passed by Son Childeren'} ref={myRef}>
            <div>son</div>
        </Son>
        </contextValue.Provider>
        
    </>
}
type childenType = {
    children: React.ReactNode
    text: string,
    ref:any,
}
type FatherType = childenType & {
    name:string|number|boolean
}

interface Cat {
    name:string
}
interface Anmail extends Cat {
    age:number
}
// 来玩一个组件传DOM的方法，有意思
const Son = memo(forwardRef(({children,text,}:childenType,ref:any):React.ReactNode=>{
    // useImperativeHandle(ref,()=>{
    //     return {
    //         focus():number{
    //             return 1
    //         }
    //     }
    // })
    const contextValues = useContext(contextValue);
    return <>
        <div ref={ref}>im children</div>
            {children}
            {text}
            <hr />
            {contextValues}
        <div>im children</div>
    </>
}))