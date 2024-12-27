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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;
const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    subItems: [
      {
        title: "GST",
        href: "/services/gst",
      },
      {
        title: "Incorporation",
        href: "/services/incorporation",
      },
      {
        title: "Investments",
        href: "/services/investments",
      },
      {
        title: "NRI Services",
        href: "/services/nri-services",
      },
      {
        title: "Registration",
        href: "/services/registration",
      },
    ],
  },
  { title: "About Us", href: "/about-us" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(false);

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
          <React.Fragment key={item.title}>
            {!item?.subItems ? (
              <ListItem disablePadding>
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
            ) : (
              <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component="span">{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.subItems.map((i) => (
                    <ListItem key={i.title} disablePadding>
                      <ListItemButton
                        sx={{
                          textAlign: "start",
                          color: i.href !== path ? "black" : "#4640DE",
                        }}
                        onClick={() => router.push(i.href)}
                        disableRipple
                      >
                        <ListItemText primary={i.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
          </React.Fragment>
        ))}
      </List>
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
              px: { md: "45px" },
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
                  <React.Fragment key={item.title}>
                    {item.title !== "Services" ? (
                      <button
                        className={`relative px-4 py-2 text-sm ${
                          item.href === path
                            ? "text-[#4640DE]"
                            : "text-[#666666]"
                        }`}
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
                    ) : (
                      <div>
                        <button
                          className={`relative px-4 py-2 text-sm ${
                            item.href === path
                              ? "text-[#4640DE]"
                              : "text-[#666666]"
                          }`}
                          onClick={(e) => setOpen(e.currentTarget)}
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
                        <Menu
                          open={open}
                          anchorEl={open}
                          onClose={() => setOpen(false)}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          {item.subItems.map((i) => (
                            <MenuItem
                              key={i.title}
                              onClick={() => {
                                setOpen(false);
                                router.push(i.href);
                              }}
                            >
                              {i.title}
                            </MenuItem>
                          ))}
                        </Menu>
                      </div>
                    )}
                  </React.Fragment>
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
