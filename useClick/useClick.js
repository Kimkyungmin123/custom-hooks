
import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef(); // 1) useClick을 사용해서 useRef()를 만들고,
useEffect(() => {
    // useEffect 안에서 할 일은 reference안에 element.current가 있는지 확인하는 것.
    if(typeof onClick!=="function"){
    return;
    }

    // component가 mount되었을 때 eventListner추가. (deps없기 때문에 영원.)
    // componentDidMount때 단한번만 실행 -> Dpes 비워줘서.
    if (element.current) {
      element.current.addEventListener("click", onClick); // 조건 만족되면 Click이벤트 부여.
    }

    // function return. -> componentWillUnMount때 호출
    // ㄴ> component가 mount되지 않았을 때 eventListner가 배치되게 하고 싶지 않기 때문.
    return()=>{ 
    if(element.current){
    element.current.removeEventListener("click", onClick);
    }}
},[]);
  return element; // 2) 같은 reference를 return해줌.

};




// function App() {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// }
// // 3) const title= useClick(); -> 주어진 reference를 title에 줬음.


// // reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법.
// // ㄴ> document.geElementById()를 사용한 것과 동등
