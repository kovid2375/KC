"use client";

import React from "react";
import styled from "styled-components";

interface TextRollingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const TextRollingButton = ({ text, className = "", onClick, ...props }: TextRollingButtonProps) => {
  const letters = text.split("");

  return (
    <StyledTextRollingWrapper className={className}>
      <button onClick={onClick} {...props}>
        <span className="span-mother" aria-hidden="true">
          {letters.map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </span>
        <span className="span-mother2">
          {letters.map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </span>
      </button>
    </StyledTextRollingWrapper>
  );
};

const StyledTextRollingWrapper = styled.div`
  display: inline-block;

  button {
    font-weight: bold;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    padding: 0 1.5rem;
    height: 42.66px;
    border: none;
    background-color: #3653f8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  button .span-mother {
    display: flex;
    overflow: hidden;
  }

  button:hover .span-mother {
    position: absolute;
  }

  button:hover .span-mother span {
    transform: translateY(1.2em);
  }

  button .span-mother span:nth-child(1) { transition: 0.2s; }
  button .span-mother span:nth-child(2) { transition: 0.3s; }
  button .span-mother span:nth-child(3) { transition: 0.4s; }
  button .span-mother span:nth-child(4) { transition: 0.5s; }
  button .span-mother span:nth-child(5) { transition: 0.6s; }
  button .span-mother span:nth-child(6) { transition: 0.7s; }
  button .span-mother span:nth-child(7) { transition: 0.8s; }
  button .span-mother span:nth-child(8) { transition: 0.9s; }
  button .span-mother span:nth-child(9) { transition: 1.0s; }

  button .span-mother2 {
    display: flex;
    position: absolute;
    overflow: hidden;
  }

  button .span-mother2 span {
    transform: translateY(-1.2em);
    transition: 0.2s;
  }

  button:hover .span-mother2 span {
    transform: translateY(0);
  }

  button .span-mother2 span:nth-child(2) { transition: 0.3s; }
  button .span-mother2 span:nth-child(3) { transition: 0.4s; }
  button .span-mother2 span:nth-child(4) { transition: 0.5s; }
  button .span-mother2 span:nth-child(5) { transition: 0.6s; }
  button .span-mother2 span:nth-child(6) { transition: 0.7s; }
  button .span-mother2 span:nth-child(7) { transition: 0.8s; }
  button .span-mother2 span:nth-child(8) { transition: 0.9s; }
  button .span-mother2 span:nth-child(9) { transition: 1.0s; }
`;

interface ExpandingCircleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const ExpandingCircleButton = ({ text, className = "", type, disabled, onClick, ...props }: ExpandingCircleButtonProps) => {
  return (
    <StyledExpandingCircleWrapper className={className}>
      <button className="learn-more" type={type} disabled={disabled} onClick={onClick} {...props}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </StyledExpandingCircleWrapper>
  );
};

const StyledExpandingCircleWrapper = styled.div`
  display: inline-block;

  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 13rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #fff;
  }
`;
