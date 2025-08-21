import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from 'next/navigation';
import { Section } from '../../layout/section';

type ProjectErrorProps = {
  error?: Error;
  resetError?: () => void;
};

export function ProjectError({ error, resetError }: ProjectErrorProps) {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleRetry = () => {
    if (resetError) {
      resetError();
    } else {
      window.location.reload();
    }
  };

  return (
    <Section
      microdata={{
        itemScope: true,
        itemType: 'https://schema.org/WebPage',
      }}
      ariaLabel="Project loading error"
      role="alert"
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '60vh',
            py: 6,
            textAlign: 'center',
          }}
        >
          <Paper
            sx={{
              backgroundColor: 'background.paper',
              border: 'none',
              borderRadius: 3,
              p: 6,
              width: '100%',
            }}
            elevation={0}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <ErrorOutlineIcon
                sx={{
                  color: 'error.main',
                  fontSize: 72,
                }}
                aria-hidden="true"
              />
            </Box>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                mb: 2,
              }}
              component="h1"
              variant="h4"
              gutterBottom
            >
              Oops! Something went wrong
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                mb: 4,
              }}
              variant="body1"
            >
              We&apos;re sorry, but there was an error loading this project. This could be due to a
              temporary network issue or the project might not be available at the moment.
            </Typography>

            {error && process.env.NODE_ENV === 'development' && (
              <Paper
                sx={{
                  backgroundColor: 'grey.50',
                  mb: 4,
                  overflow: 'auto',
                  p: 2,
                  textAlign: 'left',
                }}
                variant="outlined"
              >
                <Typography
                  sx={{
                    color: 'error.main',
                    display: 'block',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    whiteSpace: 'pre-wrap',
                  }}
                  variant="caption"
                >
                  {error.stack && `\n${error.stack}`}
                </Typography>
              </Paper>
            )}

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
              }}
            >
              <Button
                sx={{
                  minWidth: 140,
                }}
                color="tertiary"
                onClick={handleRetry}
                size="large"
                startIcon={<RefreshIcon />}
                variant="contained"
              >
                Try Again
              </Button>
              <Button
                sx={{
                  minWidth: 140,
                }}
                color="tertiary"
                onClick={handleGoHome}
                size="large"
                startIcon={<HomeIcon />}
                variant="outlined"
              >
                Go Home
              </Button>
            </Box>

            <Typography
              sx={{
                color: 'text.secondary',
                display: 'block',
                mt: 3,
              }}
              variant="subtitle1"
            >
              If the problem persists, please contact our support team or try again later.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Section>
  );
}
