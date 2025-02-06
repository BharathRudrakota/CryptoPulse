import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// crypto headers
let Cryptoheaders= {
    'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY,  //securing the api keys from users
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

// combining the base url and header for request to the server
const createRequest=(url)=>({url,headers:Cryptoheaders})


// base url
let baseUrl= 'https:coinranking1.p.rapidapi.com'



// Define a service using a base URL and expected endpoints
export const cryptoMarketsApi = createApi({
  reducerPath: 'cryptoMarketsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),   // linked with the base url to make the api request
  endpoints: (builder) => ({
    getcryptoMarkets: builder.query({
        query:()=>createRequest("/coins")  // fetches all the coins from api
    }),
    getcryptoStats: builder.query({
        query:()=>createRequest("/stats")   // fetches total coins stats like market cap total coins, total capital etc
    }),
    getcryptoDetails: builder.query({
        query:(coinId)=>createRequest(`/coin/${coinId}`)  // fetches all data of a single coin details required
    }),
    getcryptoHistory: builder.query({
        query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`)   // fetches the history of a perticular coin with time period 
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcryptoMarketsQuery, useGetcryptoStatsQuery, useGetcryptoDetailsQuery, useGetcryptoHistoryQuery } = cryptoMarketsApi