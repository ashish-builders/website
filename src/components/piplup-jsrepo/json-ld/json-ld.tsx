import * as React from 'react'
import type { WithContext, Thing } from 'schema-dts'
import serialize from 'serialize-javascript'

export type JsonLDProps<T extends Thing = Thing> = {
  /**
   * The JSON-LD data object with context, conforming to schema.org types, and is strongly typed using `schema-dts`.
   * This ensures type safety and autocompletion for schema.org structures.
   */
  data: WithContext<T>
}

/**
 * JsonLD renders structured data as a script tag for SEO, using schema.org JSON-LD format.
 * Useful for adding rich metadata to your React pages for search engines.
 */
export default async function JsonLD<T extends Thing = Thing>({ data }: JsonLDProps<T>) {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: serialize(data, { isJSON: true }) }}
      type="application/ld+json"
    />
  )
}
