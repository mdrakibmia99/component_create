
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
 const Test = ({selectedTitleTable,setSelectedTitleTable}) => {
  const [state, setState] = useState(selectedTitleTable);

  useEffect(()=>{
    setState(selectedTitleTable);
  },[selectedTitleTable])
  // useEffect(()=>{
  //   const result=[]
  //   state.forEach(item=> (typeof item == "object")?result.push( Object.values(item).slice(0,item.length).join('')):result.push(item))
  //   console.log(result,"test reuslt ")
  //   setSelectedTitleTable(result)
  // },[])

  const handleSetValue=(ev)=>{
    setState(ev)
    const result=[]
    ev.forEach(item=> (typeof item == "object")?result.push( Object.values(item).slice(0,item.length).join('')):result.push(item))
    console.log(result,"test reuslt ")
    setSelectedTitleTable(result)
  }
  return (
    <ReactSortable list={state} setList={handleSetValue} 
    className="grid grid-flow-col  bg-slate-400">
      {state.map((item,index) => (
        <th key={index} className="w-[300px] border-r-2 cursor-move">{item}</th>
        ))}
        <div>
  
      </div>
    </ReactSortable>
  );
};
export default Test;