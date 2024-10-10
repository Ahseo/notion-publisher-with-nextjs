export const theme = {
  blockType: {
    bookmark: 'my-[1em] border border-notion-background-gray hover:bg-notion-background-gray', // styling in component
    bulleted_list_item: 'my-[0.4em] ms-[1.7em]',
    numbered_list_item: 'my-[0.4em] ms-[1.6em]',
    code: 'px-[1em] border border-orange-light2 h-[400px]',
    callout: 'my-[0.5em] flex rounded-[3px] p-4',
    divider: 'w-[100%] border-b-[1px] border-notion-background-gray',
    file: 'my-[0.5em] text-[1rem]',
    heading_1: 'px-[0.1em] py-[0.1em] text-[1.875rem] leading-[1.63] font-bold mb-0 mt-[1.875rem]',
    heading_2: 'px-[0.1em] py-[0.1em] text-[1.5rem] leading-[1.75] font-bold mb-0 mt-[1.5rem]',
    heading_3: 'px-[0.1em] py-[0.1em] text-[1.25rem] leading-[1.6] font-bold mb-0 mt-[1.25rem]',
    image: 'my-[1.25em] flex flex-col items-center', // figure
    paragraph: 'px-[0.1em] my-[0.3em] leading-[1.5]',
    quote: 'text-[1.25em] my-[1em] pl-[0.75em] border-l-[3px] border-gray-8',
    toggle: 'px-[0.1em] py-[0.1em] ps-0 my-[0.4em]',
    video: 'my-[0.5em]',
    unsupported: '',
  },
  typography: {
    link: 'border-b border-notion-gray text-gray-5 hover:text-notion-blue hover:border-notion-blue',
    caption: 'opacity-75 text-center text-[85%] mt-[0.5em]',
  },
  annotations: {
    underline: 'border-b-[0.05em]',
    code: 'text-[85%] bg-notion-background-code text-notion-code rounded-[3px] py-[0.2em] px-[0.4em]',
    color: {
      default: 'text-gray-8',
      gray: 'text-gray-5',
      brown: 'text-notion-brown',
      orange: 'text-notion-orange',
      yellow: 'text-notion-yellow',
      green: 'text-notion-green',
      blue: 'text-notion-blue',
      purple: 'text-notion-purple',
      pink: 'text-notion-pink',
      red: 'text-notion-red',
      gray_background: 'bg-notion-background-gray',
      brown_background: 'bg-notion-background-brown',
      orange_background: 'bg-notion-background-orange',
      yellow_background: 'bg-notion-background-yellow',
      green_background: 'bg-notion-background-green',
      blue_background: 'bg-notion-background-blue',
      purple_background: 'bg-notion-background-purple',
      pink_background: 'bg-notion-background-pink',
      red_background: 'bg-notion-background-red',
    },
  },
  indent: 'ml-4',
  listStyle: {
    numbered_list_item: ['list-decimal', 'list-[lower-alpha]', 'list-[lower-roman]'],
    bulleted_list_item: ['list-disc', 'list-[circle]', 'list-[square]'],
  },
};

export const getIndentation = (level: number) => (level > 1 ? theme.indent : '');

export const getListStyle = (
  blockType: 'numbered_list_item' | 'bulleted_list_item',
  level: number
) => theme.listStyle[blockType][level % 3];
