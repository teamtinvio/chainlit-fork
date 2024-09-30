import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import 'regenerator-runtime';

import { Box, Stack, TextField } from '@mui/material';

import { useTranslation } from '@chainlit/app/src/components/i18n/Translator';
import { Attachments } from '@chainlit/app/src/components/molecules/attachments';
import MicButton from '@chainlit/app/src/components/organisms/chat/inputBox/MicButton';
import { SubmitButton } from '@chainlit/app/src/components/organisms/chat/inputBox/SubmitButton';
import UploadButton from '@chainlit/app/src/components/organisms/chat/inputBox/UploadButton';
import { IAttachment, attachmentsState } from '@chainlit/app/src/state/chat';
import { inputHistoryState } from '@chainlit/app/src/state/userInputHistory';
import { FileSpec, useChatData } from '@chainlit/react-client';

interface Props {
  fileSpec: FileSpec;
  onFileUpload: (payload: File[]) => void;
  onFileUploadError: (error: string) => void;
  onSubmit: (message: string, attachments?: IAttachment[]) => void;
  onReply: (message: string) => void;
}

function getLineCount(el: HTMLDivElement) {
  const textarea = el.querySelector('textarea');
  if (!textarea) {
    return 0;
  }
  const lines = textarea.value.split('\n');
  return lines.length;
}

const Input = memo(
  ({ fileSpec, onFileUpload, onFileUploadError, onSubmit, onReply }: Props) => {
    const [attachments, setAttachments] = useRecoilState(attachmentsState);
    const setInputHistory = useSetRecoilState(inputHistoryState);

    const ref = useRef<HTMLDivElement>(null);
    const { loading, askUser, disabled: _disabled } = useChatData();

    const [value, setValue] = useState('');
    const [isComposing, setIsComposing] = useState(false);

    const disabled = _disabled || !!attachments.find((a) => !a.uploaded);

    const { t } = useTranslation();

    useEffect(() => {
      const pasteEvent = (event: ClipboardEvent) => {
        if (event.clipboardData && event.clipboardData.items) {
          const items = Array.from(event.clipboardData.items);
          items.forEach((item) => {
            if (item.kind === 'file') {
              const file = item.getAsFile();
              if (file) {
                onFileUpload([file]);
              }
            }
          });
        }
      };

      if (!ref.current) {
        return;
      }

      const input = ref.current;
      input.addEventListener('paste', pasteEvent);

      return () => {
        input.removeEventListener('paste', pasteEvent);
      };
    }, []);

    useEffect(() => {
      if (ref.current && !loading && !disabled) {
        ref.current.focus();
      }
    }, [loading, disabled]);

    const submit = useCallback(() => {
      if (value === '' || disabled) {
        return;
      }

      if (askUser) {
        onReply(value);
      } else {
        onSubmit(value, attachments);
      }

      setAttachments([]);
      setValue('');
    }, [
      value,
      disabled,
      setValue,
      askUser,
      attachments,
      setAttachments,
      onSubmit
    ]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          if (!isComposing) {
            e.preventDefault();
            submit();
          }
        } else if (e.key === 'ArrowUp') {
          const lineCount = getLineCount(e.currentTarget as HTMLDivElement);
          if (lineCount <= 1) {
            setInputHistory((old) => ({ ...old, open: true }));
          }
        }
      },
      [submit, setInputHistory, isComposing]
    );

    return (
      <>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#23303F',
            borderRadius: '8px',
            margin: '0 16px 16px 16px',
            padding: '8px',
            textarea: {
              maxHeight: '30vh',
              overflowY: 'auto !important',
              resize: 'none',
              color: 'text.primary',
              lineHeight: '24px',
              margin: '0 8px 1px 8px'
            },
            '& > div > div': {
              alignItems: 'center',
              padding: 0
            }
          }}
          justifyContent="center"
        >
          {attachments.length > 0 ? (
            <Box alignSelf={'flex-start'} padding="8px 8px 16px 8px">
              <Attachments />
            </Box>
          ) : null}
          <TextField
            inputRef={ref}
            id="copilot-chat-input"
            multiline
            variant="standard"
            autoComplete="false"
            placeholder={t(
              'components.organisms.chat.inputBox.input.placeholder'
            )}
            disabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            value={value}
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                pl: 0,
                width: '100%'
              },
              startAdornment: (
                <Stack direction="row" alignItems="center">
                  <UploadButton
                    disabled={disabled}
                    fileSpec={fileSpec}
                    onFileUploadError={onFileUploadError}
                    onFileUpload={onFileUpload}
                  />
                  <MicButton disabled={disabled} />
                </Stack>
              ),
              endAdornment: (
                <Box>
                  <SubmitButton
                    onSubmit={submit}
                    disabled={disabled || (!loading && !value)}
                  />
                </Box>
              )
            }}
          />
        </Stack>
      </>
    );
  }
);

export default Input;
