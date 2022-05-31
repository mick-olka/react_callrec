import { LinearProgress } from '@mui/material'

import { useEffect, useState } from 'react'

import './callrec.scss'

import Swal from 'sweetalert2'

import { ControlPane } from './parts/ControlPane'
import { RecordsPane } from './parts/RecordsPane'

import SortingPane from './parts/SortingPane'

import { callrecAPI } from '../api/callrec_api'
import { RecordI } from '../interfaces'

export const Callrec = () => {
  const filtered = false
  const [records, setRecords] = useState([] as RecordI[])
  const [chosen, setChosen] = useState([] as string[])
  const [fetchRecordsData, { data, isLoading, error }] = callrecAPI.useFetchRecordsDataMutation()
  useEffect(() => {
    fetchRecordsData()
  }, [])

  useEffect(() => {
    if (data && data.records) setRecords(data.records)
    if (error)
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try later',
        footer: '<a href="/">Main Page</a>',
      })
  }, [data, error])

  const handleDeletion = (idsArr?: string[]) => {
    console.log('delete')
  }
  return (
    <div className='content-wrapper'>
      {isLoading && <LinearProgress />}
      <div className={'content' + ' content'}>
        <div className={'head_pane'}>
          <SortingPane />
        </div>
        {filtered && (
          <div className='filter_results_info'>
            Filter results:
            <button id='clear_filter'>clear</button>
          </div>
        )}
        <ControlPane total={10} chosen={0} />
        <RecordsPane records={records} />
        <div id={'paginator_pane'}>
          <div className={'prev_page'} />
          <div id={'page_indexes_pane'}>
            <p>1</p>
          </div>
          <div className={'next_page'} />
        </div>
      </div>
    </div>
  )
}
