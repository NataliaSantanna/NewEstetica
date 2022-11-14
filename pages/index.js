import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

      <nav>

      </nav>
      <header className={styles.headerHomepage}>
        <p>NEWESTETICA</p>

      </header>

      <div className={styles.contentHomePage}>

        <h3 className='teste'>OLÁ, BEM VINDO AO NEWESTETICA!</h3>

        <div className='pt-3'>
          <button type="button" className="btn btn-outline-primary m-2"> Cadastro  </button>
          <button type="button" className="btn btn-outline-primary">Procedimentos</button>
        </div>

      </div>


    </>
  )
}
