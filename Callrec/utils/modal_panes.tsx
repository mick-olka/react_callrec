import { TextField } from '@mui/material'

import '../mail_pane.scss'

import React from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { RecordI } from '../../interfaces'
import { InfoPane } from '../parts/InfoPane'

const RSwal = withReactContent(Swal)

export const modalConfirmDelete = (idsArr: string[]) => {
  RSwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('delete', idsArr)
    }
  })
}

export const modalInfo = (rec: RecordI) => {
  RSwal.fire({
    icon: 'info',
    html: <InfoPane rec={rec} />,
  })
}

export const modalShare = () => {
  RSwal.fire({
    width: 'fit-content',
    html: <MailPane />,
  })
}

export const modalNewTag = () => {
  RSwal.fire({
    html: <NewTagForm />,
  })
}

const NewTagForm = () => {
  const style = {
    paddingTop: '1rem',
  }
  return (
    <div style={style}>
      <TextField id='new_tag_input' label='New Tag' variant='outlined' />
    </div>
  )
}

const MailPane = () => {
  return (
    <div className='mail_page'>
      <h2>Share this recording</h2>
      <form id='mail_form'>
        <div className='part'>
          <label htmlFor='to'>To</label>
          <div>
            <textarea id='to' name='to' placeholder='hername@mail.com, hisname@mail.com'></textarea>
            <div className='info_pane'>
              <p className='hinted'>
                {/*<img className='info_icon' src='' alt='info' />*/}
                {/*<span className='hint'>*/}
                {/*  Example: <b>theirname@mail.com</b> OR{' '}*/}
                {/*  <b>hishername@mail.com, othername@mail.com</b>*/}
                {/*</span>*/}
              </p>
            </div>
          </div>
        </div>
        <div className='part'>
          <label htmlFor='subject'>Subject</label>
          <textarea id='subject' name='subject'>
            Recommended call recording
          </textarea>
        </div>
        <div className='part'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'>
            Hi,&#13;A call has been recorded using our call recording platform and I think you
            should listen to it.&#13;&#13;Thanks,&#13;Recording.
          </textarea>
        </div>
        <label>
          <input type='checkbox' name='check' id='check' />
          Do you understand you are sharing this recording?
        </label>
      </form>
    </div>
  )
}
