import { Gear, House, Question, Table } from "@phosphor-icons/react";
import branding from "../config/branding";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-green-primary w-[250px] text-sm rounded-l-[20px] mr-4 flex flex-col items-center justify-between sidebar">
      <div className="w-full flex flex-col items-center">
        <img src={branding.logoUrl} width={100} className="rounded-full" />
        <ul className="flex flex-col gap-y-3 mt-5 w-full">
          <li>
            <Link to="/">
              <House size={24} weight="fill" className="icon" />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/ficha">
              <Table size={24} weight="fill" className="icon" />
              <span>Ficha de dieta</span>
            </Link>
          </li>
          <li>
            <Link to="/configuracoes">
              <Gear size={24} weight="fill" className="icon" />
              <span>Configurações</span>
            </Link>
          </li>
          <li>
            <Link to="/duvidas">
              <Question size={24} weight="fill" className="icon" />
              <span>Dúvidas</span>
            </Link>
          </li>
        </ul>
      </div>
      <h4 className="text-center text-white text-sm">
        Feito por <br />
        {branding.poweredBy}
      </h4>
    </div>
  );
}
