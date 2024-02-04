import { useEffect, useState } from "react";
import Table from "./Table";
import SEOBarChart from "../BarchartCreate/SEOBarChart";

const SEOHomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/tableData.json');
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  const numRows = 10;

  if (loading) {
    return <h1>Loading...</h1>
  }
  // console.log(data)
  return (
    <div> 
       <h1 className="text-4xl font-bold text-center">Table column Drag Drop and column title Select/disselect</h1>
      <Table data={data}/> 
      <h1 className="text-4xl font-bold text-center mt-5">Bar Chart</h1>
    <SEOBarChart rawData={data}/>
    </div>
  );
};

export default SEOHomePage;