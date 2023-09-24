import { ColorRing } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='fixed flex items-center justify-center z-50 bg-[#FFFFFF] bg-opacity-70 left-0 top-0 w-screen h-screen'>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
  )
}

export default Loader