export const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine); // 기본값으로 navigator.onLine을 설정함으로써 navigator가 온라인인지 아닌지 알수 있게 됨/.(navigator.online은 온or오프라인 T or F 로 밀힘)
    const handleChange = () => {
        if (typeof onchange === "function") {
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);


        };
    }, [])
    return status;
}





// function App() {
//   const handleNetworkChange = (online)=>{
//     console.log(online?"we just went online":"We just offline");
//   }
//   const onLine =useNetwork(handleNetworkChange);

//   return (
//     <div className="App">
//       <h1>{onLine ?"Online" : "Offline"}</h1>
//     </div>
//   );
// }
