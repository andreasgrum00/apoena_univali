"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menu, type ItemMenu } from "@/content/navegacao";
import { cores } from "@/theme";

function ativo(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

function ItemComSubmenu({ item, pathname }: { item: ItemMenu; pathname: string }) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  return (
    <>
      <Button
        onClick={(e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget)}
        endIcon={<ExpandMoreIcon sx={{ transition: "transform .2s", transform: open ? "rotate(180deg)" : "none" }} />}
        aria-haspopup="menu"
        aria-expanded={open}
        sx={navButtonSx(ativo(pathname, item.href))}
      >
        {item.titulo}
      </Button>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        slotProps={{ paper: { sx: { bgcolor: cores.azul, color: cores.branco, mt: 1, minWidth: 220 } } }}
      >
        {item.filhos!.map((f) => (
          <MenuItem
            key={f.href}
            component={Link}
            href={f.href}
            onClick={() => setAnchor(null)}
            selected={pathname === f.href}
            sx={{
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
              "&.Mui-selected, &:hover, &.Mui-selected:hover": { bgcolor: cores.lavanda },
            }}
          >
            {f.titulo}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function navButtonSx(isActive: boolean) {
  return {
    color: cores.azul,
    fontSize: 13,
    px: 1.25,
    whiteSpace: "nowrap",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 10,
      right: 10,
      bottom: 4,
      height: 3,
      bgcolor: cores.lavanda,
      transform: isActive ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform .25s",
    },
    "&:hover": { bgcolor: "transparent" },
    "&:hover::after": { transform: "scaleX(1)" },
  } as const;
}

export default function Header() {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: cores.claro, borderBottom: `4px solid ${cores.azul}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
          <Box component={Link} href="/" aria-label="Apoena — página inicial" sx={{ display: "flex", flexShrink: 0 }}>
            <Image src="/logo.webp" alt="Chapa 01 Apoena 2026" width={124} height={70} priority style={{ height: "auto" }} />
          </Box>

          <Box component="nav" sx={{ ml: "auto", display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
            {menu.map((item) =>
              item.filhos ? (
                <ItemComSubmenu key={item.href} item={item} pathname={pathname} />
              ) : (
                <Button key={item.href} component={Link} href={item.href} sx={navButtonSx(ativo(pathname, item.href))}>
                  {item.titulo}
                </Button>
              ),
            )}
          </Box>

          <IconButton
            onClick={() => setDrawer(true)}
            aria-label="Abrir menu"
            sx={{ ml: "auto", display: { lg: "none" }, color: cores.azul }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        slotProps={{ paper: { sx: { bgcolor: cores.azul, color: cores.branco, width: { xs: "86vw", sm: 360 } } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawer(false)} aria-label="Fechar menu" sx={{ color: cores.branco }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <List component="nav" sx={{ px: 1 }}>
          <ListItemButton component={Link} href="/" onClick={() => setDrawer(false)} selected={pathname === "/"} sx={drawerItemSx}>
            <ListItemText primary="Início" />
          </ListItemButton>
          {menu.flatMap((item) =>
            (item.filhos ?? [item]).map((f) => (
              <ListItemButton
                key={f.href}
                component={Link}
                href={f.href}
                onClick={() => setDrawer(false)}
                selected={pathname === f.href}
                sx={drawerItemSx}
              >
                <ListItemText primary={f.titulo} />
              </ListItemButton>
            )),
          )}
        </List>
      </Drawer>
    </AppBar>
  );
}

const drawerItemSx = {
  "& .MuiListItemText-primary": { fontWeight: 700, textTransform: "uppercase", fontSize: 15 },
  "&.Mui-selected, &.Mui-selected:hover": { bgcolor: cores.lavanda },
  "&:hover": { bgcolor: "rgba(255,255,255,.08)" },
} as const;
