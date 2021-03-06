import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { Box } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../general.css"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex"
  },
  appBar: {
    boxShadow: "none",
    background:"transparent",
    color:"black",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{background:"#222323", width:"300px", marginLeft:"10px", marginTop:"10px", borderRadius:"3px"}} >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{color:'white'}} />
            </IconButton>
            <Typography class="title-font" variant="h2" noWrap  style={{color:"white", margin:"0"}}>
              Landon Tipantiza
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={"About"} onClick={()=>{document.getElementById("about").scrollIntoView()}}>
              <ListItemText primary={"About"} />
            </ListItem>

            <ListItem button key={"Projects"} onClick={()=>{document.getElementById("projects").scrollIntoView()}}>
              <ListItemText primary={"Projects"} />
            </ListItem>

            <ListItem button key={"Blogs"} onClick={()=>{window.alert("feature comming soon!")}}>
              <ListItemText primary={"Blogs"} />
            </ListItem>

        </List>
        <List>
          <a href="https://github.com/tipantiza" target='_blank' rel="noopener noreferrer">
            <ListItem button key={"Github"}>
              <GitHubIcon/>
              <ListItemText primary={"Github"} />
            </ListItem>
          </a>
          <a href="https://www.linkedin.com/in/landon-tipantiza-5304001b3/" target='_blank' rel="noopener noreferrer">
            <ListItem button key={"Linkedin"}>
              <LinkedInIcon/>
              <ListItemText primary={"Linkedin"} />
            </ListItem>
          </a>
          <a href="https://twitter.com/LandonTipantiza" target='_blank' rel="noopener noreferrer">
            <ListItem button key={"Twitter"}>
              <TwitterIcon/>
              <ListItemText primary={"Twitter"} />
            </ListItem>
          </a>
        </List>
      </Drawer>
      <main>
      </main>
    </div>
  );
}
