import { DefaultExtensionType, FileIcon, defaultStyles } from 'react-file-icon';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  mime: string;
  children?: React.ReactNode;
}

const Attachment = ({ name, mime, children }: Props) => {
  const extension = (
    mime ? mime.split('/').pop() : 'txt'
  ) as DefaultExtensionType;

  return (
    <Box
      position="relative"
    >
      {children}
      <Stack
        sx={(theme) => ({
          height: '100%',
          maxHeight: '38px',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '11px',
          borderRadius: '6px',
          px: '11px',
          py: '7px',
          border: '1px solid #5470A6',
          color: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.text.primary,
          background: '#344663',
          width: 160,
          [theme.breakpoints.down('sm')]: {
            width: 'fit-content',
            maxWidth: 120
          }
        })}
      >
        <Box
          width='20px'
          height='24px'
        >
          <FileIcon
            {...defaultStyles[extension]}
            extension={extension}
          />
        </Box>
        <Typography
          sx={(theme) => ({
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontFamily: 'Inter,sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.5,
            mt: '1px',
            width: 127,
            [theme.breakpoints.down('sm')]: {
              width: 87
            }
          })}
        >
          {name}
        </Typography>
      </Stack>
    </Box>
  );
};
export { Attachment };
