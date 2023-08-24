import { BellSimple, CaretDown, Envelope, Moon } from "@phosphor-icons/react";
import branding from "../config/branding";

export default function Topbar() {
  return (
    <div className="bg-white rounded-b-[20px] h-[75px] topbar-shadow flex items-center justify-between p-2">
      <h3 className="text-[#0f2d6d]">
        <strong>Olá, Samer!</strong>
      </h3>
      <div className="flex items-center gap-x-10 mr-[100px]">
        <BellSimple size={20} color="gray" />
        <Moon size={20} color="gray" />
        <Envelope size={20} color="gray" />
        <span className="flex items-center gap-x-1">
          <img src="/profile-test.png" width={32} height={32} />
          <CaretDown color="gray" />
        </span>
      </div>
    </div>
  );
}
