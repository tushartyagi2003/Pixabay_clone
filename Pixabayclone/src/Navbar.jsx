import React, {useContext} from "react";
import PixabayContext from "./PixabayContext";

export const Navbar = () => {

    const { fetchImagebycategory, setQuery } = useContext(PixabayContext);
    
  return (
    <>
  
    <div className="container text-center">
      <button onClick={()=>fetchImagebycategory("nature")} type="button"  className="btn btn-outline-primary mx-3  my-3">
        Nature
      </button>
      <button  onClick={()=>fetchImagebycategory("science")}  type="button" className="btn btn-outline-warning mx-3">
        Science
      </button>
      <button  onClick={()=>fetchImagebycategory("computer")}  type="button" className="btn btn-outline-success mx-3">
        Computer
      </button>
      <button  onClick={()=>fetchImagebycategory("buildings")}  type="button" className="btn btn-outline-info mx-3">
        Buildings
      </button>
      <button  onClick={()=>fetchImagebycategory("sports")}  type="button" className="btn btn-outline-warning mx-3">
        Sports
      </button>
      <button  onClick={()=>fetchImagebycategory("transportation")}  type="button" className="btn btn-outline-info mx-3">
        Transpotataion
      </button>
      <button  onClick={()=>fetchImagebycategory("travel")}  type="button" className="btn btn-outline-light mx-3">
        Travel
      </button>
      <button  onClick={()=>fetchImagebycategory("food")}  type="button" className="btn btn-outline-dark mx-3">
        Food
      </button>
    </div>

    <div className="container " style={{width:'800px'}}>
        <input type="text" onChange={(e)=>setQuery(e.target.value)}  className="form-control bg-dark text-light" />
    </div>
    </>
  );
};
