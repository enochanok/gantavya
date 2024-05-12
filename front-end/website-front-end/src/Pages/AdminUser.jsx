import React from "react";

const UserDetail = () => {
  return (
    <div style={{ padding: "0 40px" }}>
      <div>
        <h2
          style={{
            fontSize: "30px",
            textDecoration: "underline",
            textDecorationColor: "#ff0000",
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
            letterSpacing: "2px",
            lineHeight: "1.5",
            fontWeight: "500",
            marginTop: "50px",
          }}
        >
          PROFILE DETAIL
        </h2>
        <h3 style={{ color: "#606060", marginTop: "30px" }}>
          PROFILE DETAILS HERE{" "}
        </h3>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "4px",
          }}
        >
          <h4 style={{ color: "#A0A0A0" }}>Full Name:</h4>
          <h4 style={{ fontWeight: "500" }}>Ram yadav</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "4px",
          }}
        >
          <h4 style={{ color: "#A0A0A0" }}>Phone Number</h4>
          <h4 style={{ fontWeight: "500" }}>98177727222</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "4px",
          }}
        >
          <h4 style={{ color: "#A0A0A0" }}>Email</h4>
          <h4 style={{ fontWeight: "500" }}>email@exmaple.com</h4>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "4px",
          }}
        >
          <h4 style={{ color: "#A0A0A0" }}>Created At:</h4>
          <h4 style={{ fontWeight: "500" }}>2024/1/1</h4>
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "4px",
          }}
        >
          <h4 style={{ color: "#A0A0A0" }}>Modified At</h4>
          <h4 style={{ fontWeight: "500" }}>2024/1/1</h4>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <button
          style={{
            backgroundColor: "white",
            color: "#ff0000",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0px 2px 4px #ff0000",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
