import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeaderEstetica from '../components/HeaderEstetica'

export default function Home() {
  return (
    <>

      <nav>

      </nav>
      <HeaderEstetica />
     

      <div className={styles.contentHomePage}>

        <h3 className='teste'>OLÁ, BEM VINDO AO NEWESTETICA!</h3>

        <div className='pt-3'>
          <Link href="/cadastroclientes"> <button type="button" className="btn btn-outline-primary m-2">Cadastro </button></Link>
          <Link href="/procedimentos"> <button type="button" className="btn btn-outline-primary">Procedimentos</button></Link>
          <Link href="/agendamento"> <button type="button" className="btn btn-outline-primary">Agendamentos</button></Link>
        </div>

      </div>


    </>
  )
}
