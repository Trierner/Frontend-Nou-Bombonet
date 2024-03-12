import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ecommerce from '../pages/e-commerce';
import Banco from '../pages/banco';
import Blog from '../pages/blog';
import Calendario from '../pages/calendario';
import Chat from '../pages/chat';

function Dashboard() {
    return (
        <div className="dashboard">
            <Routes>
                <Route path="e-commerce" element={<Ecommerce />} />
                <Route path="banco" element={<Banco />} />
                <Route path="blog" element={<Blog />} />
                <Route path="calendario" element={<Calendario />} />
                <Route path="chat" element={<Chat />} />
            </Routes>
        </div>
    );
}

export default Dashboard;