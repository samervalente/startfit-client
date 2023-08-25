import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./home.css";

const dias = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function Home() {
  const hoje = new Date();
  const navigate = useNavigate();
  const diaSemana = hoje.getDay();

  return (
    <MainLayout>
      <h2 className="my-3 font-semibold">Suas estatísticas</h2>
      <div className="h-[80px] flex gap-x-3 my-3">
        <div className="home-badge">
          <img src="/balanca.png" width={50} />
          <div>
            <h4>Peso</h4>
            <span>62Kg</span>
          </div>
        </div>
        <div className="home-badge">
          <img src="/altura.png" width={50} />
          <div>
            <h4>Altura</h4>
            <span>1.80m</span>
          </div>
        </div>
        <div className="home-badge">
          <img src="/imc.png" className="rounded" width={50} />
          <div>
            <h4>IMC</h4>
            <span>19.1 Kg/m²</span>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-4">
        <h2 className="font-semibold">Seu cronograma</h2>
        <h1 className="text-gray-500">
          Escolha um dia para montar ou visualizar seu cardápio
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {dias.map((dia, i) => (
          <div
            onClick={() => navigate(`/cronograma/${dia.toLowerCase()}`)}
            className={`border-2 rounded-lg h-[150px] flex items-center cursor-pointer justify-center hover:bg-green-primary  ${
              i === diaSemana
                ? "bg-orange-500 text-white animate-pulse"
                : "border-gray-300"
            }`}
          >
            {dia + `${i === diaSemana ? " (Hoje)" : ""}`}
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
