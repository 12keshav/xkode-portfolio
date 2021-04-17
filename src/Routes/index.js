import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import RoutesConfig from '../Config/RoutesConfig'
import PortfolioWork from  '../Routes/Portfolio/index'
import RouterService from '../service/RouterService'

const AppRoutes = () =>{
    return(
        <>
            <BrowserRouter  ref={RouterService.setBrowserHistoryRef}>
                <Switch>
                    <Route exact path={RoutesConfig.PORTFOLIO} component={PortfolioWork} />
                </Switch>
           </BrowserRouter>
        </>
    )
}
export default AppRoutes;