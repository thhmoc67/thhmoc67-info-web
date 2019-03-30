import React from 'react'
/* eslint-disable */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import profile from '_jpeg/profile.jpg'
import Image from '_components/Image'
/* eslint-enable */

storiesOf('Image', module)
  .add('circle', () => (
    <Image src={profile} alt="image" circle />
  ))
