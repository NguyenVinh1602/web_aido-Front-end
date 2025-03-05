import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import matter from "gray-matter"
import fs from "fs"
import OnThisPage from '@/components/OnThisPage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function BlogPost({ params } : { params: { slug: string } }) {
  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .use(rehypeSlug)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  .use(rehypeAutolinkHeadings)

  const filePath = `src/content/${params.slug}.md`
  console.log("File path:", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  const htmlContent = (await processor.process(content)).toString()
    return (
        <MaxWidthWrapper className='prose'>
            <div className="flex">
                <div className="px-16" >
                    <h1>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
                </div>
                <OnThisPage className='text-sm w-[40%]' htmlContent={htmlContent}/>
            </div>
        </MaxWidthWrapper>
    )
}