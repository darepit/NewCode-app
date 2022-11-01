import { Profile, Kudo as IKudo } from '@prisma/client'
import { colorMap, backgroundColorMap, langMap } from '~/utils/constants'
import { deleteKudo } from '~/utils/kudos.server'

export function Kudo({ kudo }: { kudo: Partial<IKudo> }) {
const test = '635f61a8999500979e00a3c8PY' 
    return (
        
        <div className={`flex h-300 ${backgroundColorMap[kudo.style?.backgroundColor || 'RED']} p-4 rounded-xl w-full gap-x-2 relative`}>
         
            <div className="flex flex-col">
                <span className="px-2 py-1 bg-yellow-300 rounded-xl text-black-300 w-auto">
                {kudo.title}                            </span>
                       <p><br></br></p>
                <p className={`${colorMap[kudo.style?.textColor || 'WHITE']} whitespace-pre-wrap break-all`}>{kudo.message}</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl">
                {langMap[kudo.style?.lang || 'JAVASCRIPT']}
            </div>

        </div>
    )
}