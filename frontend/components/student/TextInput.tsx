"use client";
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Input from '@mui/joy/Input';

const StyledInput = styled('input')({
  border: 'none', // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: 0, // remove the native input padding
  paddingTop: '1em',
  flex: 1,
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus ~ label': {
    color: '#386641',
  },
  '&:-webkit-autofill': {
    alignSelf: 'stretch', // to fill the height of the root slot
  },
  '&:-webkit-autofill:not(* + &)': {
    marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
    paddingInlineStart: 'var(--Input-paddingInline)',
    borderTopLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    borderBottomLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Input-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & { label: string; placeholder: string; type: string }
>(function InnerInput({ label, placeholder, type, ...props }, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledInput type={type} {...props} ref={ref} id={id} placeholder={placeholder} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </React.Fragment>
  );
});

interface FloatingLabelInputProps {
  label: string;
  placeholder: string;
  type: string;
}

export default function TextInput({ label, placeholder, type }: FloatingLabelInputProps) {
  return (
    <Input
      color="success"
      slots={{ input: InnerInput }}
      slotProps={{ input: { label, placeholder, type } }}
      sx={{ 
        '--Input-minHeight': '56px',
        '--Input-radius': '10px',
        borderColor: '#ccc', // Default border color
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    />
  );
}
