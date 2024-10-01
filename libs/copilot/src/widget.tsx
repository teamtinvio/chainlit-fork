import PopOver from 'popover';
import React, { useState } from 'react';
import { CopilotHandle, IWidgetConfig } from 'types';

import Box from '@mui/material/Box';

import { CommandLineWithBorderIcon } from 'assets/CommandLineWithBorderIcon';

interface Props {
  config: IWidgetConfig;
  /**
   * If undefined, the default anchor will be used.
   */
  anchor?: HTMLElement | null;
  onOpen?: () => void;
  onClose?: () => void;
}

const Widget = React.forwardRef(({
  config,
  anchor,
  onOpen,
  onClose
}: Props, ref: React.Ref<CopilotHandle>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(anchor || null);

  const customStyle = config.button?.style || {};
  const buttonHeight = customStyle.height || customStyle.size || '44px';

  const [isOpen, setIsOpen] = useState(false);

  React.useImperativeHandle(ref, () => ({
    setIsOpen: (value: ((prev: boolean) => boolean) | boolean) => {
      if (typeof value === 'boolean') {
        value ? handleOpen() : handleClose();
        return;
      }

      const newIsOpen = value(isOpen);

      newIsOpen ? handleOpen() : handleClose();
    },
  }));

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <>
      <PopOver
        anchorEl={anchorEl}
        isOpen={isOpen}
        buttonHeight={buttonHeight}
        config={config}
        onClose={handleClose}
      />
      {!anchor && (
        <Box
          ref={(node: HTMLElement | null) => setAnchorEl(node)}
          aria-label="open copilot"
          id="chainlit-copilot-button"
          sx={{
            minHeight: 'auto',
            position: customStyle?.position || 'fixed',
            bottom: customStyle?.bottom || '24px',
            left: customStyle?.left || '24px',
            top: customStyle?.top || 'auto',
            right: customStyle?.right || 'auto',
            zIndex: 900,
            cursor: 'pointer'
          }}
          onClick={() =>
            isOpen ? handleClose() : handleOpen()
          }
        >
          {anchor === undefined && (
            <CommandLineWithBorderIcon
              color={isOpen ? '#4D83E8' : '#4D617A'}
            />
          )}
        </Box>
      )}
      {anchor}
    </>
  );
});

export default Widget;