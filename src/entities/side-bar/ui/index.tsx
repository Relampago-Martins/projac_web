'use client';
import { cn } from '@/shared/lib/utils';
import { IonIcon } from '@/shared/ui/ion-icon';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useSidebarStore } from '../lib/sidebar-store';

type RootProps = {
    children: ReactNode;
    className?: string;
};

function SideBar({ children, className }: RootProps) {
    const [toggled, toggle] = useSidebarStore((state) => [
        state.isToggled,
        state.toggle,
    ]);
    return (
        <motion.aside
            animate={{}}
            className={cn(
                `${toggled ? 'w-20 min-w-20' : 'w-64 min-w-64'}`,
                className,
            )}
        >
            <div className="relative z-10 h-full overflow-y-auto overflow-x-hidden">
                <button onClick={() => toggle()} className="text-secondary">
                    <IonIcon name="menu-outline" size="large" />
                </button>
                {children}
            </div>
        </motion.aside>
    );
}
function SideBarHeader({ children }: RootProps) {
    return <div className="p-4">{children}</div>;
}

function SideBarContent({ children }: RootProps) {
    return (
        <nav className="p-4">
            <ul>{children}</ul>
        </nav>
    );
}

function SideBarFooter({ children }: RootProps) {
    return <div>{children}</div>;
}

type SideBarItemProps = {
    children: ReactNode;
    href: string;
    icon?: ReactNode;
};

function SideBarItem({ children, icon, href }: SideBarItemProps) {
    const sidebarIsToggled = useSidebarStore((state) => state.isToggled);
    return (
        <li className="text-sm font-medium opacity-85">
            <Link href={href} className="flex">
                {icon}
                {sidebarIsToggled ? null : children}
            </Link>
        </li>
    );
}

export { SideBar, SideBarContent, SideBarFooter, SideBarHeader, SideBarItem };
