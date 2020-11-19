// export { default as OTitle } from './Title'
export { default as ODoc } from './Doc'
export { default as OParagraph } from './Paragraph'
export { default as OBlockquote } from './Blockquote'
export { default as OTodoItem } from './TodoItem'
export { default as OHeading } from './Heading'
export { default as OIframe } from './Iframe'

// Marks
export { default as OBackColor } from './BackColor'
export { default as OForeColor } from './ForeColor'
export { default as OFontFamily } from './FontFamily'

// Extensions
export { default as OAlign } from './Align'
export { default as OAlignment } from './Alignment'
export { default as OIndent } from './Indent'
export { default as OLineHeight } from './LineHeight'
export { default as OFormatClear } from './FormatClear'
export { default as OPrint } from './Print'
export { default as OImage } from './Image'
export { default as OEmbed } from './Embed'

// --------------------------------------------------------------------------------
// Exposed Extension List
// --------------------------------------------------------------------------------
export const TipTapExtensions = [
  'Bold',
  'Italic',
  'Strike',
  'Underline',
  'Code',
  'CodeBlock',
  'CodeBlockHighlight',
  'BulletList',
  'OrderedList',
  'ListItem',
  'TodoList',
  'TodoItem',
  'HorizontalRule',
  'Table',
  'Link',
  'Blockquote'
  // 'Image',
]

export const CustomTipTapExtensions = [
  // 'OTitle',
  // 'ODoc',
  'OParagraph',
  'OBlockquote',
  'OTodoItem',
  'OHeading',
  'OAlignment',
  'OIndent',
  'OLineHeight',
  'OForeColor',
  'OBackColor',
  'OFontFamily',
  'OIframe',
  'OFormatClear',
  'OPrint',
  'OImage',
  'OEmbed',
]

export const RecommendedExtensions = [
  ...TipTapExtensions,
  ...CustomTipTapExtensions
]
