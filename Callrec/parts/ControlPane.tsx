import CheckBoxOutlineBlankOutlined from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import React from 'react'

import '../callrec.scss'
import { modalConfirmDelete, modalNewTag, modalShare } from '../utils/modal_panes'

interface Props {
  total: number
  chosen: number
}

export const ControlPane: React.FC<Props> = ({ total, chosen }) => {
  const hanleShareCLick = () => {
    modalShare()
  }
  const handleDeleteClick = () => {
    modalConfirmDelete(['id1', 'id2'])
  }
  const handleTagClick = () => {
    modalNewTag()
  }
  return (
    <div className={'control_pane'}>
      <div className={'available_recordings'}>
        Available recordings: <span id={'records_count'}>{total}</span>
      </div>
      <div className={'controls'}>
        <div id={'chosen_records_wrapper'}>
          <div id={'records_chosen_count'}>{chosen}</div>
          <div id={'actions_box'}>
            <button onClick={handleTagClick} id={'label_chosen'}>
              <LocalOfferOutlinedIcon fontSize='medium' />
              <span>New tag</span>
            </button>
            <button onClick={hanleShareCLick} id={'share_chosen'}>
              <SendOutlinedIcon fontSize='medium' />
              <span>Mail</span>
            </button>
            <button onClick={handleDeleteClick} id={'delete_chosen'}>
              <DeleteOutlineIcon fontSize='medium' />
              <span>Delete</span>
            </button>
            <button id={'download_chosen'}>
              <FileDownloadOutlinedIcon fontSize='medium' />
              <span>Download</span>
            </button>
            <button id={'check_all'}>
              <CheckBoxOutlineBlankOutlined fontSize='medium' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
