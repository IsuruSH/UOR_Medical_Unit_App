"use client"
import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';


const StyledTextarea = styled(TextareaAutosize)({
  resize: 'none',
  border: 'none', // remove the native textarea border
  minWidth: 0, // remove the native textarea width
  outline: 0, // remove the native textarea outline
  padding: 0, // remove the native textarea padding
  paddingBlockStart: '1em',
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: 'auto',
  alignSelf: 'stretch',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  // specific to TextareaAutosize, cannot use '&:focus ~ label'
  '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus + textarea + label': {
    color: '#386641',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerTextarea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea'] & { label: string; placeholder: string }
>(function InnerTextarea({ label, placeholder, ...props }, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...props} ref={ref} id={id} placeholder={placeholder} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </React.Fragment>
  );
});

interface FloatingLabelTextareaProps {
  label: string;
  placeholder: string;
}

export default function TextAreaInput({ label, placeholder }: FloatingLabelTextareaProps) {
  return (
    <Textarea
      color="success"
      slots={{ textarea: InnerTextarea }}
      slotProps={{ textarea: { label, placeholder } }}
      sx={{ 
        borderRadius: '10px',
        borderColor: '#ccc', // Default border color
        borderWidth: '1px',
        borderStyle: 'solid', }}
    />
  );
}
