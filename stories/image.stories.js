import React from 'react'
/* eslint-disable */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/* eslint-enable */
import facebook from '_svg/socialLogo/facebook.svg'
import Image from '../src/components/Image'

storiesOf('Image', module)
  .add('circle', () => (
    <Image src={facebook} alt="image" />
  ))
