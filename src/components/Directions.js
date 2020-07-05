import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { MainPage } from "../pages/Mainpage"
import { BusPage } from "../pages/BusPage"


export const Directions = () => {
    return (
        <BrowserRouter>

            {/*     <Nav /> */}
            <main>
                <Switch>
                    <Route path="/" exact>
                        <MainPage />
                    </Route>
                    <Route path="/bus" exact>
                        <BusPage />
                    </Route>
                    {/*  
                    <Route path="/sessions" exact>
                        <LoginForm />
                    </Route>
                    <Route path="/plants" exact>
                        <Plants />
                    </Route>
                    <Route path="/profile" exact>
                        <Profile />
                    </Route>
                    <Route path="/plants/:id" exact>
                        <SinglePlantPage />
                    </Route> */}
                </Switch>
            </main>
            {/*   <Footer /> */}
        </BrowserRouter>
    )
}