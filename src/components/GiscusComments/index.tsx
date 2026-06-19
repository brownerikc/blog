import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments(): React.ReactElement {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
<Giscus
        repo="brownerikc/blog"
        repoId="R_kgDOS09tZw"
        category="Blog comments"
        categoryId="DIC_kwDOS09tZ84C_gOl"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
