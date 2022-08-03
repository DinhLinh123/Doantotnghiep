import React, { useEffect, useState } from "react";
import Button2 from "../../../../base/Button/Button";
import {
    MENU_TAB_ADMIN,
    SORT_TYPE,
} from "../../../../base/common/commonConstant";
import InputField from "../../../../base/Input/Input";
import TableBase from "../../../../base/Table/Table";
import AdminPage from "../AdminPage";
import { PlusOutlined, DeleteOutlined, TagsOutlined } from "@ant-design/icons";
import "./pay.scss";
import Popup from "../../../../base/Popup/Popup";
import Input from "../../../../base/Input/Input";
import ImageUpload from "../../../../base/ImageUpload/ImageUpload";
import DatePicker from "../../../../base/DatePicker/DatePicker";
import { Tooltip } from "antd";
import { changeAccount } from "../../../../../reudux/action/accountAction";
import commonFunction from "../../../../base/common/commonFunction";
import { API_TABLE } from "../../../../base/common/endpoint";
import baseApi from "../../../../../api/baseApi";

function Spending(props) {
    const [listTable, setListTable] = useState([
        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6dd",
            name: "bàn 1",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "0",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 2
        },
        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6df",
            name: "bàn 2",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "1",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 0
        },
        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6dg",
            name: "bàn 6",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "0",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 2
        },
        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6dh",
            name: "bàn 5",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "1",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 1
        },

        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6d7",
            name: "bàn 7",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "0",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 0
        },
        {
            id: "6879a96c-aff7-4a34-13bc-08da7223d6d4",
            name: "bàn 8",
            soNguoiToiDa: 5,
            loaiBan: "string",
            kieuDang: "1",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T12:05:12.302",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "1",
            tenKhuVuc: "Tầng 1",
            status: 0
        },

        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "bàn 3",
            soNguoiToiDa: 0,
            loaiBan: "string",
            kieuDang: "2",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-07-30T09:42:33.461",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
            idKhuVuc: "2",
            tenKhuVuc: "Tầng 2",
            status: 1
        },
    ]);
    const [orderSelected, setoOrderSelected] = useState([])

    const [listArea, setListArea] = useState([
        {
            id: "1",
            name: "Tầng 1",
            htmlObject: "string",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-08-02T15:12:10.380Z",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
        },
        {
            id: "2",
            name: "Tầng 2",
            htmlObject: "string",
            createdByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            createdByUserName: "string",
            createdOnDate: "2022-08-02T15:12:10.380Z",
            lastModifiedByUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            lastModifiedByUserName: "string",
        },
    ]);
    const [tableName, setTableName] = useState('')

    const [displayLine2ChooseOrder, setDisplayLine2ChooseOrder] = useState({
        show: false,
        index: ""
    })

    let tableID = ''
    useEffect(() => {
        baseApi.get(
            (res) => { setTableName(res?.name) },
            () => { },
            null,
            API_TABLE.GET_BY_ID + tableID
        )
    }, [tableID])

    function handleChooseFood(item) {
        let _list = [...orderSelected];
        let a = _list?.findIndex((l) => l.id === item.id)
        if (a == -1) {
            item.count = 1
            _list.push(item)
        }
        setoOrderSelected(_list)
    }

    function handleClickDelete(item) {
        setDisplayLine2ChooseOrder({ show: false, index: "" })
        let _list = [...orderSelected];
        let newList = _list.filter((l) => l.id !== item.id);

        setoOrderSelected(newList)
    }
    function handleClickUpCount(item) {
        let _list = [...orderSelected];
        let a = _list?.findIndex((l) => l.id === item.id);
        _list[a].count += 1
        setoOrderSelected(_list)
    }

    function handleClickDownCount(item) {
        let _list = [...orderSelected];
        let a = _list?.findIndex((l) => l.id === item.id);
        _list[a].count -= 1
        setoOrderSelected(_list)
    }

    function renderTotalCount() {
        let total = 0;
        orderSelected?.map((item) => {
            total += parseInt(item?.money) * parseInt(item?.count)
        })
        return total
    }

    return (
        <AdminPage title={"Thanh toán hóa đơn"} index={MENU_TAB_ADMIN.PAY}>
            <div className="pay-manager">
                <div className="pay-manager__area">
                    {listArea?.map((item) => {
                        return (
                            <>
                                <div className="pay-manager__area-name">{item?.name}</div>
                                <div className="pay-manager__area-table">
                                    {listTable?.map((_item) => {
                                        if (_item?.idKhuVuc === item?.id) {
                                            return (
                                                <div className="pay-manager__area-table-name"
                                                    style={{
                                                        backgroundColor: _item.status == 0 ? '#dcdde1' : _item.status == 1 ? '#c23616' : '#fbc531',
                                                        color: _item.status == 0 ? '#000' : _item.status == 1 ? '#fff' : '#fff'
                                                    }}
                                                >
                                                    {_item?.name}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="pay-manager__bill">
                    <div className="pay-manager__bill-dish">
                        <div className="pay-manager__bill-dish-top">
                            <div className="pay-manager__bill-dish-top-title">
                                Món đã chọn{`(${orderSelected?.length})`}
                            </div>
                            <div className="pay-manager__bill-dish-top-table">
                                Bàn: {tableName}
                            </div>
                        </div>
                        <div className="pay-manager__bill-dish-content">
                            <div className="pay-manager__bill-dish-content-header">
                                <div className="pay-manager__bill-dish-content-header-name">
                                    Tên món ăn
                                </div>
                                <div className="pay-manager__bill-dish-content-header-count">
                                    Số lượng
                                </div>
                                <div className="pay-manager__bill-dish-content-header-money">
                                    Đơn giá
                                </div>
                            </div>
                            {orderSelected.length > 0 ? orderSelected?.map((item) => {
                                return (
                                    <div className="pay-manager__bill-dish-content-choose">
                                        <div className="pay-manager__bill-dish-content-choose-line1"
                                            onMouseEnter={() => setDisplayLine2ChooseOrder({ show: true, index: item.id })}
                                            onMouseLeave={() => setDisplayLine2ChooseOrder({ show: false, index: "" })}
                                            onClick={() => setDisplayLine2ChooseOrder({ show: true, index: item.id })}
                                            style={{ backgroundColor: displayLine2ChooseOrder.show && displayLine2ChooseOrder.index == item.id && '#dff9fb' }}
                                        >
                                            <div className="food-name">{commonFunction.smartText(35, item.title)}</div>
                                            <div className="line1-food-count">{item.count}</div>
                                            <div className="food-money">
                                                {commonFunction.numberWithCommas(item.money)}(đ)
                                            </div>
                                        </div>
                                        {displayLine2ChooseOrder.show && displayLine2ChooseOrder.index == item.id &&
                                            <div className="pay-manager__bill-dish-content-choose-line2"
                                                onMouseEnter={() => setDisplayLine2ChooseOrder({ show: true, index: item.id })}
                                                onMouseLeave={() => setDisplayLine2ChooseOrder({ show: false, index: "" })}
                                                style={{ backgroundColor: displayLine2ChooseOrder.show && displayLine2ChooseOrder.index == item.id && '#dff9fb' }}
                                            >
                                                <div className="food-count">
                                                    <div className="food-count-button"><Tooltip title={"Giảm số lượng"} placement="bottom"><Button2 name={"-"} onClick={() => handleClickDownCount(item)} disabled={item?.count <= 1} /></Tooltip> </div>
                                                    <div className="food-count-number">{item.count}</div>
                                                    <div className="food-count-button"><Tooltip title={"Tăng số lượng"} placement="bottom"><Button2 name={"+"} onClick={() => handleClickUpCount(item)} /></Tooltip></div>
                                                </div>
                                                <div className="food-close" ><Tooltip title={"Xóa món"} placement="bottom"><Button2 name={"x"} onClick={() => { handleClickDelete(item) }} /></Tooltip></div>
                                            </div>
                                        }
                                    </div>
                                )
                            }) : <div className="pay-manager__bill-dish-content-no-data">
                                {/* <img src={noDataimg} height={150} width={150} /> */}
                            </div>}
                        </div>
                        <div className="pay-manager__bill-dish-footer">
                            <div className="pay-manager__bill-dish-footer-total">
                                <div className="pay-manager__bill-dish-footer-total-title">
                                    Tổng tiền
                                </div>
                                <div className="pay-manager__bill-dish-footer-total-money">
                                    {commonFunction.numberWithCommas(renderTotalCount())}(đ)
                                </div>
                            </div>
                            <div className="pay-manager__bill-dish-footer-offer">
                                <div className="pay-manager__bill-dish-footer-offer">
                                    <TagsOutlined />
                                    Mã giảm giá
                                </div>
                                <Button2 name={"Chọn mã giảm giá"} />
                            </div>
                            <div className="pay-manager__bill-dish-footer-confirm">
                                <Button2 name={"Xác nhận"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPage>
    );
}
export default Spending;
