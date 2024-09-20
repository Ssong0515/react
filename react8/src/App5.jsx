import Layout2 from "./components/Layout2.jsx";
import useThemeStore from "./stores/ThemeStore.jsx";
import useMemberStore from "./stores/MemberStore.jsx";
import {useCallback, useEffect} from "react";

function App5(){
    const {setTheme} = useThemeStore();
    const {setMember} = useMemberStore();

    // useEffect와 의존성 배열에 수정용 함수명을 입력하여 수정되는 것을 리액트가 확인 할 수 있도록 해야함
    // useEffect(() => {
    //     setTheme('warning');
    //     setMember('닝닝');
    // }, [setTheme, setMember])

    // useMemo, useCallback 훅을 사용하여 zustand 객체를 메모이제이션 하여 사용하는 것이 좋음
    const memoSetTheme = useCallback(() => {
        setTheme(`info`);
    }, [setTheme])

    const memoSetMember = useCallback(() => {
        setTheme(`아이유`);
    }, [setTheme])

    useEffect(() => {
        memoSetTheme();
        memoSetMember();
    }, [memoSetTheme, memoSetMember]);
    
    return (
        <Layout2/>
    );
}

export default App5;