import { useEffect, useRef, useState } from "react";

const useScroll = ()=>{
    const [state, setState] = useState({
        x:0,
        y:0
    });
    
    const onScroll = (event)=>{
        setState({y:window.scrollY, x: window.scrollX}) ;
    }

    useEffect(()=>{
        // 이벤트 추가했으면 같은 이름과 같은 handler로 지워야 함.

        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll); 

    }, [])
    return state;
}


export default useScroll;


// 유저가 스크롤 해서 무언갈 지나쳤을 때 색상을 바꾸거나, 무엇이든지 할 필요가 있음.



// import useScroll from './Hook.js';

// function App() {
//   const {y} = useScroll();
//   return (
//     <div  className='App' style={{height:"1000vh"}}>
//       <h1 style={{position:'fixed' ,color: y >100 ? "red":"blue"}}>Hello</h1>
//     </div>
//   );
// }

// export default App;
