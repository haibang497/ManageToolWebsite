import React, { Component } from "react";
import { Route } from "react-router";

import { FectchDonVi } from "./CRUDDonVi";
import { FetchHoaDon } from "./CRUDHoaDon";
import { FetchLoaiTb } from "./CRUDLoaiThietBi";
import { FetchThietBi } from "./CRUDThietBi";
import { FectchDongTb } from "./CRUDDongTB";
import { FetchThongTinKD } from "./CRUDThongTinKd";
import { FetchNhomKDs } from "./CRUDNhomKD";
import { FetchNhomTBs } from "./CRUDNhomTB";
import { DangKyAdmin } from "./DangKyAdmin";
import { DangNhapAdmin } from "./DangNhapAdmin";
import { ChiTietDonVi } from "./ChiTietDonVi";
import { ChiTietDongThietBi } from "./ChiTietDongTB";
import { ChiTietHoaDon } from "./ChiTietHoaDon";
import { ChiTietLoaiTB } from "./ChiTietLoaiTB";
import { ChiTietNhomKD } from "./ChiTietNhomKD";
import { ChiTietNhomTBs } from "./ChiTietNhomTB";
import { ChiTietThietBi } from "./ChiTietThietBi";
import { ChiTietThongTinKD } from "./ChiTietThongTinKD";



export class MainLayout extends Component {
  render() {
    return (
      <>
        <div id="wrapper">
          <Route exact path="/" component={DangNhapAdmin} />
          <Route path="/donvi" component={FectchDonVi} />
          <Route path="/dongthietbi" component={FectchDongTb} />
          <Route path="/hoadon" component={FetchHoaDon} />
          <Route path="/thongtinkiemdinh" component={FetchThongTinKD} />
          <Route path="/thietbi" component={FetchThietBi} />
          <Route path="/loaithietbi" component={FetchLoaiTb} />
          <Route path="/nhomkiemdinh" component={FetchNhomKDs} />
          <Route path="/nhomthietbi" component={FetchNhomTBs} />
          <Route path="/dangkyadmin" component={DangKyAdmin} />
          <Route path="/xuatdonvi" component={ChiTietDonVi} />
          <Route path="/xuatdongtb" component={ChiTietDongThietBi} />
          <Route path="/xuathoadon" component={ChiTietHoaDon}/>
          <Route path="/xuatloaitb" component={ChiTietLoaiTB}/>
          <Route path="/xuatnhomkd" component={ChiTietNhomKD}/>
          <Route path="/xuatnhomtb" component={ChiTietNhomTBs}/>
          <Route path="/xuatthietbi" component={ChiTietThietBi}/>
          <Route path="/xuatthongtinkd" component={ChiTietThongTinKD}/>
        </div>
      </>
    );
  }
}
