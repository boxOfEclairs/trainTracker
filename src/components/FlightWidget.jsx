export default function FlightWidget(){
    return(
        <div class="relative flex-1 ">
                        <div class="flex flex-row absolute -top-1 border border-white bg-white shadow-dark w-auto sm:w-[10.1875rem] h-[1.5rem] rounded-xl pl-[.5rem] z-40 align-items-center font-chivo text-back text-[.975rem] font-[500]">
                            <p class="mr-[.5rem]">Arrival</p>
                            <p class="mr-[.5rem]">January 1st</p>
                        </div>
                        <div class="relative border border-white bg-white shadow-red pt-[1.5rem] pb-[1rem] pr-[1rem] pl-[.5rem] rounded-xl flex flex-col h-[7.6875rem] z-5">
                            <div class="text-title text-back font-tommybold h-[1.75rem] z-5">LOC</div>
                                
                            <div class="text-subtext text-gray font-fira">City, ST</div>
                            <div class="text-title text-back font-tommy justify-self-start align-self-end h-[1.75rem]">
                                12:00 AM
                            </div>
                            <div class="text-subtext text-gray font-fira">
                                Scheduled 12:00 AM
                            </div>
                        </div>
        </div>
    );
}

function ArrivalWidget(){
    return (
        <div class="relative flex-1 ml-[.5rem]">
                        <div class="flex flex-row absolute -top-1 border border-white bg-white shadow-dark w-auto sm:w-[10.1875rem] h-[1.5rem] rounded-xl pl-[.5rem] z-40 align-items-center font-chivo text-back text-[.975rem] font-[500]">
                            <p class="mr-[.5rem]">Arrival</p>
                            <svg class="w-5 h-5 ml-auto mr-[.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(35,35,47,1)"><path d="M20.949 14.8882C20.7346 15.6884 19.9121 16.1633 19.1119 15.9489L3.44528 11.751C3.00205 11.6323 2.69653 11.2271 2.70424 10.7683L2.79514 5.36515L4.24403 5.75338L5.15891 9.10435L10.2542 10.4696L9.88479 2.08844L11.8166 2.60608L14.6269 11.6413L19.8883 13.0511C20.6885 13.2655 21.1634 14.088 20.949 14.8882ZM4.00008 19H20.0001V21H4.00008V19Z"></path></svg>
                        </div>
                        <div class="relative border border-white bg-white shadow-red pt-[1.5rem] pb-[1rem] pr-[1rem] pl-[.5rem] rounded-xl flex flex-col h-[7.6875rem] z-5">
                            <div class="text-title text-back font-tommybold h-[1.75rem] z-5">JFK</div>
                                
                            <div class="text-subtext text-gray font-fira">New York, NY</div>
                            <div class="text-title text-back font-tommy justify-self-start align-self-end h-[1.75rem]">
                                12:00 AM
                            </div>
                            <div class="text-subtext text-gray font-fira">
                                Scheduled 12:00 AM
                            </div>
                        </div>
        </div>
    )
}