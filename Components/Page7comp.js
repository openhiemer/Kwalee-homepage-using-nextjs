import React from 'react'
import Image from 'next/image'

const Page7comp = () => {
  return (
    <div className="page7">
        <h2>As A Game Publisher, We’re Super Proud Of Our Awards</h2>
        <div className="awards">
            <Image height={170} width={180} loading='lazy'  src="/award1.png" alt="logo1" />
            <Image height={170} width={180} loading='lazy' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/Women-in-Games.png" alt="logo2" />
            <Image height={170} width={180} loading='lazy' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/Best-Mobile-Game-Publisher.png" alt="logo3" />
            <Image height={170} width={180} loading='lazy' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/Top-Publisher-Award.png" alt="logo5" />
            <Image height={170} width={180} loading='lazy' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/Top-50-Mobile-Game-Makers-Award.png" alt="logo6" />

        </div>
    </div>
  )
}

export default Page7comp