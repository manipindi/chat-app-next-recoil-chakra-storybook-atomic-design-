import UserName from '../../components/atoms/labels/username/index';

export default {
    component : UserName,
    args : {
        fontSize : "md",
    }
}

export const Default = {
    args : {
        username : "UserName",
        fontWeight : "normal"
    }
}

export const Large = {
    args : {
        username : "UserName",
        fontSize  :"4xl",
        fontWeight : "normal"
    }
}

export const Bold = {
    args : {
        username : "UserName",
        fontSize  :"4xl",
        fontWeight : "bold",
        // color: "red"
    }
}