import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

function TokenPage() {
  const location = useLocation()

  const accessToken = location.state?.accessToken

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: '2rem',
            fontWeight: 600,
            mb: 3,
          }}
        >
          Access Token
        </Typography>

        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: '#f5f5f5',
            overflowWrap: 'anywhere',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.9rem',
            }}
          >
            {accessToken || 'No access token available.'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TokenPage