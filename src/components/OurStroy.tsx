import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function OurStroy() {
  return (
    <div className='container pt-20 pb-36 grid lg:grid-cols-2 gap-10'>

            <div>
                <div className='relative h-fit w-fit bg-red-500'>
                    <Image src="/home.jpg" alt=' a picture of room' width={400} height={400} className='object-cover' />
                    <Image src="/image-2.jpg" alt=' a picture of room' width={250} height={250} className='object-cover absolute top-1/2 left-1/2 border-4 hidden lg:block' />
                </div>
            </div>
            <div>
                <p className='font-semibold mb-1'>Our Story</p>
                <p className='text-3xl mb-2'>Efficiency. Transparency. Control.</p>
                <p className='text-muted-foreground mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni vel sed! Nulla porro necessitatibus autem quam doloremque ratione, aliquid dolorem consectetur velit nostrum tempora voluptatem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni vel sed! Nulla porro necessitatibus autem quam doloremque ratione, aliquid dolorem consectetur velit nostrum tempora voluptatem.</p>
                <Button>Read More</Button>
            </div>


    </div>
  )
}
