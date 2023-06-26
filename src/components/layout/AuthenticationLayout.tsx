import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <main className="AuthenticationLayout">
      <section className="left">
        <div className="container">
          <p>prueba</p>
        </div>
      </section>
      <section className={`right`}>
        {children}
      </section>
    </main>
  )
}

export default AuthenticationLayout