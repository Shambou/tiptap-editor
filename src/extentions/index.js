export { default as OTitle } from '@/extentions/Title'
export { default as ODoc } from '@/extentions/Doc'
export { default as OParagraph } from '@/extentions/Paragraph'
export { default as OBlockquote } from '@/extentions/Blockquote'
export { default as OTodoItem } from '@/extentions/TodoItem'
export { default as OHeading } from '@/extentions/Heading'
export { default as OIframe } from '@/extentions/Iframe'

// Marks
export { default as OBackColor } from '@/extentions/BackColor'
export { default as OForeColor } from '@/extentions/ForeColor'
export { default as OFontFamily } from '@/extentions/FontFamily'

// Extensions
export { default as OAlign } from '@/extentions/Align'
export { default as OAlignment } from '@/extentions/Alignment'
export { default as OIndent } from '@/extentions/Indent'
export { default as OLineHeight } from '@/extentions/LineHeight'
export { default as OFormatClear } from '@/extentions/FormatClear'
export { default as OPrint } from '@/extentions/Print'
export { default as OImage } from '@/extentions/Image'
export { default as OEmbed } from '@/extentions/Embed'

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
  'OTitle',
  'ODoc',
  'OParagraph',
  'OBlockquote',
  // 'OTodoItem',
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
