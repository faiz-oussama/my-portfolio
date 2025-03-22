import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from './DarkModeProvider';

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    
  return (
    <StyledWrapper>
      <label className="theme">
        <input 
          type="checkbox" 
          checked={darkMode}
          onChange={toggleDarkMode}
          className="input" 
        />
        <svg className="icon icon-sun" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24}><circle cx={12} cy={12} r={5} /><line x1={12} x2={12} y1={1} y2={3} /><line x1={12} x2={12} y1={21} y2={23} /><line x1="4.22" x2="5.64" y1="4.22" y2="5.64" /><line x1="18.36" x2="19.78" y1="18.36" y2="19.78" /><line x1={1} x2={3} y1={12} y2={12} /><line x1={21} x2={23} y1={12} y2={12} /><line x1="4.22" x2="5.64" y1="19.78" y2="18.36" /><line x1="18.36" x2="19.78" y1="5.64" y2="4.22" /></svg>
        <svg className="icon icon-moon" viewBox="0 0 24 24"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" /></svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .theme {
    --bg-color: #111;
    --main-color: #fefefe;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--bg-color);
    border-radius: 100%;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .icon {
    position: absolute;
    top: calc(50% -13px);
    left: calc(50% -13px);
    width: 26px;
    height: 26px;
  }

  .icon.icon-moon {
    fill: var(--main-color);
  }

  .icon.icon-sun {
    stroke: var(--main-color);
    display: none;
  }

  .input:checked ~ .icon.icon-sun {
    display: block;
  }

  .input:checked ~ .icon.icon-moon {
    display: none;
  }

  .theme:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }`;

export default ToggleButton;
