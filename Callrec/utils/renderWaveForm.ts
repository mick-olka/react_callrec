export const renderWaveForm = (
  audio: HTMLAudioElement,
  rec_data: RecordI,
  id: string,
  onTimeUpdate: () => void,
) => {
  const setId = (cid: string) => {
    if (cid) {
      return `#cr_${id} #${cid}_${id}`
    } else {
      return `#cr_${id}`
    }
  }
  const normalizedData = rec_data.normalizedData.length
    ? rec_data.normalizedData
    : Array.from({ length: 190 }, () => Math.random())
  const dpr = 1 // window.devicePixelRatio || 1
  const padding = 12
  const width: number | null = null
  // set up the canvas
  const canvas = document.querySelector(setId('wave')) as HTMLCanvasElement
  const slider = document.querySelector(setId('slider')) as HTMLCanvasElement
  const ctx = canvas!.getContext('2d')
  const ctxs = slider!.getContext('2d')
  canvas.width = width || canvas.offsetWidth * dpr
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr
  slider.width = width || slider.offsetWidth * dpr
  slider.height = (slider.offsetHeight + padding * 2) * dpr
  ctx!.translate(0, canvas.offsetHeight / 2 + padding) // set Y = 0 to be in the middle of the canvas
  ctxs!.scale(dpr, dpr)
  ctx!.scale(dpr, dpr)
  const pps = canvas.width / (audio.duration || rec_data.duration_ms / 1000) // pixels per sec
  // draw the waveform line segments
  const draw = () => {
    if (normalizedData) {
      const width = canvas.offsetWidth / normalizedData.length
      let color: string | null = 'blue'
      for (let i = 0; i < normalizedData.length; i++) {
        const x = width * i
        let height = normalizedData[i] * canvas.offsetHeight - padding
        if (height < 0) {
          height = 0
        } else if (height > canvas.offsetHeight / 2) {
          height = canvas.offsetHeight / 2
        }
        color = x >= pps * audio.currentTime ? null : '#acf7ff'
        drawCircle(ctxs!, pps * audio.currentTime, canvas.height / 2)
        drawLineSegment(ctx!, x, height * 1.1, width, (i + 1) % 2, color)
      }
    }
  }
  const handleTimeUpdate = () => {
    ctx!.clearRect(0, -canvas.height / 2, canvas.width, canvas.height)
    ctxs!.clearRect(0, 0, slider.width, slider.height)
    drawCircle(ctxs!, pps * audio.currentTime, canvas.height / 2)
    onTimeUpdate()
    draw()
  }
  draw()
  audio.ontimeupdate = () => handleTimeUpdate()
  // on slider move
  let isMouseDown = false
  slider.onmousemove = (e) => {
    if (!e) {
      e = <MouseEvent>window.event
    }
    const x = e.offsetX
    if (isMouseDown) {
      audio.currentTime = x / pps
    } //  set progress
  }
  slider.onmousedown = () => {
    isMouseDown = true
  }
  slider.onmouseup = () => {
    isMouseDown = false
  }
  slider.onmouseout = () => {
    isMouseDown = false
  }
  slider.onclick = (e) => {
    if (!e) {
      e = <MouseEvent>window.event
    }
    const x = e.offsetX
    audio.currentTime = x / pps
  }
}

import { RecordI } from '../../interfaces'

const drawCircle = (ctxs: CanvasRenderingContext2D, x: number, y: number) => {
  ctxs.beginPath()
  ctxs.ellipse(x, y, 6, 9, 0, 0, 2 * Math.PI, false)
  ctxs.fillStyle = 'black'
  ctxs.fill()
  ctxs.lineWidth = 1
  ctxs.strokeStyle = '#ffffff'
  ctxs.stroke()
}

const drawLineSegment = (
  ctx: CanvasRenderingContext2D,
  x: number,
  height: number,
  width: number,
  isEven: number,
  color: string | null = 'blue',
) => {
  const grd = ctx.createLinearGradient(0, 0, 0, 30)
  grd.addColorStop(0, '#e2e6e8')
  grd.addColorStop(1, '#b9bfc2')
  ctx.fillStyle = color ? 'orange' : grd
  if (height < 2) {
    height = 2
  }
  ctx.fillRect(x, -height, 2.5, height * 2)
}
