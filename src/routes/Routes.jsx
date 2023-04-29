import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../layouts/NewsLayOut";
import News from "../pages/News/News";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import TearmsConditions from "../pages/Login/TearmsConditions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-dragon-server-2fyzzn35w-ijazhossain.vercel.app/categories/${params.id}`)
            }

        ]
    },
    {
        path: 'news',
        element: <NewsLayOut></NewsLayOut>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://news-dragon-server-2fyzzn35w-ijazhossain.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'register',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: '/termsConditions',
        element: <TearmsConditions></TearmsConditions>,


    }
])
export default router;