import React from 'react'


const Grid = () => {

    return (
        <>
        <div class='container mx-auto my-10'>

                <div class="grid grid-cols-1 sm:grid-cols-2
                     md:grid-cols-3 lg:grid-cols-3 gap-x-3
                      gap-y-6 mx-6 my-10">

                    <div class="video h-120 w-maz border-4 md:row-span-2">1</div>
                  
                    <div class="video h-60 w-maz border-4 md:row-span-1">2</div>
                    <div class="video h-60 w-maz border-4 md:row-span-1">3</div>
                
                    <div class="video h-60 w-maz border-4 md:col-span-2">4</div>
                    <div class="video h-60 w-maz border-4">5</div>

                </div>
       
        </div>
        </>
    )
}
export default Grid