import React from 'react'
import Markdown from "react-markdown";

import raw from '/assets/markdown/2026/2026-10-19.md?raw'

export default function Post() {
  return (<Markdown>{raw}</Markdown>);
}