import { baseApi } from "../../../api/baseApi";

const adminMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmin: builder.query({
      query: () => ({
        url: "/auth/admins",
        method: "GET",
      }),
        providesTags: ["admin"],
    }),

    createAdmin: builder.mutation({
      query: (adminInfo) => ({
        url: "/auth/create/admin",
        method: "POST",
        body: adminInfo,
      }),
        invalidatesTags: ["admin"],
    }),
  }),
});

export const {useGetAllAdminQuery, useCreateAdminMutation} = adminMangementApi;