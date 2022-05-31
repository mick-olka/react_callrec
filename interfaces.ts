export interface RecordI {
  _id: string
  from: string
  to: string
  caller_id_name: string
  caller_id_number: string
  tags: []
  fileName: string
  account_id: string
  start: number
  duration_ms: number
  recording_id: string
  starred: boolean
  tagged: boolean
  normalizedData: number[]
  record_url: string
}