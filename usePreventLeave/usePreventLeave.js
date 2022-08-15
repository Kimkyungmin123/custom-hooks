export const usePreventLeave=()=>{
    const listener = (event)=>{
    event.preventDefault();
    event.returnValue="";
    }
    const enablePrevent = ()=> window.addEventListener("beforeunload",listener);
    const disablePrevent = ()=> window.removeEventListener("beforeunload",listener);

    return {enablePrevent, disablePrevent};
};

// event.preventDefault(): 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.

// beforeunload:창이 리소스에 거의 도달할 때 발생

// function App() {
//   const {enablePrevent,disablePrevent} = usePreventLeave();
//   return (
//     <div className="App" >
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
    
//   );
// }


// Protect버튼 클릭하고 페이지 나가거나 새로고침하면 경고팝업 뜸
