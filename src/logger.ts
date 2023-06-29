import { entries } from '@zero-dependency/utils'

type LogTypes = 'debug' | 'log' | 'warn' | 'error'

const colors: Record<LogTypes, string> = {
  debug: `#7f8c8d`,
  log: `#2ecc71`,
  warn: `#f39c12`,
  error: `#c0392b`
}

function styles(method: LogTypes) {
  return [
    `background: ${colors[method]}`,
    `border-radius: 0.5em`,
    `color: white`,
    `font-weight: bold`,
    `padding: 2px 0.5em`,
    'font-family: cursive'
  ].join(';')
}

export const logger = Object.freeze(
  entries(colors).reduce((acc, [method]) => {
    acc[method] = (...args) => {
      console[method](`%cr3-dev`, styles(method), ...args)
    }

    return acc
  }, {} as Record<LogTypes, (...args: any[]) => void>)
)
