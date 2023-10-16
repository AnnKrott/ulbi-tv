import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const PrivateRoutes = [
    { path: '/about', elem: <About />, exact: true },
    { path: '/posts', elem: <Posts />, exact: true },
    { path: '/posts/:id', elem: <PostIdPage />, exact: true },
    { path: '/error', elem: <Error />, exact: true },
]

export const PublicRoutes = [
    { path: '/login', elem: <Login />, exact: true },
    { path: '/error', elem: <Error />, exact: true },
]