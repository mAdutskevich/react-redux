import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`,
            keepUnusedDataFor: 180, // in seconds, during this time + 60sec redux rtk takes the same data from cache, but after this time it will fetch again
        }),
        getPost: builder.query({
            query: (postId) => `posts/${postId}`,
            // transformErrorResponse: (response, meta, arg) => {
            //     console.log('response', response);
            //     console.log('meta', meta);
            //     console.log('arg', arg);
            //     return response.message;
            // },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
