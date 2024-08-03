import React from 'react'
import { propertiesList } from './Features';
import { Bath, Bed, Link, Square, StarIcon } from 'lucide-react';
import Image from 'next/image'

type PropertyCardProps = (typeof propertiesList)[0];

// interface PropertyPropTypes {
//     id: string;
//     name: string;
//     price: number;
//     rating: number;
//     sqft: number;
//     beds: number;
//     baths: number;
//     image: string;    
// }



export default function PropertyCard({ id,
    name,
    price,
    rating,
    sqft,
    beds,
    baths,
    image, }: PropertyCardProps) {
    return (
         <div className='group'>
        <div className='border rounded-md overflow-hidden'>
            <div className='aspect-[16/10] overflow-hidden'>
                <Image src={image} alt={name} width={400} height={420} className='w-full transition-transform group-hover:scale-105' />
            </div>
            <div className='p-6 space-y-6'>
                <p className='text-lg font-semibold'>{name}</p>
                <div className='grid grid-cols-3 items-center divide-x border-y border-x border-border/50'>
                    <p className='py-2 flex items-center gap-2 justify-center'><Square className='w-4 h-4' />{sqft} sqft</p>
                    <p className='py-2 flex items-center gap-2 justify-center'><Bed className='w-4 h-4' />{beds} Beds</p>
                    <p className='py-2 flex items-center gap-2 justify-center'><Bath className='w-4 h-4' />{sqft} Baths</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-muted-foreground'>Price</p>
                        <p className='font-semibold'>{price}</p>
                    </div>
                    <div>
                        <p className='text-muted-foreground'>Rating</p>
                        <div className='flex gap-2 items-center'>
                            {
                            Array(5).fill(0).map((_,index) => {
                                return <div key={index}>
                                    <StarIcon fill={index < rating ? "orange" : 'transparent'} color="orange" size={16} />
                                </div>
                            }) }
                        </div>

                    </div>
                </div>
            </div>
        </div>
         </div>
    )
}
