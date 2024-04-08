import { Notify } from 'quasar';

type Position = | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center';

export function showInfoNotify(message: string, duration: number = 1000, position: Position = 'top') {
  Notify.create({
    message: message,
    timeout: duration,
    position: position,
    color: 'info'
  });
}


export function showWarningNotify(message: string, duration: number = 1000, position: Position = 'top') {
  Notify.create({
    message: message,
    timeout: duration,
    position: position,
    color: 'warning'
  });
}

export function showErrorNotify(message: string, duration: number = 1000, position: Position = 'top'){
  Notify.create({
    message: message,
    timeout: duration,
    position: position,
    color: 'negative'
  });
}






