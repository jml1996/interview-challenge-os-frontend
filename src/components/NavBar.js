import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return(
        <AppBar className="nav-bar" display="flex" position="static">
            <Toolbar>
                <Grid justify="space-around" container spacing={24}>
                    <Grid item style={{width: "12%"}}>
                        <Link style={{color: "white", textDecoration: "None"}} to="/athletes" color="inherit">
                            Athletes
                        </Link>
                    </Grid>
                    <Grid item style={{width: "12%"}}>
                        <Link style={{color: "white", textDecoration: "None"}} to="/new-profile" color="inherit">
                            New Profile
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;