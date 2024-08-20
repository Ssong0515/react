import Info from "./components/Info.jsx";
import CounterUseEffect from "./components/CounterUseEffect.jsx";
import LifecycleClass from "./components/LifecycleClass.jsx";
import LifecycleFunction from "./components/LifecycleFunction.jsx";
import VolumeControl from "./components/VolumeControl.jsx";
import HookUseMemo from "./components/HookUseMemo.jsx";
import HookUseMemo2 from "./components/HookUseMemo2.jsx";
import HookUseRef from "./components/HookUseRef.jsx";
import Accommodate from "./components/Accommodate.jsx";

function App() {
    return (
        <div className={`container mt-5`}>
            <h3>useState 여러개 사용</h3>
            <Info/>

            <br/><hr/><br/>

            <h3>useEffect 사용하기</h3>
            {/*<CounterUseEffect/>*/}

            <br/><hr/><br/>

            {/*<LifecycleClass/>*/}

            {/*<LifecycleFunction/>*/}

            {/*<VolumeControl/>*/}

            {/*<HookUseMemo/>*/}
            {/*<HookUseMemo2/>*/}

            <h3>UseRef</h3>
            <HookUseRef/>

            <br/><hr/><br/>
            
            <h3>커스텀 훅 사용하기</h3>
            <Accommodate/>
        </div>
    )
}

export default App
