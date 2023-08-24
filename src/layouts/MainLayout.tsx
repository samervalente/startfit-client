import { PropsWithChildren } from "react";
import SideBar from "../components/Sidebar";
import Container from "../components/Container";
import Topbar from "../components/Topbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <SideBar />
      <div className="flex flex-col w-full">
        <Topbar />
        <div className="p-2">{children}</div>
      </div>
    </Container>
  );
}
