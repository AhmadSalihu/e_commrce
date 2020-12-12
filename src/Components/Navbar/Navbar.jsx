import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
// import  TextField  from '@material-ui/core/TextField';
// import InputAdornment from  '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search'




import useStyles from './styles';

import lumo from '../../assets/lumo.png';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const Location = useLocation(); 
  return (
    <>
    <div className='lightblue' />
      <AppBar position="fixed" className={classes.AppBar} color='inherit'>
        <Toolbar>
          <Typography  component={Link} to="/" variant='h4' className={classes.title} color='inherit' >
            <img src={lumo} alt='LUMO' height='25px' className={classes.image} />
            LUMO
          </Typography>
          {/* <div className={classes.search}> */}
          {/* {Location.pathname === '/' && (
          <TextField id="Standard-bare" placeholder="Search prodducts" 
            margin="normal" inputProps={{
              endadornment: (
                <InputAdornment className={classes.searchIcon} position="start">
                  <SearchIcon searchIcon={searchIcon} />
                </InputAdornment>
              )
            }}
          />
          )}
          </div> */}
          <div className={classes.grow} />
          {Location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
              <Badge badgeContent={ totalItems } color="secondary">
                  <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
      
    </>
  )
}

export default Navbar
