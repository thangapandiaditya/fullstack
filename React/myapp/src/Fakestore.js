import { useState,useEffect } from "react";

function Fakestore(){
    const [getCat,setCat]=useState([]);
    const [getPro,setPro]=useState([]);
    function setCategroy(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(function(res){
            return res.json();
        })
        .then(function(json) {
            json.unshift("All");
            setCat(json);
        });
    
    }
    function load_product(){
        fetch("https://fakestoreapi.com/products")
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            setPro(json);
        })
    }
    
    function select_cat(e){
        if(e.target.value==="All"){
        load_product();
        return;
        }
    
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then(function(res)
        {
            return res.json();
        }
    ).then(function(json){
        setPro(json);
    })
    }

    
     useEffect(() => {
        setCategroy();
        load_product();
        

    }, []);
    return(
        <div className="container-fluid ">
            <header className="bg-black text-white text-center p-3">
                <h1><i className="bi bi-shop"></i> Fakestore</h1>
            </header>
            <div className="container-fluid ">
        <div className="row">
            <div className="col-2 text-white">
                <label htmlFor="cat" className="form-label"><b>Categories</b></label>
                <select className="form-select" id="cat" onChange={select_cat}>
                    {getCat.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                
            
            </div>
            <div className="col-10 m-0 p-0">
                    <h1 className="text-sucess text-center">Products</h1>
                    <hr/>
                    <div className="row">
                        {
                            getPro.map(pro=>
                                <div className="col-4 m-2">
                                    <div className="card">
                                        <img src={pro.image} style={{width:'80%'}}/>
                                        <div className="card-body"><h5>{pro.title}</h5>
                                        <p className="card-text"><b>Price</b>
                                        &#20B9;{pro.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <p><i className="bi bi-star-fill"></i>{pro.rating.rate}&nbsp;{pro.rating.count}</p>

                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                   
            </div>
        </div>
        </div>


        </div>

    );
    }
export default Fakestore;