import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.sass';

interface SidebarProps {
    pageWrapId: string,
    outerContainerId: string
}

export default function Sidebar(props: SidebarProps) {
    return (
        <Menu pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId}>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/services">
            Services
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/book">
            Book
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      )
}
