import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import ContactForm from '../components/contact-form'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{`${CMS_NAME}`}</title>
            </Head>
            <Header pic="headercontact" text='Kontakt' />
            <ContactForm />
        
        </Layout>
    )
}