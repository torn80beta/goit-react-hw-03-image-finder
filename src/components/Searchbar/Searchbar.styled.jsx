import styled from '@emotion/styled';

export const StyledSearForm = styled.form`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  gap: 20px;
  width: 100%;
  height: 59px;
  background-color: #221faf;
  border: #777371 solid 1px;
  border-radius: 4px;
  z-index: 1000;
`;

export const StyledLogo = styled.h3`
  display: inline;
  color: #ff853e;
  font-weight: 300;
  font-size: 30px;
  line-height: 0.65;
  font-family: 'Lobster', cursive;
`;

export const StyledInput = styled.input`
  width: 500px;
  height: 30px;
  padding: 0px 10px;
  border: 1px solid #2f2f37;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: 1px solid greenyellow;
  }
`;

export const StyledSearchButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 1.9rem;
  padding: calc(0.4rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  :focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
