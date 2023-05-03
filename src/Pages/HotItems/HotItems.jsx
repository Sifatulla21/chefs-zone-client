import React, { useEffect, useState } from 'react';

const HotItems = () => {
    const [hotItems, setHotItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hot')
            .then(res => res.json())
            .then(data => setHotItems(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div>
            <h1>Hot Items</h1>
            {
               hotItems.map(item=><div className="pt-3 " key={item.id}>

                    <img style={{height:'200px',width:'200px'}} src={item.image} alt="" />
               </div>) 
            }
        </div>
    );
};

export default HotItems;