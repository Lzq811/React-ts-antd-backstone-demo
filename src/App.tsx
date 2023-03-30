import { Button, ConfigProvider } from 'antd';
import React from 'react';
import 'antd/dist/reset.css';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Button type="primary">Button</Button>
    <div>hello world</div>
  </ConfigProvider>
);

export default App;
