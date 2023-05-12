// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
//   endpoints: (builder) => ({
//     getTodos: builder.query({
//       // anonymous function
//       // request semua todos pake http get method
//       query: () => "/todos",
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetTodosQuery } = apiSlice;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
//   endpoints: (builder) => ({
//     getTodos: builder.query({
//       query: () => "/todos",
//     }),
//   })
// })

// export const { useGetTodosQuery } = apiSlice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),

    // Adding mutation
    // Untuk mengirim data update
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
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
    }),

    // Delete
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
