import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ProductPreview from '../components/product-preview'

class LessonIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const body = get(this, 'props.data.allContentfulLesson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <div className={styles.hero}>Lessons</div>
          <h2 className="section-headline">Recent lessons</h2>
          {body.map(({ node }) => {
            return (
              <li key={node.slug}>
                {/* <ProductPreview product={node} /> */}
                <h2>{node.title}</h2>
                <Link to={`/product/${node.slug}`}>{node.title}</Link> 
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}

export default LessonIndex

export const pageQuery = graphql`
  query LessonIndexQuery {
    allContentfulLesson{
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
