import PopOver from 'popover';
import { useState } from 'react';
import { IWidgetConfig } from 'types';

import Box from '@mui/material/Box';

import { CommandLineWithBorderIcon } from 'assets/CommandLineWithBorderIcon';

interface Props {
  anchor?: HTMLElement;
  isOpen?: boolean;
  config: IWidgetConfig;
  onClose?: () => void;
}

export default function Widget({ anchor, isOpen, config, onClose }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(anchor || null);
  const customStyle = config.button?.style || {};
  const buttonHeight = customStyle.height || customStyle.size || '44px';

  const isPopoverOpen = anchor ? isOpen : Boolean(anchorEl);

  const hanldeOnClose = () => {
    if (!anchor) {
      setAnchorEl(null);
    }

    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <PopOver
        anchorEl={anchorEl}
        buttonHeight={buttonHeight}
        config={config}
        onClose={hanldeOnClose}
      />
      {anchor || (
        <Box
          aria-label="open copilot"
          id="chainlit-copilot-button"
          sx={{
            minHeight: 'auto',
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setAnchorEl(anchorEl ? null : event.currentTarget)
          }
        >
          <CommandLineWithBorderIcon
            color={isPopoverOpen ? '#4D83E8' : '#4D617A'}
          />
        </Box>
      )}
    </>
  );
}
