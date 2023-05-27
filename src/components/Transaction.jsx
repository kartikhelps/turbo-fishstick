import { MoreHoriz } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";

function Transaction() {
  return (
    <Card sx={{ padding: "2rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}
        >
          <Box>
            <Typography fontSize={"2rem"} fontFamily={600}>
              Transactions
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src='dashboard/transac_profile.svg' />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={"1.4rem"} fontFamily={400}>
                Devon Williamson
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={"1.3rem"}
                fontFamily={400}
                color='rgba(138, 144, 153, 1)'
              >
                08:00 AM — 19 August
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                fontSize={"1.4rem"}
                fontFamily={400}
                color='rgba(73, 201, 109, 1)'
              >
                +1,400
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"1.3rem"} fontFamily={400}>
                Payments
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box>
            <img src='dashboard/transac_profile.svg' />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box>
              <Typography fontSize={"1.4rem"} fontFamily={400}>
                Devon Williamson
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={"1.3rem"}
                fontFamily={400}
                color='rgba(138, 144, 153, 1)'
              >
                08:00 AM — 19 August
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                fontSize={"1.4rem"}
                fontFamily={400}
                color='rgba(73, 201, 109, 1)'
              >
                +1,400
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"1.3rem"} fontFamily={400}>
                Payments
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src='dashboard/transac_profile.svg' />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={"1.4rem"} fontFamily={400}>
                Devon Williamson
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={"1.3rem"}
                fontFamily={400}
                color='rgba(138, 144, 153, 1)'
              >
                08:00 AM — 19 August
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                fontSize={"1.4rem"}
                fontFamily={400}
                color='rgba(73, 201, 109, 1)'
              >
                +1,400
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"1.3rem"} fontFamily={400}>
                Payments
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src='dashboard/transac_profile.svg' />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={"1.4rem"} fontFamily={400}>
                Devon Williamson
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={"1.3rem"}
                fontFamily={400}
                color='rgba(138, 144, 153, 1)'
              >
                08:00 AM — 19 August
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                fontSize={"1.4rem"}
                fontFamily={400}
                color='rgba(73, 201, 109, 1)'
              >
                +1,400
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"1.3rem"} fontFamily={400}>
                Payments
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Transaction;
