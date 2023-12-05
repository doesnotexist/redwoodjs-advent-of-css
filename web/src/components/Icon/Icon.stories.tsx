// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args: {
    id: 'calendar',
    size: 68,
  },
}

export const Check: Story = {
  args: {
    id: 'check',
    size: 68,
  },
}

export const Chevron: Story = {
  args: {
    id: 'chevron',
    size: 68,
  },
}

export const EyeClosed: Story = {
  args: {
    id: 'eyeClosed',
    size: 68,
  },
}

export const EyeOpen: Story = {
  args: {
    id: 'eyeOpen',
    size: 68,
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
    size: 68,
  },
}

export const Minus: Story = {
  args: {
    id: 'minus',
    size: 68,
  },
}

export const Plus: Story = {
  args: {
    id: 'plus',
    size: 68,
  },
}

export const Question: Story = {
  args: {
    id: 'question',
    size: 68,
  },
}

export const ThumbsDown: Story = {
  args: {
    id: 'thumbsDown',
    size: 68,
  },
}

export const ThumbsUp: Story = {
  args: {
    id: 'thumbsUp',
    size: 68,
  },
}

export const Upload: Story = {
  args: {
    id: 'upload',
    size: 68,
  },
}

export const User: Story = {
  args: {
    id: 'user',
    size: 68,
  },
}
