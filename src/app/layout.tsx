import React from 'react';
import Navbar from '../app/components/Navbar';
import './globals.css'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
        </header>

        <main>{children}</main>
        <Navbar/>
        <footer>
          <p>© 2025 MuriloVieira - Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
