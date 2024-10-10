import classnames from 'classnames';
import { type Value as ClassValue } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassValue[]) => {
  return twMerge(classnames(classNames));
};

/** Event Handling */
export const preventEvent = async (event: any) => {
  // this part is for stopping parent forms to trigger their submit
  if (event) {
    // sometimes not true, e.g. React Native
    if (typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (typeof event.stopPropagation === 'function') {
      // prevent any outer forms from receiving the event too
      event.stopPropagation();
    }
  }
};

export const isEmptyOrSpace = (text?: string | null) => {
  return text == undefined || text === null || text?.trim() === '';
};
