import StopCircle from '@mui/icons-material/StopCircle';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import {
  useChatData,
  useChatInteract,
  useChatMessages
} from '@chainlit/react-client';

import { Translator } from 'components/i18n';

import { SendIcon } from 'assets/SendIcon';

interface SubmitButtonProps {
  disabled?: boolean;
  onSubmit: () => void;
}

const SubmitButton = ({ disabled, onSubmit }: SubmitButtonProps) => {
  const { loading } = useChatData();
  const { firstInteraction } = useChatMessages();
  const { stopTask } = useChatInteract();

  const handleClick = () => {
    stopTask();
  };

  return (
    <Box
      sx={{
        color: 'text.secondary'
      }}
    >
      {loading && firstInteraction ? (
        <Tooltip
          // title={
          //   <Translator path="components.organisms.chat.inputBox.SubmitButton.stopTask" />
          // }
          title=""
        >
          <IconButton
            id="stop-button"
            sx={{
              width: 36,
              height: 36
            }}
            onClick={handleClick}
          >
            <StopCircle />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          // title={
          //   <Translator path="components.organisms.chat.inputBox.SubmitButton.sendMessage" />
          // }
          title=""
        >
          <IconButton
            sx={{
              width: 36,
              height: 36
            }}
            disabled={disabled}
            color="inherit"
            onClick={onSubmit}
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export { SubmitButton };
