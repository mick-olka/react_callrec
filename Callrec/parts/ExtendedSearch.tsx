import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  Autocomplete,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import React, { useState } from 'react'

import '../callrec.scss'

interface Props {
  opened: boolean
}

export const ExtendedSearch: React.FC<Props> = ({ opened }) => {
  const [checked, setChecked] = useState(false)
  const [callsType, setCallsType] = useState('all')
  const [data, setData] = useState({
    from: '',
    to: '',
    fromTime: '00:00',
    toTime: '23:59',
  })
  const handleCallsTypeChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setCallsType(newAlignment)
  }
  const timesList = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
  return (
    <div id={'extended_search_pane'} style={opened ? { maxHeight: '30rem' } : {}}>
      <br />
      <div className='blocks_wrapper'>
        <div className='from-to-search-pane'>
          <div className='pretty_input_div'>
            <h3>From</h3>
            <div>
              <label>
                <input
                  id='from'
                  value={data.from}
                  type='text'
                  placeholder='Search from destination...'
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                />
              </label>
            </div>
          </div>
          <div className='arrow'>
            <ArrowForwardIcon fontSize={'small'} />
          </div>
          <div className='pretty_input_div'>
            <h3>To</h3>
            <div>
              <label>
                <input
                  id='to'
                  value={data.to}
                  type='text'
                  placeholder='Search from destination...'
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                />
              </label>
            </div>
          </div>
        </div>

        <div className='buttons_choice_pane'>
          <h3>Show</h3>
          <ToggleButtonGroup
            color='primary'
            value={callsType}
            exclusive
            onChange={handleCallsTypeChange}
          >
            <ToggleButton value='internal'>Internal</ToggleButton>
            <ToggleButton value='all'>All</ToggleButton>
            <ToggleButton value='external'>External</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className='from-to-search-pane time_filter_pane'>
          <h3 style={{ marginBottom: '0.5rem' }}>Time</h3>
          <Stack direction='row' spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id='from_time_selector'
              freeSolo
              options={timesList.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ width: '6rem' }}
                  size={'small'}
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                  value={data.fromTime}
                  label='From'
                />
              )}
            />
            <Autocomplete
              id='to_time_selector'
              freeSolo
              options={timesList.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ width: '6rem' }}
                  size={'small'}
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                  value={data.toTime}
                  label='To'
                />
              )}
            />
          </Stack>
        </div>
        <div className='show_tagged_pane'>
          <h3>Show tagged</h3>
          <label>
            <Switch checked={checked} onChange={() => setChecked(!checked)} size={'medium'} />
          </label>
        </div>
      </div>
    </div>
  )
}
