"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { routes, routesTeacher } from "./AppSidebar.data";
import Image from "next/image";


export function AppSidebar() {
    const { state } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="bg-white">
                <SidebarHeader>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="Academy Logo"
                            width={85}
                            height={85}
                        />
                        {state === "expanded" && (
                            <span className="text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                                Lirys Academy
                            </span>
                        )}
                    </Link>
                </SidebarHeader>

                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu className="space-y-2">
                        {routes.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <div className="p-1 rounded-lg text-white bg-violet-400">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {state === "expanded" && <span>{item.title}</span>}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                        )}
                    </SidebarMenu>
                    <SidebarMenu className="mt-4">
                        <SidebarGroupLabel>Professor</SidebarGroupLabel>
                        <SidebarMenuItem>
                            <SidebarMenuSub>
                                {routesTeacher.map((item) => (
                                    <SidebarMenuSubItem key={item.title}>
                                        <SidebarMenuSubButton
                                            href={item.url}
                                            className="hover:bg-muted transition"
                                        >
                                            <div className="p-1 rounded-lg text-white bg-slate-400">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            {item.title}
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
