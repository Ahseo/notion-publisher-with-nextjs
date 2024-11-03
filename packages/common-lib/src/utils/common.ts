import classnames from 'classnames';
import { type Value as ClassValue } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassValue[]) => {
  return twMerge(classnames(classNames));
};

/** Event Handling */
export const preventEvent = async (event: any) => {
  if (event) {
    if (typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (typeof event.stopPropagation === 'function') {
      event.stopPropagation();
    }
  }
};

export const isEmptyOrSpace = (text?: string | null) => {
  return text == undefined || text === null || text?.trim() === '';
};
