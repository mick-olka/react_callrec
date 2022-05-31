import React, { useState } from 'react'

import { Player } from './Player'

import { RecordI } from '../../interfaces'

import '../player.scss'

interface RecsPaneProps {
  records: RecordI[]
}

const currAudioInit: {
  id: string | null
  playing: boolean
  audio: HTMLAudioElement | null
  loading: boolean
} = {
  id: null,
  playing: false,
  audio: null,
  loading: true,
}

export const RecordsPane: React.FC<RecsPaneProps> = ({ records }) => {
  const [currAudio, setCurrAudio] = useState(currAudioInit)
  const playHandler = (id: string, recUrl: string) => {
    if (currAudio.id === id) {
      //  if active rec
      setCurrAudio({
        ...currAudio,
        playing: !currAudio.playing,
      })
      if (currAudio.playing) currAudio.audio?.pause()
      else currAudio.audio?.play()
    } else {
      //  if other rec or new
      if (currAudio.audio) currAudio.audio.pause() //  stop if playing
      const audio = new Audio(recUrl)
      setCurrAudio({
        playing: false,
        id: id,
        audio: audio,
        loading: true,
      })
      audio.onloadedmetadata = () => {
        setCurrAudio({
          id: id,
          loading: false,
          audio: audio,
          playing: true,
        })
        audio.play()
      }
    }
  }

  return (
    <div id={'records_container'}>
      {records.map((rec) => {
        const id = rec._id
        const active = id === currAudio.id
        return (
          <Player
            key={id}
            rec={rec}
            playHandler={playHandler}
            playing={active ? currAudio.playing : false}
            loading={active ? currAudio.loading : false}
            active={active}
            audio={active ? currAudio.audio : null}
          />
        )
      })}
    </div>
  )
}
