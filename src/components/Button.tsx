/**
 * Componente Button - Fernanda Rocha Fotografia
 * Referência: designer.md §1.4
 * 
 * Variantes:
 * - Primary: fundo azul (#8DA4D0), texto branco
 * - Secondary: borda rosa (#F5C7C9), fundo transparente
 */

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  target,
  type = 'button',
  fullWidth = false,
  className = '',
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
    borderRadius: 'var(--radius-sm)',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.4s var(--ease-smooth)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
  };

  const primaryStyles: React.CSSProperties = {
    ...baseStyles,
    backgroundColor: '#8DA4D0',
    color: '#FFFFFF',
    borderColor: '#8DA4D0',
  };

  const secondaryStyles: React.CSSProperties = {
    ...baseStyles,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    borderColor: '#F5C7C9',
    border: '3px solid #F5C7C9',
  };

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  const hoverStyles = {
    primary: {
      backgroundColor: '#7089B8',
      borderColor: '#7089B8',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(141, 164, 208, 0.4)',
    },
    secondary: {
      backgroundColor: 'rgba(245, 199, 201, 0.15)',
      borderColor: '#F5C7C9',
      color: '#FFFFFF',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(245, 199, 201, 0.4)',
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget as HTMLElement;
    Object.assign(element.style, hoverStyles[variant]);
    
    // Animar ícone (Tutu School inspired)
    if (icon) {
      const iconElement = element.querySelector('.btn-icon') as HTMLElement;
      if (iconElement && iconPosition === 'right') {
        iconElement.style.transform = 'translateX(4px)';
      } else if (iconElement && iconPosition === 'left') {
        iconElement.style.transform = 'translateX(-4px)';
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      element.style.backgroundColor = '#8DA4D0';
      element.style.borderColor = '#8DA4D0';
      element.style.transform = 'none';
      element.style.boxShadow = 'none';
    } else {
      element.style.backgroundColor = 'transparent';
      element.style.borderColor = '#F5C7C9';
      element.style.color = '#FFFFFF';
      element.style.transform = 'none';
      element.style.boxShadow = 'none';
    }
    
    // Reset ícone
    if (icon) {
      const iconElement = element.querySelector('.btn-icon') as HTMLElement;
      if (iconElement) {
        iconElement.style.transform = 'translateX(0)';
      }
    }
  };

  const iconStyles: React.CSSProperties = {
    transition: 'transform 0.4s var(--ease-smooth)',
    display: 'flex',
    alignItems: 'center',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="btn-icon" style={iconStyles}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="btn-icon" style={iconStyles}>
          {icon}
        </span>
      )}
    </>
  );

  // Se for um link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        style={styles}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  // Se for um botão
  return (
    <button
      type={type}
      onClick={onClick}
      style={styles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}
