import { HTMLAttributes, ReactNode } from 'react'
import { css } from '@emotion/react'

type ListProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode
}

const List = ({ children, ...props }: ListProps) => {
  return (
    <ul css={ulStyle} {...props}>
      {children}
    </ul>
  )
}

type ListNavigationProps = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode
}

List.Navigation = ({ children, ...props }: ListNavigationProps) => {
  return (
    <li css={liStyle} {...props}>
      {children}
    </li>
  )
}

const ulStyle = css`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

const liStyle = css`
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

export default List
