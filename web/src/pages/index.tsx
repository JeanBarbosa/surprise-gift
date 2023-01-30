import { Button } from '@/components/Button'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import Head from 'next/head'
import Image from 'next/image'
import { withSSRGuest } from '@/utils/withSSRGuest'
import siginBackground from '../assets/login.svg'
import { Input } from '@/components/Input'
import {
  FormWrapper,
  ImageContainer,
  SignInContainer
} from '@/styles/pages/signIn'
import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

interface IFormInputs {
  email: string
  name: string
}

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('E-mail é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
}).required()

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })
  const { signIn } = useAuth()

  async function onSubmit(data: IFormInputs) {
    try {
      setIsLoading(true)
      await signIn(data)
    } catch (error) {
      alert('Não foi possível entrar. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Presente Surpresa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInContainer>
        <ImageContainer>
          <Image src={siginBackground} width={520} height={480} alt="" />
        </ImageContainer>
        <FormWrapper>
          <h1>
            Não envie brindes, <br />
            crie experiências! 🚀
          </h1>

          <p>
            Faça o envio de presentes surpresa com os  <br />
            seus brindes e produtos personalizados  <br />
            de maneira mais simples na nossa plataforma! 🧡
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder='Nome' {...register("name")} />
            <span>{errors.name?.message}</span>

            <Input placeholder='E-mail' {...register("email")} />
            <span>{errors.email?.message}</span>

            <Button disabled={isLoading} title="Entrar" type='submit' />
          </form>
        </FormWrapper>
      </SignInContainer>
    </>
  )
}

// Verifica se existe cookies/se usuário está logado e redirecionado para o dashboard
export const getServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {},
  }
})