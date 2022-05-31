import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RecordI } from '../interfaces'

export const callrecAPI = createApi({
  reducerPath: 'profileAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://callrec.circle.cloud:9876`,
  }),
  endpoints: (build) => ({
    fetchRecordsData: build.mutation<{ records: RecordI[]; count: number }, void>({
      query: () => ({
        url: `/records?accountId=null&page=1&limit=6`,
        method: 'POST',
        body: {},
      }),
    }),
  }),
})
