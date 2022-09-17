import { superchineseAction } from "../actions"
import timeline from "../assets/images/timeline.png";
import subject from "../assets/images/subject.png";
import score1 from "../assets/images/score1.png";

import score2 from "../assets/images/score2.png";
import voice from "../assets/images/voice.png";

const initState = {
    loading: false,
    leftIntroduce: [{
        style: {
            background: `url(${timeline.src}) no-repeat`,
            backgroundSize: "100% 100%"
        },
        itemTitle:"itemTitle2",
        itemSubTitle:"itemSubTitle2",
    }, {
        style: {
            background: `url(${subject.src}) no-repeat`,
            backgroundSize: "100% 100%"
        },
        itemTitle:"itemTitle4",
        itemSubTitle:"itemSubTitle4",
    }, {
        style: {
            background: `url(${score1.src}) no-repeat`,
            backgroundSize: "100% 100%"
        },
        itemTitle:"",
        itemSubTitle:"",
    }],
    rightIntroduce: [{
        style: "",
        itemTitle:"itemTitle1",
        itemSubTitle:"itemSubTitle1",
    },{
        style: {
            background: `url(${score2.src}) no-repeat`,
            backgroundSize: "100% 100%"
        },
        itemTitle:"itemTitle3",
        itemSubTitle:"itemSubTitle3",
    }, {
        style: {
            background: `url(${voice.src}) no-repeat`,
            backgroundSize: "100% 100%"
        },
        itemTitle:"itemTitle5",
        itemSubTitle:"itemSubTitle5",
    }],
}

const superchineseReducer = (state = initState, action) => {
    switch (action.type) {
        case superchineseAction.SOMEACTION:
            return state;
        case '1':
            return state;
        default:
            return state;
    }
}

export default superchineseReducer;