import { useState } from "react";

const countries=[
    {name:"Bangladesh",value:"BN",cities:["Dhaka","Barisal"]},
    {name:"India",value:"IN",cities:["delhi","Mumbai"]},
    {name:"Pakistan",value:"PK",cities:["Lahore","Karachi"]},
]
const SelectDivision = () => {
 const [indexValue,setIndexValue]=useState(null)
 const filterValue=countries.find(country=> country.value===indexValue)
 console.log(indexValue);
    return (
        <div className="mt-10">
            <h1 className="mt-5 text-center font-bold text-5xl">Select City</h1>
            <div className="flex justify-center mt-5">
                <select name="" id="" onChange={(e)=>setIndexValue(e.target.value)}>
                 <option value="" >Select Country</option>
                {countries.map((country,index)=><option 
                key={index} value={country.value}>{country.name}</option>)}
                </select>

                { filterValue? <select>
                    {filterValue.cities.map(city=><option key={city} value={city}>{city}</option>)}
                </select>:""}
            </div>
        </div>
    );
};

export default SelectDivision;