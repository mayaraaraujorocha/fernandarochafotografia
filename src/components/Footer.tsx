import React from 'react';

export function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f5f5f5', borderTop: '1px solid #ddd', marginTop: '2rem', textAlign: 'center' }}>
      <small>&copy; {new Date().getFullYear()} Fernanda Rocha Fotografia. Todos os direitos reservados.</small>
    </footer>
  );
}
