import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({ children, userName }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const btnClassName = isFollowing
        ? 'tw-followCard-btn is-following'
        : 'tw-followCard-btn' 

    const handelClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt="foto alejf9" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handelClick}>{text}</button>
            </aside>
        </article>
    )
}