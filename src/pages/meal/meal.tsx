import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import MenuCard from "../../components/MenuCard";
import { ArrowBack } from "@mui/icons-material";

export default function Meal() {
  const { weekday, meal } = useParams();
  const navigate = useNavigate();

  //breadcrumbs
  const breadcrumbs = [
    <ArrowBack
      onClick={() => navigate(`/cronograma/${weekday}`)}
      className="cursor-pointer"
    />,
    <Link to={"/"}>Cronograma</Link>,
    <Link to={`/cronograma/${weekday}`}>{weekday}</Link>,
    <Link className="active" to="#">
      Café da manhã
    </Link>,
  ];

  return (
    <MainLayout>
      <Stack spacing={2} className="mb-3">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Stack>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </Stack>
    </MainLayout>
  );
}
