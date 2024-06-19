export default function SearchBar(){
    return(
        <form class="grid relative border flex-1 h-[7rem] mx-auto shadow-shadow bg-white border-white rounded-xl pl-[.5rem] pt-[.25rem] pr-[.5rem] pb-[.5rem]">
            <div class="h-[1.75rem] text-title text-back font-tommybold">Find Train</div>
            <div class="grid grid-cols-3 pt-[.5rem]">
                <input type="text" id="departure" class="grid-col bg-gray-50 shadow-shadow text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Departure" required />
                <div class="grid-col"></div>
                <input type="text" id="arrival" class="grid-col bg-gray-50 shadow-shadow text-gray-900 text-sm rounded-lg focus:ring-dark focus:border-dark block w-full p-2.5" placeholder="Arrival" required />
            </div>
            <div class="grid-row h-[2.5rem]">
            </div>
        </form>

    );
}