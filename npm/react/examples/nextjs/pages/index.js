import * as React from 'react'
import { Search } from '../components/Search'
import HelloWorld from '../components/HelloWorld.mdx'
import styles from '../styles/Home.module.css'

function IndexPage ({ asyncProp }) {
  return (
    <main>
      <h1 className={styles.welcome}>Welcome to Next.js</h1>

      {asyncProp && (
        <p data-testid="server-result">
          `.getInitialProps()` was called and passed props to this component
        </p>
      )}

      <Search />
      <HelloWorld />
    </main>
  )
}

IndexPage.getServerSideProps = () => {
  return Promise.resolve({ asyncProp: true })
}

export default IndexPage
