import { Box, Container, Typography } from "@mui/material";
import { footerLink, sosialMedia } from "../utils/Dummydata";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="bg-background text-white min-h-[40vh]  px-2 pt-20 pb-10">
      <Container sx={{ display: "flex", alignItems: "center", gap: 4, flexDirection: "column" }}>
        <Box sx={{ display: "flex", gap: { xs: 2, sm: 5, md: 10 }, flexWrap: "wrap", flexDirection: { md: "row", xs: "column" }, pb: 6, pt: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img src={logo} className="w-72 h-24  bg-blend-color-burn" alt="Logo PenguHosting" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {sosialMedia.map((item) => (
                <a className={` text-yellow-500 transition duration-300 hover:text-yellow-300 p-2 text-3xl rounded-full`} href={item.url} key={item.name}>
                  {item.icon}
                </a>
              ))}
            </Box>
          </Box>
          {footerLink.map((item) => (
            <Box key={item.title} sx={{ display: "flex", flexDirection: "column", gap: { md: 2, xs: 1 } }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, textTransform: "capitalize", fontSize: 20 }} className="text-yellow-500">
                {item.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {item.link.map((lin) => (
                  <Link to={lin.href} className="capitalize hover:text-white/70 transition duration-200 flex flex-col " key={lin.name}>
                    <span className="text-sm">{lin.name}</span>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="border-t border-white/60 w-full pt-10 p-4 text-slate-200">
          <Typography variant="body2">Copyright © 2023 PenguHosting | Kliment Komendantov IT Dienstleistungen</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
