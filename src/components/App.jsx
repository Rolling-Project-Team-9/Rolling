import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout';
import MainPage from '../pages/MainPage';
import ListPage from '../pages/ListPage';
import PostPage from '../pages/PostPage';
import PostIdPage from '../pages/PostIdPage';
import MessagePage from '../pages/MessagePage';
import EditPage from '../pages/EditPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="post">
            <Route index element={<PostPage />} />
            <Route path="id">
              <Route index element={<PostIdPage />} />
              <Route path="message" element={<MessagePage />} />
              <Route path="edit" element={<EditPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
