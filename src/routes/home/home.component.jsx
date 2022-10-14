
import Directory from '../../component/directory/directory.component';
// tell parent element Home where to put child page element Shop
import { Outlet } from 'react-router-dom';
// Wherever you place component <Outlet /> in the parent component home's render session which is within return()
// is where the child page component will be shown
import React from 'react';

const Home = () =>  {
  const categories = [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
    


  // note 1
  // {categories.map((var) => {...})}, var is each element in categories that contains id and title
  // To deconstruct it, {title} means get the value of key = title in each var in categories


  // Note 2, syntac
  // {var.map((v) => ( ..... ))}

  // Note 3, build a CategoryItem external component
  // Replace it here with <CategoryItem/>
  // When we build CategoryItem, we set up to require one prop that is category
  // key can be used as additional prop without setting up in this component??

  return (
    <div>
        <Outlet /> 
        <Directory categories={categories} />

    </div>
  );
};


export default Home;
