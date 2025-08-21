'use client'

import * as React from 'react'
import { TextInput, useField } from '@payloadcms/ui'
import { kebabCase } from 'es-toolkit'
import { type TextField } from 'payload'

export type SlugProps = {
  field: TextField
  trackingField: string
}

export function Slug(props: SlugProps) {
  const {
    field: { admin: { readOnly = false } = {}, required = false },
    trackingField,
  } = props

  const { setValue: setSlugValue, value: slugValue = '' } = useField<string>({
    path: 'slug',
  })

  const { value: trackingFieldValue } = useField<string>({
    path: trackingField,
  })

  const prevTrackingFieldValueRef = React.useRef(trackingFieldValue)
  const stopTrackingRef = React.useRef(false)

  React.useEffect(() => {
    if (!trackingField || stopTrackingRef.current) {
      return
    }
    if (trackingFieldValue === prevTrackingFieldValueRef.current) {
      return
    }
    const prevSlugValue = kebabCase(prevTrackingFieldValueRef.current || '')
    prevTrackingFieldValueRef.current = trackingFieldValue || ''
    if (prevSlugValue !== slugValue) {
      return
    }
    setSlugValue(kebabCase(trackingFieldValue))
  }, [setSlugValue, slugValue, trackingField, trackingFieldValue])

  return (
    <TextInput
      description={
        slugValue
          ? `Auto generated based on ${trackingField}`
          : `Will be auto-generated from ${trackingField} when saved`
      }
      onChange={(event) => {
        setSlugValue(event.target.value)
        stopTrackingRef.current = true
      }}
      hasMany={false}
      label="Slug"
      path="slug"
      readOnly={readOnly}
      required={required}
      value={slugValue}
    />
  )
}
