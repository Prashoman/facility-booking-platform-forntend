import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => ({
        url: "/facility",
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
    getPopularFacilites: builder.query({
      query: () => ({
        url: "/popular/facility",
        method: "GET",
      }),
      providesTags: ["facility"],
    }),
    createFacility: builder.mutation({
      query: (facilityInfo) => {
        return {
          url: "/facility",
          method: "POST",
          body: facilityInfo,
        };
      },
      invalidatesTags: ["facility"],
    }),
    updateFacility: builder.mutation({
      query: ({ id, updateFacility }) => {
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: updateFacility,
        };
      },
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
});

export const {
  useCreateFacilityMutation,
  useGetFacilitiesQuery,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetSingleFacilitiesQuery,
  useGetPopularFacilitesQuery
} = facilityApi;
