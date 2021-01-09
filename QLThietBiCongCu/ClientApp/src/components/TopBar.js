import React, { useEffect } from "react";
import Cookies from "universal-cookie";

function TopBar(props) {
  const cookies = new Cookies();
  const logOut = () => {
    cookies.remove("userAccount", { path: "/" });
    cookies.remove("userName", { path: "/" });
    cookies.remove("namePer", { path: "/" });
    cookies.remove("createRole", { path: "/" });
    cookies.remove("deleteRole", { path: "/" });
    cookies.remove("editFull", { path: "/" });
    cookies.remove("editByName", { path: "/" });
    window.location.href = "/";
  };

  useEffect(()=>{
    if(cookies.get("userAccount")==undefined){
      window.location.href="/";
    }
  }, []);

  // useEffect(()=>{
  //   if(cookies.get("namePer")!="Full"){
  //     window.location.href="/dangky";
  //   }
  // }, []);

  return (
    <div className="navbar-custom">
      <ul className="list-unstyled topnav-menu float-right mb-0">
        <li className="dropdown notification-list">
          <a
            className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <span className="pro-user-name ml-1">
              <b>Xin Chào</b> {cookies.get("userName")} <i className="mdi mdi-chevron-down" />
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Xin Chào !</h6>
            </div>
            <a
              onClick={() => logOut()}
              href="javascript:void(0);"
              className="dropdown-item notify-item"
            >
              <i className="remixicon-logout-box-line" />
              <span>Đăng Xuất</span>
            </a>
          </div>
        </li>
      </ul>
      {/* LOGO */}
      <div className="logo-box">
        <a href="index.html" className="logo text-center">
          <span className="logo-lg">
            <img src="assets\images\logo-light.png" alt="" height={20} />
            {/* <span class="logo-lg-text-light">Xeria</span> */}
          </span>
          <span className="logo-sm">
            {/* <span class="logo-sm-text-dark">X</span> */}
            <img src="assets\images\logo-sm.png" alt="" height={24} />
          </span>
        </a>
      </div>
      <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button className="button-menu-mobile waves-effect waves-light">
            <i className="fe-menu" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
