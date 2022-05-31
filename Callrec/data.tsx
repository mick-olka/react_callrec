import { ApexOptions } from 'apexcharts'

export const callOptions: ApexOptions = {
  chart: {
    id: 'area-datetime',
    type: 'area',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: false,
    },
  },
  title: {
    text: 'Calls - Total call volume by month',
    align: 'left',
    style: {
      fontSize: '18px',
      fontWeight: '500',
    },
  },
  legend: {
    show: false,
  },
  markers: {
    size: 2,
    colors: '#000',
    strokeColors: '#fff',
    strokeOpacity: 0.25,
    hover: {
      size: 2,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    type: 'datetime',
    min: new Date('12 January 2022').getTime(),
    tickAmount: 6,
    labels: {
      format: 'MMM',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    curve: 'smooth',
  },
  tooltip: {
    x: {
      format: 'MMM',
    },
  },
  fill: {
    colors: ['#37cbecba', '#182b64'],
    opacity: 1,
    type: 'solid',
  },
  colors: ['#37cbecba', '#182b64'],
}

export const activityOptions: ApexOptions = {
  chart: {
    type: 'area',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: false,
    },
  },
  title: {
    text: '2 days at a glance - Calls by hour',
    align: 'left',
    style: {
      fontSize: '18px',
      fontWeight: '500',
    },
  },
  legend: {
    show: false,
  },
  markers: {
    size: 2,
    colors: '#000',
    strokeColors: '#fff',
    strokeOpacity: 0.25,
    hover: {
      size: 2,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    curve: 'smooth',
  },
  tooltip: {
    x: {
      format: 'MMM',
    },
  },
  fill: {
    colors: ['#0b1a49e6', '#12ad91'],
    opacity: 1,
    type: 'solid',
  },
  colors: ['#0b1a49e6', '#12ad91'],
}

export const callSeries = [
  {
    name: 'Calls',
    data: [
      {
        x: '12 January 2020',
        y: 22,
      },
      {
        x: '13 February 2020',
        y: 23,
      },
      {
        x: '14 March 2020',
        y: 35,
      },
      {
        x: '15 April 2020',
        y: 33,
      },
      {
        x: '16 May 2020',
        y: 13,
      },
      {
        x: '17 June 2020',
        y: 41,
      },
      {
        x: '12 July 2020',
        y: 22,
      },
      {
        x: '13 August 2020',
        y: 14,
      },
      {
        x: '14 September 2020',
        y: 22,
      },
      {
        x: '15 October 2020',
        y: 65,
      },
      {
        x: '16 November 2020',
        y: 65,
      },
      {
        x: '17 December 2020',
        y: 12,
      },
      {
        x: '12 January 2021',
        y: 22,
      },
      {
        x: '13 February 2021',
        y: 23,
      },
      {
        x: '14 March 2021',
        y: 45,
      },
      {
        x: '15 April 2021',
        y: 23,
      },
      {
        x: '16 May 2021',
        y: 26,
      },
      {
        x: '17 June 2021',
        y: 11,
      },
      {
        x: '12 July 2021',
        y: 12,
      },
      {
        x: '13 August 2021',
        y: 24,
      },
      {
        x: '14 September 2021',
        y: 22,
      },
      {
        x: '15 October 2021',
        y: 35,
      },
      {
        x: '16 November 2021',
        y: 35,
      },
      {
        x: '17 December 2021',
        y: 12,
      },
      {
        x: '12 January 2022',
        y: 12,
      },
      {
        x: '13 February 2022',
        y: 27,
      },
      {
        x: '14 March 2022',
        y: 25,
      },
      {
        x: '15 April 2022',
        y: 33,
      },
      {
        x: '16 May 2022',
        y: 21,
      },
      {
        x: '17 June 2022',
        y: 21,
      },
      {
        x: '12 July 2022',
        y: 14,
      },
      {
        x: '13 August 2022',
        y: 23,
      },
      {
        x: '14 September 2022',
        y: 22,
      },
      {
        x: '15 October 2022',
        y: 33,
      },
      {
        x: '16 November 2022',
        y: 35,
      },
      {
        x: '17 December 2022',
        y: 11,
      },
    ],
  },
  {
    name: 'Calls 2021',
    data: [
      {
        x: '12 January 2020',
        y: 22,
      },
      {
        x: '13 February 2020',
        y: 13,
      },
      {
        x: '14 March 2020',
        y: 25,
      },
      {
        x: '15 April 2020',
        y: 23,
      },
      {
        x: '16 May 2020',
        y: 6,
      },
      {
        x: '17 June 2020',
        y: 21,
      },
      {
        x: '12 July 2020',
        y: 12,
      },
      {
        x: '13 August 2020',
        y: 14,
      },
      {
        x: '14 September 2020',
        y: 12,
      },
      {
        x: '15 October 2020',
        y: 55,
      },
      {
        x: '16 November 2020',
        y: 45,
      },
      {
        x: '17 December 2020',
        y: 12,
      },
      {
        x: '12 January 2021',
        y: 22,
      },
      {
        x: '13 February 2021',
        y: 13,
      },
      {
        x: '14 March 2021',
        y: 25,
      },
      {
        x: '15 April 2021',
        y: 23,
      },
      {
        x: '16 May 2021',
        y: 16,
      },
      {
        x: '17 June 2021',
        y: 11,
      },
      {
        x: '12 July 2021',
        y: 12,
      },
      {
        x: '13 August 2021',
        y: 24,
      },
      {
        x: '14 September 2021',
        y: 12,
      },
      {
        x: '15 October 2021',
        y: 15,
      },
      {
        x: '16 November 2021',
        y: 35,
      },
      {
        x: '17 December 2021',
        y: 12,
      },
      {
        x: '12 January 2022',
        y: 6,
      },
      {
        x: '13 February 2022',
        y: 22,
      },
      {
        x: '14 March 2022',
        y: 11,
      },
      {
        x: '15 April 2022',
        y: 23,
      },
      {
        x: '16 May 2022',
        y: 15,
      },
      {
        x: '17 June 2022',
        y: 13,
      },
      {
        x: '12 July 2022',
        y: 6,
      },
      {
        x: '13 August 2022',
        y: 15,
      },
      {
        x: '14 September 2022',
        y: 15,
      },
      {
        x: '15 October 2022',
        y: 37,
      },
      {
        x: '16 November 2022',
        y: 15,
      },
      {
        x: '17 December 2022',
        y: 6,
      },
    ],
  },
]

export const acitivitySeries = [
  {
    name: 'Incoming',
    data: [31, 40, 28, 51, 42, 59, 50, 31, 40, 28, 51, 42, 109, 100, 31],
  },
  {
    name: 'Outgoing',
    data: [11, 20, 18, 61, 22, 19, 10, 11, 20, 18, 61, 22, 19, 10, 11],
  },
]
