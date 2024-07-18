import React from 'react'

export default function AppLoader(){
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    return {isLoading, setIsLoading};
}