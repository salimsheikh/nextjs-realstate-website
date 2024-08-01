"use client"

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'



export default function SearchForm() {

    const form = useForm();

    return <Form {...form}>

        <FormField control={form.control}
            name='address'
            render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input placeholder="Search by Address" {...field} />
                        </FormControl>
                    </FormItem>
                );
            }} />
    </Form>
}
