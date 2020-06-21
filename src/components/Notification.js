
import { store } from "react-notifications-component"
import "animate.css-react"
import "react-notifications-component/dist/theme.css";
import React from "react"
import {ButtonToggle} from "reactstrap";
function Notif(){
    const handleOnClickDefault=()=>{
        store.addNotification({
            title: "REMIND ME",
            message: "We'll remind you this project later through your account.",
            type: "info",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 7000,
                onScreen: true,
                pauseOnHover: true
              },
        })
    }
    return (
        <div>
        <ButtonToggle style={{backgroundColor: '#fcfcfc', borderColor: '#666666', color: 'black'}}  onClick={handleOnClickDefault} block>
            Later
        </ButtonToggle>
        </div>
    )
};

export default Notif;