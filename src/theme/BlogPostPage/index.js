import React from 'react';

import Layout from '@theme/Layout';
import BlogLayout from '@theme/BlogLayout'
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BackToTopButton from '@theme/BackToTopButton'
import TOC from '@theme/TOC'

import BrowserOnly from '@docusaurus/BrowserOnly'

import BlogPostPage from '@theme-original/BlogPostPage';
import GitalkComment from '../GitalkComment';


export default function BlogPostPageWrapper(props) {
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata, assets } = BlogPostContents;
  const { title, permalink, description, nextItem, prevItem, date, tags, authors } = metadata
  const {
    hide_table_of_contents: hideTableOfContents,
    keywords,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter
  return (
    // <>
    //   <BlogPostPage {...props} />
    // </>
    <BlogLayout
      title={metadata.title}
      description={metadata.description}
      sidebar={sidebar}
      toc={
        !hideTableOfContents && BlogPostContents.toc && BlogPostContents.toc.length > 0 ? (
          <TOC toc={BlogPostContents.toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
        ) : undefined
      }>
      <BackToTopButton />

      {BlogPostContents && (
        <div >
          <meta property='og:type' content='article' />
          <meta property='article:published_time' content={date} />

          {authors.some((author) => author.url) && (
            <meta
              property='article:author'
              content={authors
                .map((author) => author.url)
                .filter(Boolean)
                .join(',')}
            />
          )}
          {tags.length > 0 && <meta property='article:tag' content={tags.map((tag) => tag.label).join(',')} />}


          <BlogPostItem frontMatter={frontMatter} assets={assets} metadata={metadata} isBlogPostPage>
            <BlogPostContents />
          </BlogPostItem>
          {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />}

          <BrowserOnly fallback={<div></div>}>{() => <GitalkComment />}</BrowserOnly>
        </div>
      )}
    </BlogLayout>
  );
}
