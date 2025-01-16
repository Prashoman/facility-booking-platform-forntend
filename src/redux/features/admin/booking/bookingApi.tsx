import { baseApi } from "../../../api/baseApi";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAdminBookings: builder.query({
          query: () => ({
            url: "/bookings",
            method: "GET",
          }),
          providesTags: ["facility"],
        }),
        getSingleFacilities: builder.query({
          query: (facilityId) => ({
            url: `/facility/${facilityId}`,
            method: "GET",
          }),
          providesTags: ["facility"],
        }),
        createFacility: builder.mutation({
          query: (facilityInfo) => ({
            url: "/facility",
            method: "POST",
            body: facilityInfo,
          }),
          invalidatesTags: ["facility"],
        }),
        updateFacility: builder.mutation({
          query: ({ id, updateFacility }) => ({
            url: `/facility/${id}`,
            method: "PUT",
            body: updateFacility,
          }),
          invalidatesTags: ["facility"],
        }),
        deleteFacility: builder.mutation({
          query: (facilityId) => ({
            url: `/facility/${facilityId}`,
            method: "DELETE",
          }),
          invalidatesTags: ["facility"],
        }),
      }),
})

export const{ useGetAllAdminBookingsQuery } = bookingApi;