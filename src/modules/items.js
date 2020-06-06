import { createAction, handleActions} from 'redux-actions';

import img1 from "../image/1_GlitterPurse1.png";
import img2 from "../image/2_GreenJumper.png";
import img3 from "../image/3_Airpod1.jpg";
import img4 from "../image/4_NabyJumper.jpg";
import img5 from "../image/5_Badge.jpg";
import img6 from "../image/6_PhoneCase.jpg";
import img7 from "../image/7_WhiteDopper2.jpg";
import img8 from "../image/8_Hoody1.jpg";
import img9 from "../image/9_MTM1.jpg";


const INITIALIZE='items/INITIALIZE';

export const initialize=createAction(INITIALIZE);

const exampleItems=[
    {"idx":"0", "img":`${img1}`, "name":"Glitter Purse", "price":"4500", "category":"Accessory", "minimumNumber": "10", "currentNumber":"12", "leftDate": "10"},
    {"idx":"1", "img":`${img2}`, "name":"Ewha-Green Baseball Jumper", "price":"45000", "category":"Clothes","minimumNumber": "20", "currentNumber":"10", "leftDate": "6"},
    {"idx":"2", "img":`${img3}`, "name":"Teddy AirPod Case", "price":"6000", "category":"Accessory", "minimumNumber": "10", "currentNumber":"1","leftDate":"30"},
    {"idx":"3", "img":`${img4}`, "name":"1886 Navy Baseball Jumper", "price":"40000","category":"Clothes","minimumNumber": "30", "currentNumber":"6","leftDate":"10"},
    {"idx":"4", "img":`${img5}`, "name":"Ewha Night Sky Badge", "price":"11000", "category":"Accessory","minimumNumber": "10", "currentNumber":"1","leftDate":"1"},
    {"idx":"5", "img":`${img6}`, "name":"Ewha Blossom Smartphone Case", "price":"7000", "category":"Accessory","minimumNumber": "100", "currentNumber":"60","leftDate":"10"},
    {"idx":"6", "img":`${img7}`, "name":"Ewha White Bench Parka", "price":"60000", "category":"Clothes","minimumNumber": "70", "currentNumber":"30","leftDate":"6"},
    {"idx":"7", "img":`${img8}`, "name":"1886 Hoody", "price":"20000", "category":"Clothes", "minimumNumber": "30", "currentNumber":"6","leftDate":"1"},
    {"idx":"8", "img":`${img9}`, "name":"Ewha Man-To-Man", "price":"20000", "category":"Clothes","minimumNumber": "10", "currentNumber":"12", "leftDate": "5"},
];

const initialState={
    items:exampleItems,
}

const items=handleActions(
    {
        [INITIALIZE]:state=>initialState,
    },
    initialState,
)

export default items;