import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import postOne from '/assets/markdown/2026/2026-10-19.md?raw'
import postTwo from '/assets/markdown/2026/2026-10-20.md?raw'

export default function Post() {
  return (
    <div className={"flex flex-col items-center"}>
      {/*10-19-2026*/}
      <Markdown remarkPlugins={[remarkGfm]}>{postOne}</Markdown>
      {/*10-20-2026*/}
      <Markdown remarkPlugins={[remarkGfm]}>{postTwo}</Markdown>
    </div>
  );
}