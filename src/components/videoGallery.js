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
            className="mix-item"
            key={key}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )
      })}
    </div>
  )
}
