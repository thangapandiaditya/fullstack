import { useEffect, useState } from "react";
// import "./World.css";

function World() {
    const [getcat, setcat] = useState([]);
    const [getpro, setpro] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setcat(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {getcat.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
        </div>
    );
}

export default World;
