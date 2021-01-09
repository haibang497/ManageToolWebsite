import React from "react";
import Cookies from "universal-cookie";

import "./style/DonVi.css";
import "./style/Table.css";

export class ChiTietNhomKD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nhomKDs: [],
      loading: true,
      currentDate: Date().toLocaleString(),
    };
  }

  cookies = new Cookies();
  componentDidMount() {
    this.populateLoaiTbsData();
  }

  async populateLoaiTbsData() {
    const response = await fetch("api/nhomKds");
    const data = await response.json();
    this.setState({
      nhomKDs: data,
      loading: false,
    });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderDonVi(this.state.nhomKDs)
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
                      Nhóm Kiểm Định
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

  renderDonVi(nhomKDs) {
    return (
      <div>
        <table
          id="datatable-buttons"
          className="table table-striped dt-responsive nowrap"
        >
          <thead>
            <tr>
              <th>Mã Nhóm Kiểm Định</th>
              <th>Tên Nhóm Kiểm Định</th>
            </tr>
          </thead>
          <tbody>
            {nhomKDs.map((nhomKD) => (
              <tr key={nhomKD.maNhomKd}>
                <td>{nhomKD.maNhomKd}</td>
                <td>{nhomKD.nhomKiemDinh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
