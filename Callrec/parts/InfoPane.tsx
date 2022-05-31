import React from 'react'

import { RecordI } from '../../interfaces'

export const InfoPane: React.FC<{ rec: RecordI }> = ({ rec }) => {
  return (
    <div className='record info_pane'>
      <ul>
        <li>
          caller: <b>{rec.caller_id_name}</b>
        </li>
        <li>
          caller number: <b>{rec.caller_id_number}</b>
        </li>
        <li>
          to: <b>{rec.to}</b>
        </li>
        <li>
          tags: <b>{rec.tags.toString()}</b>
        </li>
      </ul>
    </div>
  )
}
