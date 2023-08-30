import Button from '@mui/material/Button';

type ButtonProps = {
  startIcon:any ;
  label: string;
  onClick: (...args: any[]) => any;
};

export default function IconButton(props: ButtonProps) {
  const { startIcon, label, onClick } = props

  return <Button className='ms-2 my-2' startIcon={startIcon} onClick={onClick} variant="contained" fullWidth={true}>{label}</Button>
}