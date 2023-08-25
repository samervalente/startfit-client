import { BellSimple, CaretDown, Envelope, Moon } from "@phosphor-icons/react";

export default function Topbar() {
  return (
    <div className="bg-white rounded-b-[20px] h-[75px] topbar-shadow flex items-center justify-between p-2">
      <div className="flex gap-x-5 text-sm">
        <span>
          Total de calorias: <strong>2500</strong>
        </span>
        <ul className="flex gap-x-2">
          <span>Proporção de macros: </span>
          <li className="border-r-2 pr-2 border-gray-600">
            <strong>C:</strong> 40% (1000 cal)
          </li>
          <li className="border-r-2 pr-2 border-gray-600">
            <strong>P:</strong> 40% (1000 cal)
          </li>
          <li>
            <strong>G:</strong> 20% (500 cal)
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-x-10 mr-[100px]">
        <BellSimple size={20} color="gray" />
        <Moon size={20} color="gray" />
        <Envelope size={20} color="gray" />
        <span className="flex items-center gap-x-1">
          <img src="/profile-test.png" width={32} height={32} />
          <CaretDown color="gray" />
          <h3 className="text-[#0f2d6d]">
            <strong>Olá, Samer!</strong>
          </h3>
        </span>
      </div>
    </div>
  );
}
