import { useState } from "react";

const Accordian = () => {
    const allData=[
        {id:1,title:"Title 1",description:"description 1"},
        {id:2,title:"Title 2",description:"description 2"},
        {id:3,title:"Title 3",description:"description 3"},
        {id:4,title:"Title 3",description:"description 3"},
        {id:5,title:"Title 3",description:"description 3"},
        {id:6,title:"Title 3",description:"description 3"}
    ]

    const [open,setOpen]=useState([]);
    const [checkMultiple,setCheckMultiple]=useState(false)
    
    const handleAccordion=(id)=>{
      
        const isValueInArray= open.includes(id);
        const filter=open.filter(value=>value!=id);
        if(isValueInArray){
            setOpen(filter)
        }else{

            if(checkMultiple){
                setOpen([...open,id])
            }else{
                setOpen([id])
            }
            
        } 
    }
    console.log(checkMultiple,open)
    return (
        <div>
            <h1 className="mt-5 text-5xl text-center font-bold"> Accordion</h1>
            <div 
           
            className="flex justify-center text-2xl gap-3">
                <input  onClick={()=>{setCheckMultiple(!checkMultiple);setOpen([])}} type="checkbox" id="check" /> <label htmlFor="check">Open multiple  Accordion</label>
            </div>
          <div className="max-w-3xl border mx-auto transition-all duration-1000 ease-in-out">
            {allData.map(data=>(<div className="my-3" key={data.id}>
               <div
                onClick={()=>handleAccordion(data.id)}
                className="flex px-3 py-2 justify-between  bg-slate-500 text-white transition-all duration-1000 ease-in-out">
                <h1>{data.title}</h1>
                {open.includes(data.id)? <span>-</span>: <span>+</span>}
               
               </div>
               {
                open.includes(data.id)? <div className="px-4 bg-slate-300 transition-all duration-1000 ease-in-out">{data.description}</div>:""
               }
              
            </div>))}
          </div>
        </div>
    );
};

export default Accordian;