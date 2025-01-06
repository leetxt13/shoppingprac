import React, { useContext } from 'react';
import './Apptheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
export default function AppTheme() {
  return (
    <div>
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}
function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}
function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductsDetail />
    </div>
  );
}
function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode === true ? (
          <span
            style={{ backgroundColor: 'black', color: 'white' }}
            className="toggle"
          >
            Darkmode
          </span>
        ) : (
          <span>LightMode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
function Footer() {
  return <footer className="footer">Footer</footer>;
}
