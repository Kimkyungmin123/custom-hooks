
import { useRef} from "react";

const useFullscreen = (callback)=>{

    const element = useRef();
    const runCb = isFull =>{
        if(callback && typeof callback ==="function"){
            callback(isFull);
        }
    }

    const treiggerFull = ()=>{
        if (element.current){
            if(element.current.requestFullscreen){
                element.current.requestFullscreen();
            }else if( element.current.mozRequestFullscreen){    // firefoz -> moz
                element.current.mozRequestFullscreen();
            }else if(element.current.webkitRequestFullscreen){  // opera -> webkit
                element.current.webkitRequestFullscreen();
            }else if(element.current.msRequestFullscreen){  // microsoft -> ms
                element.current.msRequestFullscreen();
            }
            runCb(true);
            }
        }
    ;

    // fullscreen에서 빠져나가기
    const exitFull = ()=>{
        document.exitFullscreen();
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if( document.mozCancelFullscreen){    // firefoz -> moz
            document.mozCancelFullscreen();
        }else if(document.webkitExitFullscreen){  // opera -> webkit
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){  // microsoft -> ms
            document.msExitFullscreen();
        }
        runCb(false);   
    }

    return { element, treiggerFull,exitFull};
};


export default useFullscreen;


// 유저가 스크롤 해서 무언갈 지나쳤을 때 색상을 바꾸거나, 무엇이든지 할 필요가 있음.
// Fullscreen을 요청할 때는  element와 함께 사용하는데, Fullscreen빠져나올때는 document통해서 빠져나옴.


// function App() {
//     const onFulls = (isFull)=>{  // isFull은 boolean
//       console.log(isFull? "We are Full" : "We are small");
//     }
//     const {element, treiggerFull, exitFull} = useFullscreen(onFulls);
  
//     return (
//       <div  className='App' style={{height:"1000vh"}}>
//         <div ref={element}>
//           <img src='https://i.pinimg.com/564x/ee/59/ac/ee59acce4ee4398502956c6f67e4e70f.jpg' />
//           <button onClick={exitFull}>Exit Fullscreen</button>
//         </div>
//         <button onClick={treiggerFull}>Make Fullscreen</button>
//       </div>
  
//     );
//   }