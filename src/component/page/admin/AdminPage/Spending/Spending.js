import React, {useState} from "react";
import { MENU_TAB_ADMIN } from "../../../../base/common/commonConstant";
import AdminPage from "../AdminPage";

function Spending(props) {

    return (

        <AdminPage
            title={"Quản lý chi tiêu"}
            index={MENU_TAB_ADMIN.SPENDING}
        >
            quản lý chi tiêu
        </AdminPage>

    )

}
export default Spending