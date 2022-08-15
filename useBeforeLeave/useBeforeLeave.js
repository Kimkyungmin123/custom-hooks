
import {useEffect,} from "react";

export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const {
            clientY
        } = event;
        // 마우스 Y좌표를 사용해서 마우스가 위쪽으로 페이지에서 벗어날 때만
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    if (typeof onBefore !== "function") {
        return;
    }
};



// function App() {
//     const begForLife = () => console.log("Plz don't leave");
//     useBeforeLeave(begForLife);

//     return ( <
//         div className = "App" >
//         <
//         h1 > Hello < /h1> <
//         /div>
//     );
// }
