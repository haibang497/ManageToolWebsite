import React from "react";
import Cookies from "universal-cookie";

import "./style/DonVi.css";
export class ChiTietDonVi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donVis: [],
      loading: true,
      currentDate: Date().toLocaleString(),
    };
  }

  cookies = new Cookies();
  componentDidMount() {
    this.populateLoaiTbsData();
  }

  async populateLoaiTbsData() {
    const response = await fetch("api/donVis");
    const data = await response.json();
    this.setState({
      donVis: data,
      loading: false,
    });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderDonVi(this.state.donVis)
    );
    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="card-box">
              <div className="responsive-table-plugin">
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive"
                    data-pattern="priority-columns"
                  >
                    <h2
                      style={{
                        textAlign: "center",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      Đơn Vị
                    </h2>
                  </div>
                </div>
              </div>
              {contents}
            </div>
          </div>
        </div>
      </>
    );
  }

  renderDonVi(donVis) {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <p className="text-muted font-13 mb-4">
                  Ngày xuất báo cáo: {this.state.currentDate}
                </p>
                <table
                  id="datatable-buttons"
                  className="table table-striped dt-responsive nowrap"
                >
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Mã Đơn Vị</th>
                      <th style={{textAlign:"center"}}>Tên Đơn Vị</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donVis.map((donVi) => (
                      <tr key={donVi.maDonVi}>
                        <td style={{textAlign:"center"}}>{donVi.maDonVi}</td>
                        <td style={{textAlign:"center"}}>{donVi.tenDonVi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
