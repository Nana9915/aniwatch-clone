import Image from 'next/image';
import { MenuIcon } from './menu';
import { DiscordIcon } from './discordIcon';
import { TelegramIcon } from './telegramIcon';
import { RedIcon } from './redIcon';
import { Twitter } from './twitterIcon';

export const Header = () => {
    return (
        <header>
            <div className="flex  bg-[#242428] py-[19px] w-[1440px] h-[70px]  items-center justify-center mx-auto">
                <div className='flex '>
                <div className='flex gap-[19px]'>
                <div>
                    <a href="#">
                        <MenuIcon />
                    </a>
                </div>
                <div>
                    <Image width={122} height={40} src="/logo.png"/>
                </div>
                <div >
                    <form>
                        <input type="text" placeholder='Search anime...' style={{width:"360px", height:"40px", padding:"9.5px 15px"}}/>
                    </form>
                </div>
                </div>
                <div style={{display:"flex", gap:"5px", margin:"0 0 0 30px"}}>
                    <a href="#">
                        <DiscordIcon />
                    </a>
                    <a href="#">
                        <TelegramIcon />
                    </a>
                    <a href="#">
                        <RedIcon />
                    </a>
                    <a href="#">
                        <Twitter />
                    </a>
                </div>
                </div>
                <div className='bg-prime-color px-[16px] py-2 rounded cursor-pointer ml-[596px]'>
                    Login
                </div>
            </div>
        </header>
    )
}