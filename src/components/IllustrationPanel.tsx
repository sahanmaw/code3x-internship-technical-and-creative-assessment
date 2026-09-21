import { Box, Typography } from '@mui/material'
import illustration from '../assets/login-illustration.svg'

function IllustrationPanel() {
  return (
    <Box
      sx={{
        width: '95%',
        minHeight: 700,
        height: 'calc(100vh - 80px)',
        backgroundColor: '#f3f7ef',
        borderRadius: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 6,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={illustration}
        alt="Work organization illustration"
        sx={{
          width: '100%',
          maxWidth: 500,
          height: 'auto',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          my: 3,
          mt: 15,
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#c5c5c5',
          }}
        />

        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#c5c5c5',
          }}
        />

        <Box
          sx={{
            width: 20,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#000',
          }}
        />
      </Box>

      <Typography
        component="h2"
        sx={{
          fontSize: '1.75rem',
          fontWeight: 450,
          mb: 1,
        }}
      >
        Make your work easier and organized
        <br />
        with{' '}
        <Box component="span" sx={{ fontWeight: 550 }}>
          Tuga&apos;s App.
        </Box>{' '}
      </Typography>

    </Box>
  )
}

export default IllustrationPanel