import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import CommentsPage from './pages/CommentsPage/CommentsPage'
import PostsPage from './pages/PostsPage/PostsPage'
import UsersPage from './pages/UsersPage/UsersPage'
import Navigation  from './components/Navigation/Navigation'

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
                <Route path='*' element={
                    <div>
                        <h1>404 Error</h1>
                        <Link to='/'>Back to the main page</Link>
                    </div>
                } />
            </Routes>
        </div>
    ) 
}

export default App