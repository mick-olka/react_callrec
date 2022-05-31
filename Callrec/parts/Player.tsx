import CheckBoxOutlineBlankOutlined from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined'
import FastRewindOutlinedIcon from '@mui/icons-material/FastRewindOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

import { CircularProgress } from '@mui/material'

import React, { ChangeEvent, useEffect, useState } from 'react'

import { RecordI } from '../../interfaces'
import '../callrec.scss'
import '../player.scss'
import { modalConfirmDelete, modalInfo, modalNewTag, modalShare } from '../utils/modal_panes'
import { toHHMMSS } from '../utils/other_utils'
import { renderWaveForm } from '../utils/renderWaveForm'

interface PlayerProps {
  rec: RecordI
  playHandler: (id: string, recUrl: string) => void
  playing: boolean
  loading: boolean
  active: boolean
  audio: HTMLAudioElement | null
}

export const Player: React.FC<PlayerProps> = ({
  audio,
  rec,
  playHandler,
  playing,
  loading,
  active,
}) => {
  const id = rec._id
  const [currentTime, setCurrentTime] = useState(0)
  const [starred, setStarred] = useState(rec.starred)
  const [checked, setChecked] = useState(false)
  const handleSpeedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }
  const hanleInfoCLick = () => {
    modalInfo(rec)
  }
  const hanleShareCLick = () => {
    modalShare()
  }
  const handleDeleteClick = () => {
    modalConfirmDelete(['id3434'])
  }
  const handleTagClick = () => {
    modalNewTag()
  }
  useEffect(() => {
    if (audio && !loading) {
      renderWaveForm(audio, rec, id, () => setCurrentTime(audio.currentTime))
    }
  }, [audio, loading])
  return (
    <div
      key={id}
      className={active ? 'player_container' + ' ' + 'active' : 'player_container'}
      id={`cr_${id}`}
    >
      <div className={'track_div'}>
        <div className={'info_pane' + ' ' + 'upper'}>
          <p className={'left_side'}>
            <b>
              {rec.caller_id_name}({rec.caller_id_number})
            </b>
            <KeyboardDoubleArrowRightOutlinedIcon fontSize='medium' />
            <b> {rec.to} </b>
          </p>
          <p className={'left_side'}>
            <i id={`simple_duration_${id}`}>(10 s)</i>
          </p>
          <p id={`info_date_${id}`} className={'date_info'}>
            02 Jan | 2:30 pm
          </p>
          <p id={`star_btn_${id}`} onClick={() => setStarred(!starred)}>
            {starred ? (
              <StarOutlinedIcon fontSize='medium' />
            ) : (
              <StarBorderOutlinedIcon fontSize='medium' />
            )}
          </p>
          <p id={`checkbox_${id}`} onClick={() => setChecked(!checked)}>
            {checked ? (
              <CheckBoxOutlinedIcon fontSize='medium' />
            ) : (
              <CheckBoxOutlineBlankOutlined fontSize='medium' />
            )}
          </p>
        </div>
        <div id={`player_${id}`} className={'player'}>
          <div
            className={'play_btn_wrapper'}
            onClick={() => playHandler(id, rec.record_url)}
            id={`play_btn_wrapper_${id}`}
          >
            {active ? (
              loading ? (
                <CircularProgress />
              ) : (
                <div
                  className={playing ? 'play_button' + ' ' + 'paused' : 'play_button'}
                  id={`play_${id}`}
                />
              )
            ) : (
              <div className={'play_button'} id={`play_${id}`} />
            )}
          </div>
          <div className={'waveform_container'} id={`waveform_container_${id}`}>
            <p className='timer' id={`timer_current_time_${id}`}>
              {audio ? toHHMMSS(currentTime, false) : '00:00'}
            </p>
            <div className={'canvas_div'}>
              <canvas className={'wave_canvas'} id={`wave_${id}`} />
              <canvas className={'slider_canvas'} id={`slider_${id}`} />
            </div>
            <p className={'timer'} id={`timer_duration_${id}`}>
              {audio ? toHHMMSS(audio.duration, false) : '00:00'}
            </p>
          </div>
        </div>
        <div className={'tags_player_box'}>
          {rec.tags.map((t) => {
            return <span key={t}>{t}</span>
          })}
        </div>

        <div className={'info_pane' + ' ' + 'bottom'}>
          <p id={`rewind_btn_${id}`} className={'extra'}>
            <FastRewindOutlinedIcon fontSize='medium' />
          </p>
          <p id={`fast-forward_btn_${id}`} className={'extra'}>
            <FastForwardOutlinedIcon fontSize='medium' />
          </p>
          <p className={'extra'}>
            <label id={`audio_speed_selector_${id}`} />
            <select
              defaultValue='1'
              className={'audio_speed_input'}
              name='speed'
              id={`audio_speed_selector_${id}`}
              onChange={handleSpeedChange}
            >
              <option value='0.5'>0.5x</option>
              <option value='1'>1.0x</option>
              <option value='1.25'>1.25x</option>
              <option value='1.5'>1.5x</option>
              <option value='1.75'>1.75x</option>
              <option value='2'>2.0x</option>
              <option value='2'>3.0x</option>
            </select>
          </p>
          <p id={`info_btn_${id}`} onClick={hanleInfoCLick} className={'hinted'}>
            <InfoOutlinedIcon fontSize='medium' />
            <span className={'hint'}>Get Info</span>
          </p>
          <p id={`send_btn_${id}`} onClick={hanleShareCLick} className={'hinted'}>
            <SendOutlinedIcon fontSize='medium' />
            <span className={'hint'}>Email</span>
          </p>
          <p id={`new_tag_btn_${id}`} onClick={handleTagClick} className={'hinted'}>
            <LocalOfferOutlinedIcon fontSize='medium' />
            <span className={'hint'}>Tag</span>
          </p>
          <p
            id={`delete_record_btn_${id}`}
            onClick={handleDeleteClick}
            className={'del_p' + ' ' + 'hinted'}
          >
            <DeleteOutlineOutlinedIcon fontSize='medium' />
            <span className={'hint'}>Delete</span>
          </p>
        </div>
      </div>
    </div>
  )
}
