import { useContext, useMemo } from 'react';

import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { ClioMessageAvatar } from 'assets/ClioMessageAvatar';

import {
  ChainlitContext,
  useChatSession,
  useConfig
} from '@chainlit/react-client';

interface Props {
  author?: string;
  hide?: boolean;
}

const MessageAvatar = ({ author, hide }: Props) => {
  const apiClient = useContext(ChainlitContext);
  const { chatProfile } = useChatSession();
  const { config } = useConfig();

  const selectedChatProfile = useMemo(() => {
    return config?.chatProfiles.find((profile) => profile.name === chatProfile);
  }, [config, chatProfile]);

  const avatarUrl = useMemo(() => {
    const isAssistant = !author || author === config?.ui.name;
    if (isAssistant && selectedChatProfile?.icon) {
      return selectedChatProfile.icon;
    }
    return apiClient?.buildEndpoint(`/avatars/${author || 'default'}`);
  }, [apiClient, selectedChatProfile, config, author]);

  return (
    <span className={`message-avatar`}>
      <Tooltip
        // title={author}
        title=""
      >
        <Avatar
          sx={{
            width: '32px',
            height: '21px',
            bgcolor: 'transparent'
          }}
        >
          {!hide && (<ClioMessageAvatar />)}
        </Avatar>
      </Tooltip>
    </span>
  );
};

export { MessageAvatar };
