
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Inform from './components/Inform';
import Act from './components/Act';
import Plan from './components/Plan';
import Vote from './components/Vote';
import Merchants from './components/Merchants';
import Mairie from './components/Mairie';
import Profile from './components/Profile';
import AIChat from './components/AIChat';
import { NavPage } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavPage>(NavPage.DASHBOARD);

  const renderContent = () => {
    switch (currentPage) {
      case NavPage.DASHBOARD:
        return <Dashboard setPage={setCurrentPage} />;
      case NavPage.INFORM:
        return <Inform />;
      case NavPage.ACT:
        return <Act />;
      case NavPage.PLAN:
        return <Plan />;
      case NavPage.VOTE:
        return <Vote />;
      case NavPage.MERCHANTS:
        return <Merchants />;
      case NavPage.MAIRIE:
        return <Mairie />;
      case NavPage.PROFILE:
        return <Profile />;
      default:
        return <Dashboard setPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      {renderContent()}
      <AIChat />
    </Layout>
  );
};

export default App;
