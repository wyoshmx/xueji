import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProTip from '@components/example/ProTip'
import Copyright from '@components/example/Copyright'
import HelloWorld from '@components/example/HelloWorld'
import Link from '@components/common/Link'
import type { TypeA } from '@types'

const Example: TypeA = {
  name: 'Next.js',
}

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + {Example.name} with TypeScript example
        </Typography>
        <div className="app">
          <div>Global SCSS</div>
          <HelloWorld />
        </div>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default Home
