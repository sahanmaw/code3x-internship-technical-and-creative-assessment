import { Box, IconButton } from '@mui/material'
import { Apple, FacebookRounded, Google} from '@mui/icons-material'

function GoogleLogin() {
  const socialButtonStyle = {
    width: 55,
    height: 55,
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#222',
    },
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <IconButton
        aria-label="Continue with Google"
        sx={socialButtonStyle}
      >
        <Google
          sx={{
            fontSize: 23,
          }}
        />
      </IconButton>

      <IconButton
        aria-label="Continue with Apple"
        sx={socialButtonStyle}
      >
        <Apple
          sx={{
            fontSize: 22,
          }}
        />
      </IconButton>

      <IconButton
        aria-label="Continue with Facebook"
        sx={socialButtonStyle}
      >
        < FacebookRounded
          sx={{
            fontSize: 25,
          }}
        />
      </IconButton>
    </Box>
  )
}

export default GoogleLogin