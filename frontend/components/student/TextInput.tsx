"use client"
import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';




// Then, pass it to `<CssVarsProvider theme={theme}>`.


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
  JSX.IntrinsicElements['textarea'] & { label: string }
>(function InnerTextarea(props, ref) {
  const { label, ...textareaProps } = props;
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...textareaProps} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </React.Fragment>
  );
});

export default function FloatingLabelTextarea({ label,placeholder }: { label: string,placeholder:string }) {
  return (
    <Textarea	
      color="success"
      slots={{ textarea: InnerTextarea }}
      slotProps={{ textarea: { placeholder, label } }}
      sx={{ 
        borderRadius: '6px',
        borderColor: '#ccc', // Default border color
        borderWidth: '1px',
        borderStyle: 'solid', 
      }}
    />
  );
}

