import React from "react";
import { useStyles } from "./top-bar.style";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
const logo = require('../../assets/logo.png');

export const TopBar = () => {
  const classes = useStyles();  
  const pages = [
    { link: "/", text: "Sports" },
    { link: "/reservation", text: "Reservation" },
  ];


  interface Props {
    buttons: {
      link: string;
      text: string;
    }[]
  }
  const NavigationButtons: React.FC<Props> = ({buttons}) => {
    const buttonComponents = buttons.map((page) => {
        return <Link style={{ textDecoration: 'none' }} to={page.link} key={page.text}><Button sx={{color: 'white'}} key={page.link}>{page.text}</Button></Link>  
    });
    return <>{buttonComponents}</>;
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          className={classes.toolbar}
          disableGutters
        >
          <img alt="Fit Demo logo" height="50" src={logo} />
          <NavigationButtons buttons={pages}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
