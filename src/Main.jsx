import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './pages/MainPage';
import App from './components/App';
import ListPage from './pages/ListPage';
import PostPage from './pages/PostPage';
import PostViewPage from './pages/PostViewPage';
import MessagePage from './pages/MessagePage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="post">
            <Route index element={<PostPage />} />
            <Route path="id">
              <Route index element={<PostViewPage />} />
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

export default Main;
