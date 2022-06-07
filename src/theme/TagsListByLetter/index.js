import React from 'react';
import { TagCloud } from 'react-tagcloud'
import { Badge } from "antd";
import Link from "@docusaurus/core/lib/client/exports/Link";

function TagsListByLetter({ tags }) {
  const data = tags.map(v => {
    // console.log(v)
    return {
      value: v.label,
      count: v.count,
      to: v.permalink
    }
  })
  return (
    <TagCloud
      key="tag-cloud"
      className="tag-cloud"
      minSize={24}
      maxSize={128}
      options={{
        hue: 'blue',
      }}
      tags={data}
      renderer={(tag, size, color) => {
        return (
          <>
            <Link to={tag.to}>
              <span
                key={tag.value}
                style={{
                  animation: 'blinker 3s linear infinite',
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: size,
                  margin: '3px',
                  padding: '3px',
                  display: 'inline-block',
                  color: color,
                }}
              >
                <Badge count={tag.count}>
                  {tag.value}
                </Badge>
              </span>
            </Link>
          </>
        )
      }}
    />
  );
}

export default TagsListByLetter;