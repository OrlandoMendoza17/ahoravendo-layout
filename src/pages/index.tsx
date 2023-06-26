import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Header from "@/components/widgets/Header";

const Home = () => {
  return (
    <>
      <Header/>
      <AuthenticationLayout>
        <div className="w-[542px]">
          <h1 className="text-2xl font-bold pb-[24px]">¡Nos da gusto conocerte!</h1>
          <p className="text-xl">Para registrarte en Ahora Vendo necesitamos validar algunos datos.</p>
        </div>
      </AuthenticationLayout>
    </>
  )
}


export default Home;