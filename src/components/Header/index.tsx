import Image from 'next/image'

import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width={110} height={31} src="/images/logo.svg" alt="logo" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/' text='Home' />
          <ActiveLink activeClassName={styles.active} href='/posts' text='Posts' />
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}