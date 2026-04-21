import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card'

export const CAGNumbers = () => {
    return (
        <div className='flex sm:gap-16 gap-4 flex-col sm:flex-row items-center justify-between w-full mb-12 m-auto rounded-2xl '>
            <Card className='ring-1 w-xs h-48'>
                <CardHeader className='text-center text-xl sm:text-2xl text-shadow-2xs'>
                    Active Members
                </CardHeader>
                <CardContent className='text-2xl sm:text-3xl font-bold text-shadow-2xs text-center'>
                    1234
                </CardContent>
                <CardFooter>We currently have registered and growing</CardFooter>
            </Card>
            <Card className='ring-1 w-xs h-48'>
                <CardHeader className='text-center text-xl sm:text-2xl text-shadow-2xs'>
                    Groups
                </CardHeader>
                <CardContent className='text-2xl sm:text-3xl font-bold text-shadow-2xs text-center'>
                    10
                </CardContent>
                <CardFooter>And we will continue growing</CardFooter>
            </Card>
        </div>
    )
}
