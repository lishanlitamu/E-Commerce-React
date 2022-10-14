//import Directory from './component/directory/directory.component';
import { Routes, Route} from "react-router-dom";
// Outlet is used to embed component Home and Shop within Navigation
// Outlet is later removed because we move top-level component Navigation to a dependent file
import React from 'react';
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

// Note 5, what if we wanna have another page with the same navigation bar?
// Use Nested Structure
// The parent element Home will render in the child page /home/shop unless you tell it otherwise
// You need to going to parent element Home and tell it where to put child page element Shop


// Note 6, nest two components as child pages in component Navigation
// <Route Navigation> 
//    <Route Home>
//    <Route Shop>
// </Route>

// Note 7, <Outlet /> is to tell where to place nested components within current component or path
// in <Routes><Route>... here is where to assign a path to each component and set up structure of it. 


// Note 8,  <Route path="home" element={<Home />} />
// The default home page should shows component Home and no need to add postfix "/home" in url
// To do so use index, which means whenever it matches path ="/" it renders component Home
// Therefore no need to say ".../home" to show Home


// Top-level component, Navigation
// Create a folder navigation and a component Navigation in it.
// below component will be deleted, check navigation.component.jsx for codes 


const Shop = () => {
  return <h1>Here to shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = "shop" element={<Shop />} />
        <Route path = "sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

// note 1
  // {categories.map((var) => {...})}, var is each element in categories that contains id and title
  // To deconstruct it, {title} means get the value of key = title in each var in categories

  // Note 2, syntac
  // {var.map((v) => ( ..... ))}

  // Note 3, build a CategoryItem external component
  // Replace it here with <CategoryItem/>
  // When we build CategoryItem, we set up to require one prop that is category
  // key can be used as additional prop without setting up in this component??

  // build a routes/home folder and home.component.jsx to contain whatever was returned here.
  // By doing so, use home component to replace return(...)
  // const categories was deleted too.

  //return (
  //  <Directory categories={categories} />

  //)

  // Note 4
  // Render component <Home /> based on current URL, which is checked by paht = "/home", if it ends with "/home"
  // In our case, now we need to switch to http://localhost:3000/home to show everything we built