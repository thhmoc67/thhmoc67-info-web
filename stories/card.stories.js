import React from 'react'
/* eslint-disable */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/* eslint-enable */
import Card from '../src/components/Card'

storiesOf('Card', module)
  .add('Normal', () => (
    <Card onClick={action('clicked')} title="Button" />
  ))
