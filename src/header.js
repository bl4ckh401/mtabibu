import { useEffect, useState} from 'react';
import './App.css';
import navLinks from './navlink'
import { AppBar,Toolbar,List,ListItem,ListItemText,makeStyles,Container, IconButton, Hidden, Drawer} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";

function Header(){
    const [mobileView, setMobileView] = useState(false);

    function handleDrawerToggle(){
        setMobileView(!mobileView)
        console.log({mobileView})
    }
    const brand= {
        height:50,
        width:50
    }
    const useStyle = makeStyles({
        navDisplayFlex:{
            display:'block',
            justifyContent:'space-between'
        },
        navDisplayblock:{
            display:'',
            justifyContent:'space-between'
        },
        linkText:{
            textDecoration:'none',
            textTransform: 'uppercase',
            color:'blue'
        },
        menuButton:{
            marginLeft:0
        }
    })
    const classes = useStyle();
    const drawer =      <List  component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
                            {navLinks.map(({title,path}) =>(<a href={path} key={title}>
                                    <ListItem button>
                                        <ListItemText className={classes.linkText} primary={title} />
                                            </ListItem>
                                        </a>
                                  ))}
                        </List>
    return(
        <div className="App-header">
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                        >
                            <Menu/> 
                     </IconButton>
                         <img src="./myLogo.png" alt='Logo' style={brand}/>
                         <Container maxWidth='md' className={classes.navDisplayblock}>
                                <nav className={classes.drawer}>
                                    <Hidden smUp implementation="css">
                                        <Drawer
                                        variant="temporary"
                                        anchor="left"
                                        color="primary"
                                        open={mobileView}
                                        onClose={handleDrawerToggle}
                                        ModalProps={{keepMounted: true}}
                                        >
                                            <IconButton
                                            onClick={handleDrawerToggle}
                                            className={classes.closemenuButton}
                                            >
                                                <Close/>
                                            </IconButton>
                                            {drawer}
                                        </Drawer>
                                    </Hidden>
                                </nav>
                           {    /* <List  component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
                            {navLinks.map(({title,path}) =>(<a href={path} key={title}>
                                    <ListItem button>
                                        <ListItemText className={classes.linkText} primary={title} />
                                            </ListItem>
                                        </a>
                                  ))}
                            </List>*/}
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;