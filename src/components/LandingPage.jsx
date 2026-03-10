import React from "react";
import { Box, Button, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div>

      {/* Navbar */}

      <AppBar position="static" sx={{background:"#2e7d32"}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>

          <Typography variant="h6">
            🌾 KissanMart
          </Typography>

          <Box>
            <Button
            color="inherit"
            onClick={()=>navigate("/login")}
            >
              Login
            </Button>

            <Button
            variant="contained"
            sx={{background:"#fff", color:"#2e7d32"}}
            onClick={()=>navigate("/register")}
            >
              Register
            </Button>
          </Box>

        </Toolbar>
      </AppBar>


      {/* Hero Section */}

      <Box
      sx={{
        height:"80vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        background:"#f1f8e9"
      }}
      >

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Buy Fresh Vegetables Directly From Farmers
        </Typography>

        <Typography variant="h6" sx={{mb:4}}>
          Supporting Farmers • Fresh Products • Fair Prices
        </Typography>

        <Button
        variant="contained"
        size="large"
        sx={{background:"#2e7d32"}}
        onClick={()=>navigate("/register")}
        >
          Start Shopping
        </Button>

      </Box>


      {/* Features */}

      <Box sx={{p:6}}>

        <Typography
        variant="h4"
        align="center"
        gutterBottom
        >
          Why Choose KissanMart?
        </Typography>

        <Grid container spacing={4} sx={{mt:2}}>

          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h5">🌱 Fresh Products</Typography>
              <Typography>
                Get farm fresh vegetables directly from farmers.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h5">💰 Best Prices</Typography>
              <Typography>
                No middlemen. Farmers get fair price and customers pay less.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h5">🚚 Fast Delivery</Typography>
              <Typography>
                Quick delivery from farm to your doorstep.
              </Typography>
            </Box>
          </Grid>

        </Grid>

      </Box>


      {/* Call To Action */}

      <Box
      sx={{
        textAlign:"center",
        p:6,
        background:"#e8f5e9"
      }}
      >

        <Typography variant="h4" gutterBottom>
          Join KissanMart Today
        </Typography>

        <Button
        variant="contained"
        size="large"
        sx={{background:"#2e7d32"}}
        onClick={()=>navigate("/register")}
        >
          Register Now
        </Button>

      </Box>


      {/* Footer */}

      <Box
      sx={{
        textAlign:"center",
        p:3,
        background:"#2e7d32",
        color:"#fff"
      }}
      >

        <Typography>
          © 2026 KissanMart • Empowering Farmers
        </Typography>

      </Box>

    </div>
  );
}

export default LandingPage;