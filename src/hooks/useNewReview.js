import { useMutation, useApolloClient } from '@apollo/client';
import { NEW_REVIEW } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useState } from 'react';

export const useNewReview = () => {
  const [mutate] = useMutation(NEW_REVIEW);
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  const addReview = async ({ owner, name, rating, review }) => {
    try {
      const token = await authStorage.getAccessToken();
      const data = await mutate({
        variables: {
          review: {
            repositoryName: name,
            ownerName: owner,
            rating: Number(rating),
            text: review,
          },
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        },
      });
      await client.resetStore();
      return data;
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return [addReview];
};
