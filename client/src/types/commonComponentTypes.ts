interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface CardProps {
  title: string;
  content: string;
}


export type { ButtonProps, InputProps, CardProps };