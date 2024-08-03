import {MapPin } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-20 bg-slate-800 text-white'>
        <div className='container flex flex-col sm:flex-row justify-between gap-6'>
            <div>
                <p className='text-lg font-semibold'>Estate</p>
                <p className='max-w-lg text-slate-300 mt-1'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>
            <div>
                <p className='text-lg font-semibold'>Contacts</p>
                <address className='text-slate-300 mt-1'>
                    <MapPin className='inline-block w-5 h-5 mt-0.5' />
                    304, Stove Wala House, 
                    <br />Opposit Pink Appartment, 
                    <br />Kurla West,
                    <br />Mumbai 70
                </address>
            </div>
        </div>
        <p className='text-center pt-20 pb-4 text-slate-400'>© 2024 EState. Design by The Salim Shaikh.</p>
    </footer>
  )
}
