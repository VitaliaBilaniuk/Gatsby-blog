import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default ({ product }) => (
  <div className={styles.preview}>
    
    <h3 className={styles.previewTitle}>
      <Link to={`/products/${product.slug}`}>{product.title}</Link>
    </h3>
    {/* <p
      dangerouslySetInnerHTML={{
        __html: product.copy.childMarkdownRemark.html,
      }}
    /> */}
  </div>
)
