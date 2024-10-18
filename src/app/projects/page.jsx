import Image from 'next/image'
import styles from './page.module.css'

const page = () => {
  return (
    <>
    <header className={styles.logo}>
      <Image
      src={'/Logo.svg'}
      width={120}
      height={120}
      className='p-2'
      alt=''
      />
    </header>
    </>
  )
}

export default page