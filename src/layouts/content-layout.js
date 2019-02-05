import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
// import Root from '../app/components/Root' import Results from
// '../app/components/connected/Results' import Search from
// '../app/components/connected/Search'

import Header from '../components/header'
import './layout.css'
import LinkList from '../components/link-list';
import Footer from '../components/footer';

export const contentQuery = graphql `
  query {
    allMarkdownRemark {
      edges {
        node{
          frontmatter {
            title
            path
            language
            weight
            pageType
          }
        }
      }
    }
  }
`

const ContentLayout = ({children}) => (
    <StaticQuery
        query={contentQuery}
        render={data => (
        <React.Fragment>
            <div style={{
                margin: `0 auto`
            }}>
                {children}
            </div>
            <LinkList data={data}/>
            <Footer data={data}/>
        </React.Fragment>
    )}/>
)

ContentLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default ContentLayout