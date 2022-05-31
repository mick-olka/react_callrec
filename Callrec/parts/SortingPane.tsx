import moment from 'moment'

import React, { useState } from 'react'

import 'bootstrap-daterangepicker/daterangepicker.css'

import DateRangePicker from 'react-bootstrap-daterangepicker'

import { ExtendedSearch } from './ExtendedSearch'
import '../callrec.scss'

function SortingPane() {
  const [extended, setExtended] = useState(false)
  const [dates, setDates] = useState('')
  const [query, setQuery] = useState('')
  const handleOpenExtended = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setExtended(!extended)
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit filter')
  }
  const drps = {
    // startDate: moment().startOf('day'),
    // endDate: moment().endOf('day'),
    autoUpdateInput: false,
    locale: {
      format: 'DD/M/YY',
      daysOfWeek: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      cancelLabel: 'Clear',
    },
    showDropdowns: true,
    //autoApply: true,
    maxDate: new Date(new Date().getTime() + 360000 * 24),
    alwaysShowCalendars: true,
    ranges: {
      Today: [moment(), moment().add(1, 'days')],
      Yesterday: [moment().subtract(1, 'days'), moment()],
      'Last 7 Days': [moment().subtract(7, 'days'), moment().add(1, 'days')],
      'Last 30 Days': [moment().subtract(30, 'days'), moment().add(1, 'days')],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month'),
      ],
    },
  }
  return (
    <div className={'sorting_pane'}>
      <form onSubmit={submitHandler} id={'filter_block_form'}>
        <div className={'inputs_wrapper'}>
          <div className={'date_range_block'}>
            <h3>Date</h3>
            <div className={'date_range_input'}>
              <label>
                <DateRangePicker
                  onCancel={(e, p) => {
                    p.element.val('')
                  }}
                  onApply={(event, picker) => {
                    picker.element.val(
                      picker.startDate.format('MM/DD/YY') +
                        ' - ' +
                        picker.endDate.format('MM/DD/YY'),
                    )
                    console.log(picker.element.val())
                  }}
                  initialSettings={drps}
                >
                  <input type='text' placeholder={'Select date range...'} />
                </DateRangePicker>
              </label>
            </div>
          </div>
          <div className={'search_reg_block'}>
            <h3>Search</h3>
            <div>
              <label>
                <input
                  id={'query_input'}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                  }}
                  type='text'
                  placeholder='Search numbers or tags...'
                />
              </label>
            </div>
          </div>
          <button id={'filter_btn'}>SEARCH</button>
          <button onClick={handleOpenExtended} id={'extended_filter_btn'} className={'hinted'}>
            <b>{extended ? '-' : '+'}</b> <span className={'hint'}> Extended search </span>
          </button>
        </div>
        <ExtendedSearch opened={extended} />
      </form>
    </div>
  )
}

export default SortingPane
