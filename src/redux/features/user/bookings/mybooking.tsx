import { baseApi } from "../../../api/baseApi";


const userBookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyBookings: builder.query({
          query: () => ({
            url: "/bookings/user",
            method: "GET",
          }),
          providesTags: ["booking"],
        }),

        cancelBooking: builder.mutation({
            query: (id: string) => {
                return {
                    url: `/bookings/${id}`,
                    method: "PUT",
                }
            },
            invalidatesTags: ["booking"],
        }),


      }),
    
    
})

export const{ useGetMyBookingsQuery, useCancelBookingMutation } = userBookingApi;