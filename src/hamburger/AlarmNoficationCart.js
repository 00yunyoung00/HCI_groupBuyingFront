import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { store } from "react-notifications-component"
import "animate.css-react"
import "react-notifications-component/dist/theme.css";


function AlarmNoficationCart() {const StyledBadge = withStyles((theme) => ({
    
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
var alarmNumber=1;
const handleOnClickDefault=()=>{
    store.addNotification({
        title: "Notification",
        message: "Only 1 day left: 'Ewha Night Sky Badge by bbobbo.y'",
        type: "danger",
        container: "bottom-left",
        insert: "top",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        
    })

}
  return (
    <IconButton aria-label="cart" onClick={handleOnClickDefault}>
      <StyledBadge badgeContent={alarmNumber} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export default AlarmNoficationCart;