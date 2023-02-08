import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chalets from '../pages/Chalets';
import Layout from "../containers/Layout";
import AboutUs from '../pages/AboutUs';
import Home from "../pages/Home";
import Error from "../pages/Error";
import '../style/App.scss'
import Information from '../pages/Information';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/chalets' element={<Chalets />} />
                    <Route path='/information/:id' element={<Information />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;