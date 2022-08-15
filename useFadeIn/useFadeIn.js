import {
    useEffect,
    useRef
} from "react";

export const useFadeIn = (duration = 1, delay = 0) => {

    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const {
                current
            } = element;
            
             // transition대신 모든 property설정해주기 -> property, duration,timing..등등 (설정해주면 세세해짐.)
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    return {
        ref: element,
        style: {
            opacity: 0
        }
    };
};


// function App() {
//     const fadeInH1 = useFadeIn(1, 2);
//     const fadeInP = useFadeIn(5, 10);
//     return ( 
//         <div className = "App" >
//              <h1 {...fadeInH1}> Hello < /h1>
//              <p {...fadeInP}> lorem inpsum lalala </p>
//         </div>
//     );
// }
