import React from 'react'

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div>Hola desde el layut 2
            {children}
        </div>
    )
}