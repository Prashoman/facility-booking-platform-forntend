import { baseApi } from "../../../api/baseApi";

const userBookingProcessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableBookingsSlot: builder.query({
      query: (payload) => {
        const { date, facility } = payload;
        const params = new URLSearchParams();
        if (facility && date) {
          params.append("facility", facility);
          params.append("date", date);
        }else if(facility){
            params.append("facility", facility);
        }
        console.log({params});
        
        return {
          url: `/check-availability`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
    createBooking: builder.mutation({
      query: (payload) => ({
        url: "/bookings",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});
export const { useGetAvailableBookingsSlotQuery, useCreateBookingMutation } =
  userBookingProcessApi;
