import { PropsWithChildren } from "react";



export default function Container({children}: PropsWithChildren){
    return (
        <main className="w-[100vw] min-h-screen p-4 bg-[#F3F5FB] flex">
            {children}
        </main>
    )
}