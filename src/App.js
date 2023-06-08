import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import supabase from './supabaseClient';



//make 3 buttons
//each button toggle a different filter
//make a query to database to get the data
//filter on accessibility options
//filter on price
//filter on cuisine

function App() {

const [restaurants, setRestaurants] = useState(null);
const [fetchError, setFetchError] = useState(null);
const [filter, setFilter] = useState("Japanese");
const [filter2, setFilter2] = useState(true);

const handleClickCuisine = async (type) => {
  setFilter(type)
}
const handleClickWheelchair = async (type) => {
  setFilter2(!filter2)
}

  useEffect (() => {

    const fetchRestaurants = async () => {

      const { data, error } = await supabase
        .from("restaurants")
        .select()
        .eq("cuisine_type", filter)
        .eq("wheelchair_access", filter2)
    
      if (error) {  
        setFetchError("could not fetch restaurants")
       console.log(error)
       setRestaurants(null)
      }
    
      if (data) {
        setRestaurants(data)
        setFetchError(null)
      }
    }
    fetchRestaurants();
    }, [filter, filter2])
  



  return (
    <div className="App">
      <button onClick={handleClickWheelchair}>Wheelchair Access</button>
      <button onClick={() => handleClickCuisine("Italian")}>Italian</button>
      <button onClick={() => handleClickCuisine("French")}>French</button>
      <button onClick={() => handleClickCuisine("Mexican")}>Mexican</button>
      {restaurants && restaurants.map(restaurant => {
  return <p>{restaurant.venue_name}</p>
  })}
   
        
      
    </div>
  );
}

export default App;
