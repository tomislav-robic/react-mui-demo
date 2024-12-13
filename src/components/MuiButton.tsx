import { Stack, Button } from "@mui/material"

interface MuiButtonProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MuiButton: React.FC<MuiButtonProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' onClick={toggleTheme}>
            Theme: {isDarkMode ? 'dark' : 'light'}
          </Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='text'>Text</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>Primary</Button>
          <Button variant='contained' color='secondary'>Secondary</Button>
          <Button variant='contained' color='error'>Error</Button>
          <Button variant='contained' color='warning'>Warning</Button>
          <Button variant='contained' color='info'>Info</Button>
          <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' disabled>Disabled</Button>
          <Button variant='contained' color='primary' disabled>Disabled</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' size='small'>Small</Button>
          <Button variant='contained' size='medium'>Medium</Button>
          <Button variant='contained' size='large'>Large</Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default MuiButton
