import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderSection = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/movies">Movies</Link></Menu.Item>

      </Menu>
    </Header>
  );
}

export default HeaderSection;
