import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

// @ts-expect-error inlined
import clStyles from '@chainlit/app/src/App.css?inline';
import { IStep } from '@chainlit/react-client';

// @ts-expect-error inlined
import sonnerCss from './sonner.css?inline';
// @ts-expect-error inlined
import hljsStyles from 'highlight.js/styles/monokai-sublime.css?inline';

import AppWrapper from './src/appWrapper';
import { CopilotHandle, IWidgetConfig } from './src/types';

const id = 'chainlit-copilot';
let root: ReactDOM.Root | null = null;

declare global {
  interface Window {
    cl_shadowRootElement: HTMLDivElement;
    mountChainlitWidget: (
      config: IWidgetConfig,
      /**
       * If undefined, the default anchor will be used.
       */
      anchor?: HTMLElement | null,
      rootContainerId?: string,
      copilotHandle?: React.RefObject<CopilotHandle>,
      onOpen?: () => void,
      onClose?: () => void
    ) => void;
    unmountChainlitWidget: () => void;
    sendChainlitMessage: (message: IStep) => void;
  }
}

window.mountChainlitWidget = (
  config: IWidgetConfig,
  anchor?: HTMLElement | null,
  rootContainerId?: string,
  copilotHandle?: React.RefObject<CopilotHandle>,
  onOpen?: () => void,
  onClose?: () => void
) => {
  const container = document.createElement('div');
  container.id = id;

  const rootContainer = document.getElementById(rootContainerId || '') || document.body;

  rootContainer.appendChild(container);

  const shadowContainer = container.attachShadow({ mode: 'open' });
  const shadowRootElement = document.createElement('div');
  shadowRootElement.id = 'cl-shadow-root';
  shadowContainer.appendChild(shadowRootElement);

  const cache = createCache({
    key: 'css',
    prepend: true,
    container: shadowContainer
  });

  window.cl_shadowRootElement = shadowRootElement;

  root = ReactDOM.createRoot(shadowRootElement);
  root.render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <style type="text/css">
          {clStyles}
          {hljsStyles}
          {sonnerCss}
        </style>
        <AppWrapper
          ref={copilotHandle}
          widgetConfig={config}
          anchor={anchor}
          onOpen={onOpen}
          onClose={onClose}
        />
      </CacheProvider>
    </React.StrictMode>
  );
};

window.unmountChainlitWidget = () => {
  root?.unmount();
};

window.sendChainlitMessage = () => {
  console.info('Copilot is not active. Please check if the widget is mounted.');
};
