import { theme } from '@styles/theme';
import { StylesConfig } from 'react-select';
import styled from 'styled-components';

export const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: theme.color.primary,
    height: '36px',
    padding: '0',
    minWidth: '200px',
    border: `1px solid ${theme.color.gray4}`,
    boxShadow: 'none',
    '&:hover': {
      borderColor: theme.color.gray4,
    },
    cursor: 'pointer',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0 20px',
    color: theme.color.gray2,
    overflow: 'auto',
    flexWrap: 'nowrap',
  }),
  input: (styles) => ({
    ...styles,
    margin: '0px',
    height: '36px',
    fontSize: '14px',
    fontWeight: 400,
    padding: '0',
    color: theme.color.gray2,
  }),

  placeholder: (styles) => ({
    ...styles,
    fontSize: '14px',
    fontWeight: 400,
    margin: '0',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: theme.color.gray2,
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    marginInline: '0px',
  }),
  menuList: (styles) => ({
    ...styles,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
  menu: (styles) => ({ ...styles, background: theme.color.primary, margin: '0', opacity: '1' }),
  option: (styles, state) => ({
    ...styles,
    background: state.isSelected ? theme.color.dark50 : theme.color.primary,
    opacity: state.isDisabled ? '0.8' : '1',
    color: theme.color.gray2,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 400,
    '&:hover': {
      background: theme.color.dark25,
    },
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: ' 0 12px',
    rotate: state.selectProps.menuIsOpen ? '180deg' : '0',
    transition: '0.2s',
  }),
  multiValue: (styles) => ({
    ...styles,
    background: theme.color.primary,
    color: theme.color.secondary,
  }),
};

export const ReactSelectContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ErrorMessage = styled.div`
  display: flex;
  color: ${theme.color.danger};

  > p {
    animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-left {
      0% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }
      100% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }
  }
`;
