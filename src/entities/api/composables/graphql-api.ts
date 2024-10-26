/* eslint-disable @typescript-eslint/no-explicit-any */

import { OperationVariables } from '@apollo/client';
import gql from 'graphql-tag';
import { apolloClient } from '@boot/apollo';
import {
  provideApolloClient,
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@vue/apollo-composable';
import { computed, ComputedRef, isRef, MaybeRef, ref, unref, watch } from 'vue';
import { getGraphqlBody } from '../helpers';
import {
  UseQueryOptions,
  VariablesParameter,
} from '@vue/apollo-composable/dist/useQuery';

provideApolloClient(apolloClient);

export default function useGraphqlApi(
  typeName: MaybeRef<string>,
  system: boolean
) {
  function getBody(
    body: MaybeRef<string> | ComputedRef<string | undefined>,
    operationName: string
  ) {
    const _body = ref('');

    if (isRef(body)) {
      watch(
        body,
        (body) => {
          _body.value = getGraphqlBody({
            typeName: unref(typeName),
            system,
            operationName,
            body,
          });
        },
        { immediate: true }
      );
    } else {
      _body.value = getGraphqlBody({
        typeName: unref(typeName),
        system,
        operationName,
        body,
      });
    }

    return _body;
  }

  function mutation<TResult = any, TVariables extends OperationVariables = any>(
    body: MaybeRef<string> | ComputedRef<string | undefined>,
    operationName: string,
    options?: UseMutationOptions<TResult, TVariables>
  ) {
    const _body = computed(() => {
      const b = getBody(body, operationName).value;
      return gql`
        ${b}
      `;
    });

    return useMutation<TResult, TVariables>(_body, options);
  }

  function query<TResult = any, TVariables extends OperationVariables = any>(
    body: MaybeRef<string> | ComputedRef<string | undefined>,
    operationName: string,
    variables?: VariablesParameter<TVariables>,
    options?: UseQueryOptions<TResult, TVariables>
  ) {
    const _body = computed(() => {
      const b = getBody(body, operationName).value;
      return gql`
        ${b}
      `;
    });

    if (!variables && !options) {
      return useQuery<TResult, TVariables>(_body);
    }

    if (variables && !options) {
      return useQuery<TResult, TVariables>(_body, variables);
    }

    if (variables && options) {
      return useQuery<TResult, TVariables>(_body, variables, options);
    }
  }

  return {
    mutation,
    query,
  };
}
