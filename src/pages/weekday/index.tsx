import { useParams } from "react-router-dom";
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

//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AsynchronousAutoComplete from "../../components/Autocomplete";
import AlimentTable from "../../components/AlimentTable";
import MenuModal from "../../components/MenuModal";

export default function WeekDay() {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //breadcrumbs
  const breadcrumbs = [
    <Link to={"/"}>Cronograma</Link>,
    <Link className="active" to="#">
      {id}
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
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Stack>
        <ul className="my-3 text-sm text-black-500 flex gap-x-3">
          <li>Quantidade de refeições: 6</li>
          <li>Total de carboidratos: 600g</li>
          <li>Total de proteinas: 600g</li>
          <li>Total de gorduras: 600g</li>
        </ul>
        <h3 className="font-bold">Todas as refeições</h3>

        <div className="flex bg gap-x-10">
          <div>
            <div className="main-shadow rounded-md  bg-white w-[30vw] h-[100px] flex">
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Patê de frango</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ textAlign: "start" }}>
                <AsynchronousAutoComplete />
                <AlimentTable />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Pão com ovo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AsynchronousAutoComplete />
                <AlimentTable />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Vitamina padrão</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AsynchronousAutoComplete />
                <AlimentTable />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Sanduichezin básico</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AsynchronousAutoComplete />
                <AlimentTable />
              </AccordionDetails>
            </Accordion>
          </MenuModal>
        </div>
      </Stack>
    </MainLayout>
  );
}
