import React from 'react'
import { useEffect, useState } from "react";
import './Home.css';

const colors = ['red', 'cyan', 'yellow', 'grey', 'pink'];
function Home() {
  const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://universities.hipolabs.com/search?country=United+States');
            const json = await response.json();
            console.log(json);
            const slicedData = json.slice(0, 9);
            
            setDetails(() => {
                return slicedData.map((university, idx) => {
                    return <div key={idx} className="university-card" style={{ backgroundColor: colors[idx % colors.length] }}>
                        <h3>{university.name}</h3>
                        <p>{university.domains[0]}</p>
                        <p>{university.web_pages}</p>
                    </div>
                });
            })
        }

        fetchData();
    }, []);
  return (
    <div className="container">
    {details}
</div>
  )
}

export default Home