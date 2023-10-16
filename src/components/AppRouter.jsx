import React, { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../router";
import { AuthContext } from "../context";
import MyLoader from "./UI/Loader/MyLoader";


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <MyLoader />
    }

    return (
        <>
            {!isAuth && <Navigate replace to="/login" />}
            <Routes>
                {isAuth
                    ?
                    PrivateRoutes.map((route, i) => {
                        return <Route key={i} path={route.path} element={route.elem} />
                    })

                    :
                    PublicRoutes.map((route, i) => {
                        return <Route key={i} path={route.path} element={route.elem} />
                    })
                }
            </Routes>
        </>
    )
};

export default AppRouter;
