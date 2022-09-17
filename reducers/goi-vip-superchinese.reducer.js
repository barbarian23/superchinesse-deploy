import {goivipsuperchineseAction} from "../actions"

const initState = {
    loading: false,
    superChinese: [{
        id: "c1",
        title: "1",
        unitTitle: "tháng",
        price: "149.000",
        unitPrice: "vnđ",
        numberSold: "13.523",
        unitNumberSold: "người đã mua",
    }, {
        id: "c2",
        title: "1",
        unitTitle: "năm",
        price: "659.000",
        unitPrice: "vnđ",
        numberSold: "10.525",
        unitNumberSold: "người đã mua",
    }, {
        id: "c3",
        title: "Life Time",
        unitTitle: "Không giới hạn",
        price: "1.799.000",
        unitPrice: "vnđ",
        numberSold: "7.892",
        unitNumberSold: "người đã mua",
    }
    ],
    superTest: [{
        id: "t1",
        title: "1",
        unitTitle: "tháng",
        price: "199.000",
        unitPrice: "vnđ",
        numberSold: "11.258",
        unitNumberSold: "người đã mua",
    }, {
        id: "t2",
        title: "1",
        unitTitle: "năm",
        price: "749.000",
        unitPrice: "vnđ",
        numberSold: "9.546",
        unitNumberSold: "người đã mua",
    }, {
        id: "t3",
        title: "Life Time",
        unitTitle: "Không giới hạn",
        price: "1.299.000",
        unitPrice: "vnđ",
        numberSold: "8.253",
        unitNumberSold: "người đã mua",
    }],
    selectedCourse: null
}

const goiVipsuperchineseReducer = (state = initState, action) => {
    switch (action.type) {
        case goivipsuperchineseAction.SOMEACTION:
            return state;
        case goivipsuperchineseAction.SET_COURSE: 
            return { ...state, ...{ selectedCourse: action.data } };
        case '1':
            return state;
        default:
            return state;
    }
}

export default goiVipsuperchineseReducer;