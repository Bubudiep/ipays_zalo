import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import QRcodeimg from "/src/img/icon/qrcode.png";

const userConfig = {
  "Lương cơ bản": 4300000,
  "Chuyên cần": 500000,
  "Nhà ở/ đi lại": 350000,
  "Vị trí/ độc hại": 200000,
  "Phụ cấp khác": 200000,
  "Tổng lương": 4300000 + 500000 + 350000 + 200000 + 200000,
};
const otherConfig = {
  "Phụ cấp ca đêm": "30%",
  "Nghỉ hưởng lương": "100%",
  "Nghỉ ốm": 0,
  "Thai sản": 0,
  "Giờ làm việc": 0,
  "Bảo hiểm": 0,
  "Công đoàn": 0,
  "Thuế thu nhập cá nhân": 0,
  "Khoản trừ khác": 0,
};

const UserSumary = ({ isDayShift, toggleShift }) => {
  const [animClass, setAnimClass] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [showQRcode, setShowQRcode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Khi isDayShift thay đổi, thêm lớp animation
    setAnimClass("fly-up");
    // Xóa lớp animation sau khi animation kết thúc
    const timer = setTimeout(() => {
      setAnimClass("");
    }, 500); // 500ms là thời gian của animation

    // setShowSettings(false); // Ẩn hộp cài đặt khi hiển thị bảng lương
    // setShowConfig(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
    // setShowQRcode(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
    return () => clearTimeout(timer);
  }, [isDayShift]);

  const handleConfigClick = () => {
    setShowConfig((prev) => !prev);
    setShowSettings(false); // Ẩn hộp cài đặt khi hiển thị bảng lương
    setShowQRcode(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
  };

  const handleSettingsClick = () => {
    setShowSettings((prev) => !prev);
    setShowConfig(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
    setShowQRcode(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
  };

  const handleQRcodesClick = () => {
    setShowQRcode((prev) => !prev);
    setShowConfig(false); // Ẩn bảng lương khi hiển thị hộp cài đặt
    setShowSettings(false); // Ẩn hộp cài đặt khi hiển thị bảng lương
  };

  return (
    <div className="flex-cl gap5">
      <div className="user_configuration">
        <div className="preview_container">
          <div className={`items ${animClass}`} onClick={toggleShift}>
            <div className="txt">{isDayShift ? "Ca ngày" : "Ca đêm"}</div>
          </div>
          <div className="items" onClick={handleConfigClick}>
            <div className="txt">Bảng lương</div>
          </div>
          <div className="items" onClick={handleSettingsClick}>
            <div className="txt">Cài đặt</div>
          </div>
          <div className="items" onClick={handleQRcodesClick}>
            <div className="txt">
              <FontAwesomeIcon icon={icon.faQrcode} /> QRcode
            </div>
          </div>
        </div>
      </div>
      {showConfig && (
        <div className={`f-configuration ${showConfig ? "" : "fade-out"}`}>
          <div className="config-container">
            <table>
              <tbody>
                {Object.entries(userConfig).map(([key, value], index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showSettings && (
        <div className={`f-configuration ${showSettings ? "" : "fade-out"}`}>
          <div className="config-container">
            <table>
              <tbody>
                {Object.entries(otherConfig).map(([key, value], index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showQRcode && (
        <div className={`f-configuration ${showSettings ? "" : "fade-out"}`}>
          <div className="config-container">
            <div className="QRCode">
              <img src={QRcodeimg} />
              <div className="txt-code">
                Scan QRcode để truyền dữ liệu cài đặt
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSumary;
