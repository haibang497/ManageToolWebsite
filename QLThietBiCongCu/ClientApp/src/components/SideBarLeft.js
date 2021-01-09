import React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";

const LeftSideBar = () => {
  return (
    <div className="left-side-menu">
      <div className="slimscroll-menu">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          <ul className="metismenu" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="remixicon-dashboard-line" />
                <span> Bảng Điều Khiển </span>
                <span className="menu-arrow" />
              </a>
              <ul className="nav-second-level" aria-expanded="false">
                <li>
                  <a href="/hoadon">Hóa Đơn</a>
                </li>
                <li>
                  <a href="/thongtinkiemdinh">Thông Tin Kiểm Định</a>
                </li>
                <li>
                  <a href="/nhomthietbi">Nhóm Thiết Bị</a>
                </li>
                <li>
                  <a href="/dongthietbi">Dòng Thiết Bị</a>
                </li>
                <li>
                  <a href="/loaithietbi">Loại Thiết Bị</a>
                </li>
                <li>
                  <a href="/nhomkiemdinh">Nhóm Kiểm Định</a>
                </li>

                <li>
                  <a href="/thietbi">Thiết Bị</a>
                </li>

                <li>
                  <a href="/donvi">Đơn Vị</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="remixicon-layout-line" />
                <span> Xuất Báo Cáo </span>
                <span className="menu-arrow" />
              </a>
              <ul className="nav-second-level" aria-expanded="false">
                <li>
                  <a href="/xuathoadon">Chi Tiết Hóa Đơn</a>
                </li>
                <li>
                  <a href="/xuatnhomtb">Chi Tiết Nhóm Thiết Bị</a>
                </li>
                <li>
                  <a href="/xuatnhomkd">Chi Tiết Loại Thiết Bị</a>
                </li>
                <li>
                  <a href="/xuatdonvi">Chi Tiết Đơn Vị</a>
                </li>
                <li>
                  <a href="/xuatdongtb">Chi Tiết Dòng Thiết Bi</a>
                </li>
                <li>
                  <a href="/xuatloaitb">Chi Tiết Loại Thiết Bị</a>
                </li>
                <li>
                  <a href="/xuatthongtinkd">Chi Tiết Thông Tin Kiểm Định</a>
                </li>
                <li>
                  <a href="/xuatthietbi">Chi Tiết Thiết Bị</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="remixicon-stack-line" />
                <span> Admin </span>
                <span className="menu-arrow" />
              </a>
              <ul className="nav-second-level" aria-expanded="false">
                <li>
                  <a href="/dangkyadmin">Quản Lý</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
  );
};

export default LeftSideBar;
