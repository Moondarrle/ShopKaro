
import React,{useEffect, useState} from 'react'
import Products from './Products'
import newsapp from './newsapp.jpg'
const MainPage=(props)=> {
    const [articles, setArticles]=useState([]);
    const [api]=useState('https://fakestoreapi.com/products')


    const normal =async()=>{
        try {
            const response = await fetch(api);
            const data = await response.json();
            console.log(data); // Add this line to check the data in the console
            setArticles(data);
            props.loadingBar();
          } catch (error) {
            console.error('Error fetching data:', error);
          }

    }

    const updateState = async () => {
        try {
          const response = await fetch(`${api}/category/${props.category}`);
          const data = await response.json();
          console.log(data);
          setArticles(data);
          props.loadingBar();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
useEffect(()=>{
normal();
},[props.category===""])

useEffect(()=>{
    updateState();
},[props.category])

  return (
    <div>
        
    <div className="row">
    {articles&&articles.map((element) => (
                <div className="col-md-4 mb-4" key={element.id}>
                  <Products
                    title={element.title ? element.title : 'Yha se title gaya'}
                    description={element.description ? element.description : 'empty'}
                    image={element.image ? element.image : newsapp }
                    price={element.price?element.price:"Pata Nahi"}
                    rating={element.rating.rate?element.rating.rate:"khud pata kar le"}
                  />
                </div>
              ))}
    </div>
    </div>
  )
}
export default MainPage;