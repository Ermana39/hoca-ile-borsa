/**
 * JSON-LD is embedded in an HTML script element, whose closing tag is parsed
 * even inside a JSON string. Escape '<' so content cannot end that element.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
