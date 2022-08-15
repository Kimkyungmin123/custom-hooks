

export const useInput = (initialValue, validator) =>{
    const [value, setValue]  = useState(initialValue);
    const onChange = event =>{
        const {
            target : {value}
        } = event ;

        let willUpdate = true;

        if(typeof validator==="function"){  
            willUpdate = validator(value); // value 유효성 검사 (특정문자 쓰기 못하게 하기...등등)
        }
        
        if(willUpdate) {
            setValue(value);
        }  
        
    };
    return {value, onChange};
};


//import useInput from './useInput.js';
// function App() {
//   // const maxLen = value => value.length<= 10;
//   const noneText = value => !value.includes("@"); 
//   const name = useInput("Mr.", noneText);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name}/> {/* value={name.value}  onChange={name.onChange} 대신에 ...name */}
//     </div>
//   );
// }