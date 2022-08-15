
import { useState} from "react";

export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) { // Array.isArray() : 배열인지 확인하는 것
        return; // 배열이 아닐때 리턴
    }
    
    return {
        currentItem: allTabs[currentIndex], // currentItem은 allTabs를 가지고 리턴될거고 currentIndex를 인덱스값으로 가짐.
        changeItem: setCurrentIndex
    };
};



// import useTabs from './useTabs.js';

// const content = [{
//   tab: "Section 1",
//   content: "I'm the content of the Section 1"
// },
// {
//   tab: "Section 2",
//   content: "I'm the content of the Section 2"
// }
// ];

// function App() {
//   const {currentItem,changeItem} = useTabs(0, content);
//   return (
//     <div className="App">
//       {content.map((section,index) => (
//         <button key ={index} onClick={()=>changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>
//       {currentItem.content}
//       </div>
//     </div>
//   );
// };


// export default App;

