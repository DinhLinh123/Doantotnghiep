import React, { useEffect, useState } from "react";
import { Radio } from 'antd';
import Button2 from "../../../../base/Button/Button";
import {
  MENU_TAB_ADMIN,
  SORT_TYPE,
} from "../../../../base/common/commonConstant";
import InputField from "../../../../base/Input/Input";
import TableBase from "../../../../base/Table/Table";
import AdminPage from "../AdminPage";
import {
  PlusOutlined
} from '@ant-design/icons';

import "./menu.scss"
import Popup from "../../../../base/Popup/Popup";
import Input from "../../../../base/Input/Input";

function Menu(props) {
  const [sortType, setSortType] = useState();
  const [index, setIndex] = useState(1);
  const [showPopupWarningChangeTab, setShowPopupWarningChangeTab] = useState({ show: false, newIndex: 0 });
  // thêm mới món riêng
  const [foodName, setFoodName] = useState("");
  const [foodUnit, setFoodUnit] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodDescribe, setFoodDescribe] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodStatus, setFoodStatus] = useState(1);
  const [foodNote, setFoodNote] = useState("");

  const [listFood, setListFood] = useState([{ food: "rau" }]);


  const COLUMN_TABLE_INDEX_MENU = {
    NAME: "name",
    AGE: "age",
    ADDRESS: "address",
  };

  const columns = [
    {
      title: "Name",
      dataIndex: COLUMN_TABLE_INDEX_MENU.NAME,
      sorter: true,
      width: "300px",
    },
    {
      title: "Age",
      dataIndex: COLUMN_TABLE_INDEX_MENU.AGE,
      defaultSortOrder: SORT_TYPE.DESC,
      sorter: true,
      width: "300px",
    },
    {
      title: "Address",
      dataIndex: COLUMN_TABLE_INDEX_MENU.ADDRESS,
      width: "300px",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  let listMenu = [
    {
      title: 'Buffet',
      index: 1
    },
    {
      title: 'Món riêng',
      index: 2
    },
    {
      title: 'Đồ uống',
      index: 3
    },
    {
      title: 'Khác',
      index: 4
    }
  ]

  const OPTION_MORE_TABLE = [
    {
      title: "Thêm",
      onSelect: () => alert("thêm"),
    },
    {
      title: "Sửa",
      onSelect: () => {
        alert("Sửa");
      },
    },
    {
      title: "Xóa",
      onSelect: () => {
        alert("Xóa");
      },
    },
  ];

  const [isShowPopupAddnew, setIsShowPopupAddnew] = useState(false)

  function columnName(item) {
    return <div>{item?.name}</div>;
  }
  function columnAge(item) {
    return <div>{item?.age}</div>;
  }
  function columnAddress(item) {
    return <div>{item?.address}</div>;
  }

  function convertDataTable(dataTable) {
    let listData;
    listData = dataTable.map((item, idx) => {
      return {
        [COLUMN_TABLE_INDEX_MENU.NAME]: columnName(item),
        [COLUMN_TABLE_INDEX_MENU.AGE]: columnAge(item),
        [COLUMN_TABLE_INDEX_MENU.ADDRESS]: columnAddress(item),
        key: idx,
      };
    });
    return [...listData];
  }

  // useEffect(() => {
  //   console.log(sortType);
  // }, [sortType]);
  function handleClickAddnew(type) {
    setIsShowPopupAddnew(true)
  }

  function onChangeTab(item) {
    debugger
    if (foodName?.length > 0 || foodUnit?.length > 0 || foodPrice?.length > 0 || foodDescribe?.length > 0 || foodNote?.length > 0) {

      setShowPopupWarningChangeTab({ show: true, newIndex: item.index })
    }
    else {
      setFoodName("")
      setFoodUnit("")
      setFoodPrice("")
      setFoodDescribe("")
      setFoodNote("")
      setIndex(item.index)
    }
  }

  function onSuccessChangeTab() {
    setFoodName("")
    setFoodUnit("")
    setFoodPrice("")
    setFoodDescribe("")
    setFoodNote("")
    setShowPopupWarningChangeTab({ show: false, newIndex: 0 });
    setIndex(showPopupWarningChangeTab.newIndex)
  }



  useEffect(() => { console.log(index) }, [index])

  function ChangeNameFood(val, index) {
    let _listFood = [...listFood]
    _listFood[index].food = val;
    setListFood(_listFood)
  }

  function deleteNameFood(item, index) {

  }

  return (
    <AdminPage title={"Quản lý menu"} index={MENU_TAB_ADMIN.MENU}>
      <div className="menu-manager">
        <div className="menu-manager__filter">
          <div className="menu-manager__filter-search">
            <InputField placeholder={"Tìm kiếm theo từ khóa"} width={400} />
          </div>
          <div className="menu-manager__filter-create-new">
            <Button2 name={"Thêm mới món ăn"} leftIcon={<PlusOutlined />} onClick={() => handleClickAddnew()} />
          </div>
        </div>
        <div className="menu-manager__content">
          <TableBase
            // onChangePagination={(page, pageSize)=>{}}
            columns={columns}
            total={90}
            data={convertDataTable(data)}
            loading={false}
            hasMoreOption
            option={OPTION_MORE_TABLE}
            setObjectSort={(field, order) => {
              setSortType({
                field: field,
                order: order,
              });
            }}
          />
        </div>
        <Popup
          title={"Thêm mới menu"}
          show={isShowPopupAddnew}
          onClickClose={() => setIsShowPopupAddnew(false)}
          button={[
            <Button2 name={'Đóng'} onClick={() => setIsShowPopupAddnew(false)} />,
            <Button2 name={'Lưu'} onClick={() => setIsShowPopupAddnew(false)} background="#fa983a" />
          ]}
          width={600}
          className={"menu-popup-create"}
          body={
            <div className="menu-manager__popup">
              <div className="menu-manager__popup-header">
                {
                  listMenu.map((item, key) => {
                    return (
                      <div className="menu-manager__popup-header-menu"
                        style={{ width: `calc(100% / ${listMenu?.length})`, borderLeft: key != 0 ? '1px solid #fff' : '' }}
                        onClick={() => { onChangeTab(item) }}
                      >
                        {item.title}
                      </div>
                    )
                  })
                }
              </div>
              <div className="menu-manager__popup-content">
                {
                  index == 1 &&
                  <>
                    <div className="menu-manager_popup_content-name">
                      <Input
                        label={"Tên gói buffet"}
                        defaultValue={foodName}
                        onChange={(val) => { setFoodName(val) }}
                        autoFocus
                      />
                    </div>
                    <div className="menu-manager_popup_content-food">
                      <div className="menu-manager_popup_content-food-add"><Button2 /></div>
                      {listFood?.map((item, index) => {
                        return (
                          <>
                            <div className="menu-manager_popup_content-food-input"><Input defaultValue={item.food} onChange={(val) => ChangeNameFood(val, index)} /></div>
                            <div className="menu-manager_popup_content-food-button"><Button2 onClick={() => deleteNameFood(item, index)} /></div>
                          </>
                        )
                      })}
                    </div>
                  </>
                }
                {
                  index == 2 &&
                  <div className="menu-manager__popup-content_privateDish">
                    <Input
                      label={"Tên món"}
                      defaultValue={foodName}
                      onChange={(val) => { setFoodName(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Đơn vị tính"}
                      defaultValue={foodUnit}
                      onChange={(val) => { setFoodUnit(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Giá tiền"}
                      defaultValue={foodPrice}
                      onChange={(val) => { setFoodPrice(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Mô tả"}
                      defaultValue={foodDescribe}
                      onChange={(val) => { setFoodDescribe(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Ảnh</div>
                    <img alt="example" style={{ width: '100%' }} />
                    <Input
                      label={"Ghi chú"}
                      defaultValue={foodNote}
                      onChange={(val) => { setFoodNote(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Trạng thái</div>
                    <Radio.Group onChange={(val) => { setFoodStatus(val.target.value) }} value={foodStatus}>
                      <Radio value={1}>Còn</Radio>
                      <Radio value={2}>Hết</Radio>
                    </Radio.Group>
                  </div>
                }
                {
                  index == 3 && <div>
                    <Input
                      label={"Tên đồ uống"}
                      defaultValue={foodName}
                      onChange={(val) => { setFoodName(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Đơn vị tính"}
                      defaultValue={foodUnit}
                      onChange={(val) => { setFoodUnit(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Giá tiền"}
                      defaultValue={foodPrice}
                      onChange={(val) => { setFoodPrice(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Mô tả"}
                      defaultValue={foodDescribe}
                      onChange={(val) => { setFoodDescribe(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Ảnh</div>
                    <img alt="example" style={{ width: '100%' }} />
                    <Input
                      label={"Ghi chú"}
                      defaultValue={foodNote}
                      onChange={(val) => { setFoodNote(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Trạng thái</div>
                    <Radio.Group onChange={(val) => { setFoodStatus(val.target.value) }} value={foodStatus}>
                      <Radio value={1}>Còn</Radio>
                      <Radio value={2}>Hết</Radio>
                    </Radio.Group>
                  </div>
                }
                {
                  index == 4 && <div>
                    <Input
                      label={"Tên"}
                      defaultValue={foodName}
                      onChange={(val) => { setFoodName(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Đơn vị tính"}
                      defaultValue={foodUnit}
                      onChange={(val) => { setFoodUnit(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Giá tiền"}
                      defaultValue={foodPrice}
                      onChange={(val) => { setFoodPrice(val) }}
                      autoFocus
                    />
                    <Input
                      label={"Mô tả"}
                      defaultValue={foodDescribe}
                      onChange={(val) => { setFoodDescribe(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Ảnh</div>
                    <img alt="example" style={{ width: '100%' }} />
                    <Input
                      label={"Ghi chú"}
                      defaultValue={foodNote}
                      onChange={(val) => { setFoodNote(val) }}
                      autoFocus
                    />
                    <div className="menu-manager__popup-content_privateDish_status">Trạng thái</div>
                    <Radio.Group onChange={(val) => { setFoodStatus(val.target.value) }} value={foodStatus}>
                      <Radio value={1}>Còn</Radio>
                      <Radio value={2}>Hết</Radio>
                    </Radio.Group>
                  </div>
                }
              </div>
            </div>
          }
        />
        <Popup
          title={"Cảnh báo"}
          show={showPopupWarningChangeTab.show}
          onClickClose={() => setShowPopupWarningChangeTab({ show: false, newIndex: 0 })}
          button={[
            <Button2 name={'Đồng ý'} onClick={() => onSuccessChangeTab()} />,
            <Button2 name={'không'} onClick={() =>
              setShowPopupWarningChangeTab({ show: false, newIndex: index })
            } />
          ]}
          width={500}
          body={
            <div>
              Bạn có chắc chắn muốn chuyển tab và không lưu thông tin vừa nhập không?
            </div>
          }
        />

      </div>
    </AdminPage>
  );
}
export default Menu;
