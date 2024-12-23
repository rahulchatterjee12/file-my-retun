"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "@/components/common/Logo";
import { useRouter, usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About Us", href: "/about-us" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "black" }}
    >
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                color: item.href !== path ? "black" : "#4640DE",
              }}
              onClick={() => router.push(item.href)}
              disableRipple
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isClient && (
        <>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              background: "white",
              color: "black",
              boxShadow: 0,
            }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: "flex", gap: "25px" }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Logo />
                </Box>

                {/* Brand logo */}
                {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Logo />
                </Box> */}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block", md: "flex" },
                  gap: 5,
                }}
              >
                {navItems.map((item) => (
                  <button
                    className={`relative px-4 py-2 text-sm ${
                      item.href === path ? "text-[#4640DE]" : "text-[#666666]"
                    }`}
                    key={item.title}
                    onClick={() => router.push(item.href)}
                  >
                    {item.title}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full transform origin-left transition-transform duration-300 ${
                        item.href === path
                          ? "scale-x-100 bg-[#4640DE]"
                          : "scale-x-0 bg-transparent"
                      }`}
                    />
                  </button>
                ))}
                <Button
                  variant="outlined"
                  sx={{
                    color: "#4640DE",
                    borderColor: "#4640DE",
                    borderRadius: "10px",
                  }}
                  onClick={() => router.push("/auth")}
                >
                  Sign in / Sign up
                </Button>
              </Box>
              <div className="flex md:hidden justify-between items-center w-full">
                <Box sx={{ mr: 2, display: { sm: "none" } }}>
                  <Logo />
                </Box>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
