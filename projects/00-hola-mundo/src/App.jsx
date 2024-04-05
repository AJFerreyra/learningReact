import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'
import React from 'react'

export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard userName='midudev'>
                    Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName='pheralb'>
                    Pablo Hernández
            </TwitterFollowCard>
        </div>     
    )
}