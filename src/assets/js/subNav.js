import allUser from "@/view/all-user";
import belongs from "@/view/belongs";
import holiday from "@/view/holiday";

export default {
    "all-user": {
        title: "所有用户管理",
        name: "all-user",
        iconClass: 'glyphicon-user',
        view: allUser
    },
    belongs: {
        title: "所属人管理",
        name: "belongs",
        iconClass: 'glyphicon-list',
        view: belongs
    },
    holiday: {
        title: "节日管理",
        name: "holiday",
        iconClass: 'glyphicon-time',
        view: holiday
    }
}