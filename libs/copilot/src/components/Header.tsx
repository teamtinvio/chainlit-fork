import { IconButton, Stack } from '@mui/material';

import ExpandIcon from '@chainlit/app/src/assets/expand';
import CollapseIcon from '@chainlit/app/src/assets/minimize';

import { ClioLogo } from 'assets/ClioLogo';
import { MinimizeIcon } from 'assets/MinimizeIcon';

import NewChatButton from './NewChatButton';

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  onMinimize: () => void;
}

const Header = ({ expanded, setExpanded, onMinimize }: Props): JSX.Element => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    bgcolor="background.paper"
    sx={{
      padding: '14px 6px 14px 14px'
    }}
  >
    <ClioLogo />
    <Stack direction="row" alignItems="center" spacing={0}>
      <IconButton
        onClick={() => setExpanded(!expanded)}
        sx={{
          width: 36,
          height: 36
        }}
      >
        {expanded ? (
          <CollapseIcon sx={{ width: 16, height: 16 }} />
        ) : (
          <ExpandIcon sx={{ width: 16, height: 16 }} />
        )}
      </IconButton>
      <NewChatButton />
      <IconButton
        onClick={onMinimize}
        sx={{
          width: 36,
          height: 36
        }}
      >
        <MinimizeIcon width="16px" height="16px" />
      </IconButton>
    </Stack>
  </Stack>
);

export default Header;
