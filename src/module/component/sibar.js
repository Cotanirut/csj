import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const items2 = [
  { key: '/view', label: 'งานวิจัยอาจารย์', icon: <UserOutlined /> },
  { key: '2', label: 'งานสัมมนา', icon: <LaptopOutlined /> },
  { key: '3', label: 'งานบุญ', icon: <NotificationOutlined /> },
  { key: '4', label: 'งานบวช', icon: <UserOutlined /> },
  { key: '5', label: 'งานเลี้ยงเพล', icon: <LaptopOutlined /> },
].map((item) => ({
  key: item.key,
  icon: item.icon,
  label: item.label,
}));

const Sibar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>

      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }]}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* เนื้อหาของหน้าจะแสดงที่นี่ */}
            56555
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Sibar;
