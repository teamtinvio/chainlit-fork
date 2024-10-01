import Chat from 'chat';
import { useState } from 'react';
import { IWidgetConfig } from 'types';

import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';

import Header from 'components/Header';

interface Props {
  anchorEl?: HTMLElement | null;
  isOpen?: boolean;
  buttonHeight: string;
  config: IWidgetConfig;
  onClose: () => void;
}

export default function PopOver({
  anchorEl,
  isOpen,
  buttonHeight,
  config,
  onClose
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const customStyle = config.chatPopover?.style || {};

  return (
    <Popper
      id="chainlit-copilot-popover"
      open={!!isOpen}
      anchorEl={anchorEl}
      placement="top-end"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        inset: customStyle?.inset || `auto auto 14px 24px !important`,
        height: customStyle?.height || `min(730px, calc(100vh - ${buttonHeight} - 48px))`,
        width: expanded
          ? customStyle?.expandedWidth || '80vw'
          : customStyle?.width || 'min(400px, 80vw)',
        overflow: 'hidden',
        borderRadius: '12px',
        background: '#18212c',
        border: '1px solid #283441',
        boxShadow:
          '0 6px 6px 0 rgba(0,0,0,.02),0 8px 24px 0 rgba(0,0,0,.12)!important',
        zIndex: 900
      }}
    >
      <Fade in={!!anchorEl}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
          }}
        >
          <Header
            expanded={expanded}
            setExpanded={setExpanded}
            onMinimize={onClose}
          />
          <Chat />
        </Box>
      </Fade>
    </Popper>
  );
}
