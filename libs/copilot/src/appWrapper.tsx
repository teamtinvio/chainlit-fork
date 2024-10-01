import React from 'react';
import { RecoilRoot } from 'recoil';

import App from 'app';
import { makeApiClient } from 'api';
import { WidgetContext } from 'context';
import { CopilotHandle, IWidgetConfig } from 'types';

import { i18nSetupLocalization } from '@chainlit/app/src/i18n';
import { ChainlitContext } from '@chainlit/react-client';

i18nSetupLocalization();
interface Props {
  widgetConfig: IWidgetConfig;
  anchor?: HTMLElement | null;
  onOpen?: () => void;
  onClose?: () => void;
}

const AppWrapper = React.forwardRef(({
  widgetConfig,
  anchor,
  onOpen,
  onClose,
}: Props, ref: React.Ref<CopilotHandle>) => {
  const apiClient = makeApiClient(widgetConfig.chainlitServer);

  return (
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <WidgetContext.Provider
          value={{
            accessToken: widgetConfig.accessToken
          }}
        >
          <App
            ref={ref}
            widgetConfig={widgetConfig}
            anchor={anchor}
            onOpen={onOpen}
            onClose={onClose}
          />
        </WidgetContext.Provider>
      </RecoilRoot>
    </ChainlitContext.Provider>
  );
});

export default AppWrapper;
