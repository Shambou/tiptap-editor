/**
 * Command component except for simple commands
 */
export const CommandComponents = {
  'add-more': 'o-add-more-btn',
  'font-family': 'o-font-family-dropdown',
  'fore-color': 'o-fore-color-dropdown',
  'back-color': 'o-back-color-dropdown',
  'align-dropdown': 'o-align-dropdown',
  'align-group': 'o-align-group',
  'line-height': 'o-line-height-dropdown',
  'list-dropdown': 'o-list-dropdown',
  'indent-dropdown': 'o-indent-dropdown',
  'text-format-dropdown': 'o-text-format-dropdown',
  heading: 'o-heading-dropdown',
  link: 'o-link-btn',
  photo: 'o-photo-btn',
  table: 'o-table-btn',
}

export const DefaultToolbar = [
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
  'separator',
  'heading',
  'font-family',
  'fore-color',
  'back-color',
  'format_clear',
  'separator',
  'align-dropdown',
  'indent',
  'outdent',
  'line-height',
  'separator',
  'horizontal',
  'bullet_list',
  'ordered_list',
  'separator',
  'blockquote',
  'code_block',
  'link',
  'photo',
  'table',
  'separator',
  'undo',
  'redo',
  'print'
]

/**
 * Table toolbar
 */
export const TableToolbar = [
  'bold',
  'italic',
  'strike',
  'font-family',
  'fore-color',
  'back-color',
  'format_clear',
  'bullet_list',
  'ordered_list',
  'align-dropdown',
  'table',
]

/**
 * Bubble toolbar
 */
export const DefaultBubble = [
  'bold',
  'italic',
  'separator',
  'font-family',
  'fore-color',
  'back-color',
  'separator',
  'link',
  'separator',
  'align-group',
]

export const DefaultEmbedServices = {
  video: ['youtube', 'youku', 'bilibili', 'qqvideo'],
  map: ['google_map', 'amap', 'baidu_map'],
  design: ['modao', 'lanhu', 'figma', 'canva', 'processon'],
  develop: ['codepen'],
  data: ['google_forms', 'jinshuju'],
  others: ['iframe']
}
