import { Typography } from "@mui/material";
import React from "react";
const data = [
  "Email sent on 25 January 2023 4:55 PM",
  "Demo Requested",
  "Product A",
];
function DealInfo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <div>
          <Typography
            fontSize={"1.4rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
          >
            Last Activty
          </Typography>
        </div>
        <div>
          <Typography
            fontSize={"1.2rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
            color={"rgba(138, 144, 153, 1)"}
          >
            {data[0]}
          </Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography
            fontSize={"1.4rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
          >
            Inquiry Type
          </Typography>
        </div>
        <div>
          <Typography
            fontSize={"1.2rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
            color={"rgba(138, 144, 153, 1)"}
          >
            {data[1]}
          </Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography
            fontSize={"1.4rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
          >
            Product/Service Type
          </Typography>
        </div>
        <div>
          <Typography
            fontSize={"1.2rem"}
            fontFamily={"Poppins"}
            fontWeight={500}
            color={"rgba(138, 144, 153, 1)"}
          >
            {data[2]}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default DealInfo;
