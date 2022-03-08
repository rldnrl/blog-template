import { ReactNode } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

import List from '@/components/List'

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
      <List>
        <List.Navigation>
          <Link href="/blog">Blog</Link>
        </List.Navigation>
        <List.Navigation>
          <Link href="/about">About</Link>
        </List.Navigation>
      </List>
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

export default Header
