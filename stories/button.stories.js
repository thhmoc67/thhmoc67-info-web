import React from 'react'
/* eslint-disable */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/* eslint-enable */
import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('Animation', () => (
    <Button onClick={action('clicked')}>BUtton</Button>
  ))
