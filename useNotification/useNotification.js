
// NotificationAPI 사용
// hook은 아니지만 유용한 함수 사용 (함수형 프로그래밍)

// 브라우저 알림 허용, window알림 허용 둘다 제대로 실행됨.
const useNotification = (title, options)=>{
    if(!("Notification" in window)){    // window Notification에 접근해야만 함. (window가 아니라면 이브라우저에는 Notification에을 지원하지 않기 때문.-> 그럼 멈춰야 함.)
        return;
    }

    const fireNotif = ()=>{
        // Notification.permission은 읽기 전용. (사용자가 알람 받기를 거부(denied), 허가(granted), default(모든 알람 허용 x)인지 알려줌.)
        // default는 사용자의 선택을 알 수 없어서 브라우저는 value가 denied인 것 처럼 행동할 것... 이라고 적힌게 보임.
        
        
        if(Notification.permission !=="granted"){
            Notification.permission().then(permission=>{
                if(permission==="granted"){
                    new Notification(title,options)
                } else{
                    return;
                }
            });

        }else{
            new Notification(title, options); 
        };  
    };
    return fireNotif;
};


export default useNotification;



// function App() {
//   const triggerNotif = useNotification("Can I steal your bread?", {body:"I love bread don't you?"});
//   return (
//     <div  className='App' style={{height:"1000vh"}}>
//       <button onClick={triggerNotif}>hello</button>
//     </div>

//   );
// }

// export default App;

