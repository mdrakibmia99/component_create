import { useEffect, useState } from "react";
import Table from "./Table";

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
  console.log(data)
  return (
    <div>
      <Table data={data}/> 

  
    </div>
  );
};

export default SEOHomePage;