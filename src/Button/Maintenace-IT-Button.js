import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {Link} from "react-router-dom";
import TransferWithinAStation from '@material-ui/icons/TransferWithinAStation';
import People from '@material-ui/icons/People';
import HowToReg from '@material-ui/icons/HowToReg';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LibraryAddCheck from '@material-ui/icons/LibraryAddCheck';
import Alarm from '@material-ui/icons/Alarm';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Storage from '@material-ui/icons/Storage';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Timeline from '@material-ui/icons/Timeline';
import MenuBook from '@material-ui/icons/MenuBook';
import Add from '@material-ui/icons/Add';
import Person from '@material-ui/icons/Person';
import DeviceHub from '@material-ui/icons/DeviceHub';
import MyButton from './testButtonActive'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  ListItem:{
    padding: '0px 8px 0px 16px',
  },
  activeButton:{
    "&:active": {
      
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor:'#f3f3f3',
  },
  dropdown:{
    backgroundColor:'#e5edf3'
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  const [open2,setOpen2] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const closeChild=()=>{
    if(open || open2){
      setOpen(false);
      setOpen2(false);
    }
  }
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      
        <ListItem button component={Link} to="/" onClick={() => closeChild()}
        classes={{root:classes.ListItem}}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="แจ้งซ่อม" />
        </ListItem>
        <ListItem button component={Link} to="/Assign" classes={{root:classes.ListItem}}>
          <ListItemIcon>
            <HowToReg />
          </ListItemIcon>
          <ListItemText primary="มอบหมายงาน" />
        </ListItem>
        <ListItem button onClick={handleClick} className={classes.dropdown} classes={{root:classes.ListItem}}>
          <ListItemIcon>
            <TransferWithinAStation />
          </ListItemIcon>
          <ListItemText primary="ปฏิบัติงาน" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Alarm />
              </ListItemIcon>
              <ListItemText primary="รอคิวงาน" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="รอดำเนินงาน" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DirectionsWalk />
              </ListItemIcon>
              <ListItemText primary="กำลังดำเนินงาน" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="เสร็จสิ้น" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <HighlightOff />
              </ListItemIcon>
              <ListItemText primary="ยกเลิก" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText primary="รวมทั้งหมด" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <LibraryAddCheck />
          </ListItemIcon>
          <ListItemText primary="อนุมัติแจ้งซ่อม" />
        </ListItem>
        <ListItem button onClick={handleClick2} className={classes.dropdown}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="ข้อมูลหลัก" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="ข้อมูลพนักงาน" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DeviceHub />
              </ListItemIcon>
              <ListItemText primary="พนักงานที่ดูแลโครงการ" />
            </ListItem>
            </List>
          </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="รายงานผลการปฏิบัติงาน" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="รายงานแจ้งซ่อม" />
        </ListItem>
    </List>
    
  );
}