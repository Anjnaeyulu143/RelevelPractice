import { Button } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './Pages/AboutUs';
import { Book } from './Pages/Book';
import { BooksList } from './Pages/BooksList';
import { Header } from './Pages/Header';
import { Home } from './Pages/Home';

import { Profile } from './Pages/Profile';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";


function App() {

  const client = new QueryClient();

  const [toggle,setToggle] = useState(false)

  return (
    <QueryClientProvider client={client}>
        <BrowserRouter>
        <div>
        <Header/>
        <Button variant="outlined" onClick = {() => setToggle(!toggle)}>{toggle?"Log in": "Log Out"}</Button>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/profile" element={<Profile toggle={toggle}/>}/>
            <Route path="/books" element={<BooksList/>}/>
            <Route path="/books/:id" element={<Book/>}/>
        </Routes>
        </div>
    </BrowserRouter>  
    </QueryClientProvider>
  );
}

export default App;
