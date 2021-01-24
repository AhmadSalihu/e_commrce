import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import lumo from '../../assets/lumo.png.jpg';
import useStyles from './styles';




const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='primary'>
         <Toolbar>
           <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit' boxshadow='0 3px 5px 2px 255, 105, 135, 0.3'>
              <img src={lumo} alt={lumo} height='30px' className={classes.image} />
              L
              U
              M
              O
           </Typography>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Products…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           <div className={classes.grow} />
           {location.pathname === '/' && (
           <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label='Show Cart Item' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>            
              </IconButton>
           </div> )}
         </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
