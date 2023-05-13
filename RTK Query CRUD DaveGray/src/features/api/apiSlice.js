import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  // Cache Tags and Automated re-fetching
  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      // TransformResponse biar nge list nya bener cuuy (data terakhir kali di tambahkan)
      transformResponse: res => res.sort((a,b) => b.id - a.id),
      // Providing cache data
      providesTags: ["Todos"],
    }),

    // Adding mutation
    // Untuk mengirim data update
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      // Invalidating cache data
      // for Data mutation
      invalidatesTags: ["Todos"],
    }),

    // Update
    UpdateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        // Put ketika ketika replasing full record
        // Patch ketika hanya update record nya aja
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Delete
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      // For auto re-fetching 
      invalidatesTags: ["Todos"],

    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
