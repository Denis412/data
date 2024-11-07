import {
  ApolloClientOptions,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import type { BootFileParams } from '@quasar/app-vite';
import { setContext } from '@apollo/client/link/context';

export /* async */ function getClientOptions(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  /* {app, router, ...} */ options?: Partial<BootFileParams<any>>
) {
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API_URL || '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    const context = { headers: { ...headers } };

    if (token) context.headers.authorization = `Bearer ${token}`;
    if (!headers?.space)
      context.headers.space = import.meta.env.VITE_MAIN_SPACE;
    if (headers.space === -1 || headers.space === '-1') delete headers.space;

    return context;
  });

  const link = concat(
    authLink,
    // ApolloLink.split(
    //   (operation) => operation.getContext().hasUpload,
    //   uploadLink,
    //   httpLink
    // )
    httpLink
  );

  return <ApolloClientOptions<unknown>>Object.assign(
    // General options.
    <ApolloClientOptions<unknown>>{
      link,
      cache: new InMemoryCache(),
    },

    // Specific Quasar mode options.
    process.env.MODE === 'spa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'ssr'
      ? {
          //
        }
      : {},
    process.env.MODE === 'pwa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'bex'
      ? {
          //
        }
      : {},
    process.env.MODE === 'cordova'
      ? {
          //
        }
      : {},
    process.env.MODE === 'capacitor'
      ? {
          //
        }
      : {},
    process.env.MODE === 'electron'
      ? {
          //
        }
      : {},

    // dev/prod options.
    process.env.DEV
      ? {
          //
        }
      : {},
    process.env.PROD
      ? {
          //
        }
      : {},

    // For ssr mode, when on server.
    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
          ssrMode: true,
        }
      : {},
    // For ssr mode, when on client.
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100,
        }
      : {}
  );
}
