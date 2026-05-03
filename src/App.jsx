import React from 'react';
import { Helmet } from 'react-helmet';

import { Provider } from './Store';
import Routes from './Routes';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './extra/nova-light.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import './extra/layout.css'; // Sigma theme from primereact
import './extra/blueberry-orange.css'; // Custom theme made by me
import './App.css'; // Is for testing CSS

const app_name = process.env.REACT_APP_APP_NAME || 'Expense Tracker';
const app_description = 'Track and manage your personal expenses with the Expense Tracker app.';

const App = () => (
  <Provider>
    <Helmet
      defaultTitle={app_name}
      titleTemplate={`%s | ${app_name}`}
      meta={[
        { name: 'title', content: `${app_name} - Personal budget and expense management` },
        { name: 'description', content: app_description },
        {
          name: 'keywords',
          content: 'expense,tracker,personal finance,budget'
        },
        { name: 'og:url', content: 'https://github.com/technodivs/Expense-tracker' },
        { property: 'og:image', content: 'https://raw.githubusercontent.com/technodivs/Expense-tracker/main/public/assets/logo.png' }
      ]}
    />
    <Routes />
  </Provider>
);

export default App;
