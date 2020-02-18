import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allDemoMixJson {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return (
    <div className="mix-gallery row d-flex justify-content-center">
      {data.allDemoMixJson.edges.map((item, key) => {
        return (
          <iframe
            src={item.node.url}
            title={item.node.title}
            width="300"
            height="150"
            className="mix-item "
            key={key}
          ></iframe>
        )
      })}
    </div>
  )
}
