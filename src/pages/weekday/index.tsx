import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import MenuModal from "../../components/MenuModal";
import MenuCard from "../../components/MenuCard";
import { ArrowBack } from "@mui/icons-material";

export default function WeekDay() {
  const { weekday } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  //breadcrumbs
  const breadcrumbs = [
    <ArrowBack onClick={() => navigate(`/`)} className="cursor-pointer" />,
    <Link to={"/"}>Cronograma</Link>,
    <Link className="active" to="#">
      {weekday}
    </Link>,
  ];

  //longMenu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { value: "Deletar", icon: <DeleteIcon fontSize="small" /> },
    { value: "Editar", icon: <EditIcon fontSize="small" /> },
  ];

  return (
    <MainLayout>
      <Stack spacing={2} className="mb-3">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Stack>
        <h3 className="font-bold">Todas as refeições (1)</h3>

        <div className="flex bg gap-x-10">
          <div>
            <div
              className="main-shadow rounded-md bg-white w-[30vw] h-[100px] flex"
              onClick={() => navigate(`/cronograma/${weekday}/cafe-da-manha`)}
            >
              <div className="flex items-center p-2 rounded-l-md bg-[#2FBBDA] text-white">
                7:00
              </div>
              <div
                className="w-full flex flex-col items-center p-3 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="font-bold">Café da manhã</span>
                <div className="flex justify-around my-2 w-full gap-x-8">
                  <div className="flex flex-col gap-y-1 text-sm">
                    <label>Carbos</label>
                    <span className="rounded-lg bg-orange-500 text-white shadow-lg text-center">
                      200g
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1 text-sm">
                    <label>Proteinas</label>
                    <span className="rounded-lg bg-orange-500 text-white shadow-lg text-center">
                      150g
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1 text-sm">
                    <label>Gorduras</label>
                    <span className="rounded-lg bg-orange-500 text-white shadow-lg text-center">
                      100g
                    </span>
                  </div>
                </div>
              </div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                sx={{ width: 25, height: 25, margin: 1 }}
                onClick={openMenu}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    selected={option.value === "Pyxis"}
                    sx={{ fontSize: 14 }}
                    onClick={handleClose}
                  >
                    {option.icon}
                    {option.value}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
          <MenuModal
            openMenuModal={isMenuOpen}
            setOpenMenuModal={setIsMenuOpen}
            modal_title="Cardápios - Café da manhã (7:00) - Quinta Feira"
          >
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </MenuModal>
        </div>
      </Stack>
    </MainLayout>
  );
}
