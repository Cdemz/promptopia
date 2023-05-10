import Nav from '@/components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
  title: 'promptopia',
  description: 'Discover & Share AI Prompts',
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />

          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
