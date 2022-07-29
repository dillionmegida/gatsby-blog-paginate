import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const PaginatedTemplate = ({ pageContext }) => {
  const { pageCount, group, index, first, last } = pageContext
  const previousIndex = index - 1
  const nextIndex = index + 1

  const previousPageUrl =
    previousIndex === 1 ? "/blog" : `/blog/${previousIndex}`
  const nextPageUrl = `/blog/${nextIndex}`

  return (
    <Layout>
      <h2>Read articles from {pageCount} pages</h2>
      <ol style={{ listStyle: `none` }}>
        {group.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <div>
        {!first && (
          <Link to={previousPageUrl} className="previous-link">
            Previous page
          </Link>
        )}

        {!last && (
          <Link to={nextPageUrl} className="previous-link">
            Next page
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default PaginatedTemplate
