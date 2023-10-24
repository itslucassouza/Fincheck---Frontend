import Ilustration from '../../assets/ilustration.png'
import Logo from '../../assets/logo.svg'

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            {/* <div className=" w-1/2" >
                
            </div> */}
            <div 
            className="
                w-1/2 
                p-8 
                column
                relative
                justify-center items-center" 
            >
                <img src={Ilustration} className="
                    object-cover 
                    max-w[656px] 
                    max-h-[960px]
                    rounded-[32px]
                    select-none
                " />

                <div className="max-w[656px]
                flex flex-col gap-6
                bg-white bottom-8  p-10 absolute rounded-b-[32px]">
                    <img src={Logo}  />
                  <p className='text-gray-700 font-medium text-xl'>
                    Gerencie suas finanças pessoais de forma simples com o fincheck, e o melhor, 
                    totalmente de graça
                  </p>
                </div>
            </div>
        </div>
    )
}