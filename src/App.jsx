// import { useEffect } from "react"

// function App() {
  
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products/1")
//     .then(res=>res.json())
//     .then(json=>console.log(json))
//     .catch(console.error())
//   },[])
//   return (
//     <div>
//       <h1>go to co console</h1>
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <li key={product.id} className="product-card" style={styles.productCard}>
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// CSS styles
const styles = {
  productCard: {
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    maxWidth: '300px',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
};

export default App;
