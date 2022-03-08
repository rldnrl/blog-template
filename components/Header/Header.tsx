import { ReactNode } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header css={headerStyle}>
      <div css={navContainerStyle}>
        <div css={navInnerContainerStyle}>{children}</div>
      </div>
    </header>
  )
}

Header.Logo = () => {
  return (
    <div css={logoContainerStyle}>
      <Link href="/">Icon</Link>
    </div>
  )
}

Header.Content = () => {
  return (
    <div css={contentContainerStyle}>
      <ul css={ulStyle}></ul>
      <ul css={ulStyle}>
        <li css={listStyle}>
          <Link href="/blog">Blog</Link>
        </li>
        <li css={listStyle}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

const headerStyle = css`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid transparent;
  background-color: #fff;
  left: 0;
  transition: background-color 0.2s ease;
`

const navContainerStyle = css`
  width: 100%;
  height: 100%;
  margin: auto;
`

const navInnerContainerStyle = css`
  display: flex;
  width: 92%;
  max-width: 72rem;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
`

const logoContainerStyle = css`
  display: flex;
  align-items: center;
  margin-right: 24px;
`

const contentContainerStyle = css`
  display: flex;
  overflow-y: hidden;
  max-height: 100%;
  justify-content: space-between;
`

const ulStyle = css`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

const listStyle = css`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #4e5968;
  > a {
    padding: 12px 10px;
    font-size: 15px;
    line-height: 20px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
    text-align: left;
  }
  > a:hover {
    background-color: #f2f4f6;
  }
`

export default Header
