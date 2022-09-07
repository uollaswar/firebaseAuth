import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/login">Login</Link> |{' '}
        <Link to="/signup">Signup</Link>
      </nav>
      <Outlet />
    </div>
  );
}
