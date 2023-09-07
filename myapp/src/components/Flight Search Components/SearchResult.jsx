import { Box, Card, Grid, Typography, Button } from "@mui/material";
import airIndia from "../../assets/airindia.png";
import React from "react";

function SearchResult() {
  return (
    <Card variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2 }}>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={airIndia}
              style={{ width: "50px", display: "inline", marginRight: "10px" }}
              alt=""
            />
            <Typography variant="caption">SpiceJet SG393</Typography>
          </Box>
          <Box>
            <Typography variant="h6">22:00</Typography>
            <Typography variant="body2">DEL</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Non Stop</Typography>
            <Typography variant="body2">2hr 40min</Typography>
          </Box>
          <Box>
            <Typography variant="h6">00:10</Typography>
            <Typography variant="body2">BLR</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{mr: 2}}>
            <Typography variant="h6">$ 4609</Typography>
          </Box>
          <Box>
            <Button variant="contained">Book</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SearchResult;
