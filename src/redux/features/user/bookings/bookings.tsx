import { baseApi } from "../../../api/baseApi";


const userBookingProcessApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableBookingsSlot: builder.query({
            query: (payload) => ({
                url: "/check-availability",
                method: "GET",
                params: payload,
            }),
            providesTags: ["booking"],
        }),
        createBooking: builder.mutation({
            query: (payload) => ({
                url: "/bookings",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["booking"],
        })
    })
})
export const{ useGetAvailableBookingsSlotQuery, useCreateBookingMutation } = userBookingProcessApi;