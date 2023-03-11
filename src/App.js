import { Route, Routes } from 'react-router-dom'
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage"
import CommentsPage from "./pages/CommentsPage/CommentsPage"
import HomePage from "./pages/HomePage/HomePage"
import PostsPage from "./pages/PostsPage/PostsPage"
import UsersPage from "./pages/UserPage/UsersPage"
import Navigation from './components/Navigation/Navigation'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/albums' element={<AlbumsPage />} />
                <Route path='/comments' element={<CommentsPage />} />
                <Route path='/posts' element={<PostsPage />} />
                <Route path='/users' element={<UsersPage />} />
            </Routes>
        </div>
    ) 
}

export default App