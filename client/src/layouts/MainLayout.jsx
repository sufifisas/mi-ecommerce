import Banner from "../components/Banner"

const MainLayout = ({ title, children }) => {
  return (
    <main className="pb-20 m-auto max-w-[1024px] px-4">
        <Banner title={title} className="mb-6" />
        { children }
    </main>
  )
}

export default MainLayout