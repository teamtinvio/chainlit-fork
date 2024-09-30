import { useCallback, useEffect, useMemo } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useRecoilState, useRecoilValue } from 'recoil';
import { toast } from 'sonner';

import { IconButton, Tooltip } from '@mui/material';

import { askUserState, useAudio, useConfig } from '@chainlit/react-client';

import { Translator } from 'components/i18n';

import { MicrophoneIcon } from 'assets/MicrophoneIcon';

import { attachmentsState } from 'state/chat';

import RecordScreen from './RecordScreen';

interface Props {
  disabled?: boolean;
}

const MicButton = ({ disabled }: Props) => {
  const askUser = useRecoilValue(askUserState);
  const { config } = useConfig();
  const {
    startRecording: _startRecording,
    isRecording,
    isSpeaking,
    isRecordingFinished,
    error
  } = useAudio(config?.features.audio);
  const [attachments, setAttachments] = useRecoilState(attachmentsState);

  disabled = disabled || !!askUser;

  useEffect(() => {
    if (isRecordingFinished) setAttachments([]);
  }, [isRecordingFinished]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const fileReferences = useMemo(() => {
    return attachments
      ?.filter((a) => !!a.serverId)
      .map((a) => ({ id: a.serverId! }));
  }, [attachments]);

  const startRecording = useCallback(() => {
    if (disabled) return;
    _startRecording(fileReferences);
  }, [_startRecording, fileReferences, disabled]);

  useHotkeys('p', startRecording);

  if (!config?.features.audio.enabled) return null;

  return (
    <>
      <RecordScreen open={isRecording} isSpeaking={isSpeaking} />
      <Tooltip
        title={
          <Translator
            path="components.organisms.chat.inputBox.speechButton.start"
            suffix=" (P)"
          />
        }
      >
        <span>
          <IconButton
            disabled={disabled || isRecording}
            color="inherit"
            sx={{
              width: 36,
              height: 36,
              ':hover': {
                'svg > path': {
                  stroke: 'white'
                }
              }
            }}
            onClick={startRecording}
          >
            <MicrophoneIcon />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
};
export default MicButton;
