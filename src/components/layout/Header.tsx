// import { GetStartedDialog } from "@/components/layout/GetStartedDialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { getImageUrlPng } from "@/lib/utils";
import { NavLink } from "react-router";
import { Sidebar } from 'primereact/sidebar';
import { useState } from "react";

export const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <header className="bg-white shadow-sm sticky top-0 z-10 flex min-h-20 border-b bg-background/100 backdrop-blur pr-5 pl-5 sm:pr-1 sm:pl1">
            <nav className="w-full justify-between flex flex-row items-center gap-6">
                    <div className="flex items-center gap-6 md:gap-10">
                        <NavLink to={'/'}><img src={getImageUrlPng('logo', '1')} alt={'Logo'} className="h-20 w-25 object-cover" /></NavLink>
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-4 text-sm">
                            <NavLink to="/destination" className="hover" onClick={() => setVisible(false)}>Destination</NavLink>
                            <NavLink to="/things-to-do" className="hover" onClick={() => setVisible(false)}>Things To Do</NavLink>
                            <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Plan Your Trip</NavLink>
                            {/* <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Hire a Vehicle</NavLink>
                            <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Shopping</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-right gap-4 md:gap-5 text-sm pr-10">
                        <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Login</NavLink>
                    </div>
                    <div className="sm:hidden p-1">
                        <Sidebar visible={visible} position="right" className="bg-white" onHide={() => setVisible(false)}>
                        <div className="grid gap-4 text-sm">
                            <NavLink to="/destination" className="hover" onClick={() => setVisible(false)}>Destination</NavLink>
                            <NavLink to="/things-to-do" className="hover" onClick={() => setVisible(false)}>Things To Do</NavLink>
                            <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Plan Your Trip</NavLink>
                            {/* <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Hire a Vehicle</NavLink>
                            <NavLink to="/plan-your-trip" className="hover" onClick={() => setVisible(false)}>Shopping</NavLink> */}
                        </div>
                        </Sidebar>
                        <HamburgerMenuIcon onClick={() => setVisible(true)} className="hover:cursor-pointer" width={30} height={30}/>
                    </div>
                </nav>
            </header>
        </>
    )
}