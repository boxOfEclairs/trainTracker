import './App.css';
import FlightWidget from './components/FlightWidget';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div class="bg-white font-fira grid grid-rows-2 w-screen">
            <div class="grid grid-rows-5 h-[27.38rem]">
                <div class="h-[4.25rem]"></div>
                <div class="grid h-[3.9375rem] justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="342" height="87" viewBox="0 0 228 58" fill="none">
                <g filter="url(#filter0_d_233_54)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56673 1.60435C7.5046 2.62487 6.04331 5.21519 5.31963 7.35993C3.64133 12.3342 3.53582 26.6318 5.16434 28.3114C5.91589 29.0866 12.4589 29.9295 22.5844 30.5568C38.4984 31.5414 38.8478 31.6132 41.2896 34.4048L43.7782 37.2487L84.0932 40.4448C106.266 42.2014 126.872 43.8605 129.883 44.1306C178.469 48.4857 213.864 50.765 217.452 49.7681C222.863 48.265 225.147 44.7373 223.448 40.5064C220.487 33.1338 202.017 18.8639 187.099 12.4225C168.53 4.40514 164.29 3.94108 92.5543 2.07662C60.2526 1.23679 28.5759 0.369249 22.1613 0.149539C11.9542 -0.200559 10.257 -0.0198637 8.56673 1.60435Z" fill="#15171A"/>
                </g>
                <defs>
                  <filter id="filter0_d_233_54" x="0" y="0" width="342" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_54"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_54" result="shape"/>
                  </filter>
                </defs>
              </svg>
                </div>
                <div class="grid justify-items-center font-fira text-[3.125rem] text-dark right-[.75rem] py-[1.75rem]">
                    Trax 
                </div>
                <div class="flex h-[3rem] justify-items-center">
                </div>
                <div class="grid h-[5.25rem] px-[1rem] justify-items-center">
                    <SearchBar/>
                </div>
            </div>
            <div class="flex mx-auto h-[16rem] max-w-[91.875rem] p-[1rem]">
                <img src="imgs/map.svg" width="100%" height="100%" />
            </div>
            <div class="flex px-[1rem] mb-4 space-x-[2rem]">
              <FlightWidget/>
              <FlightWidget/>

            </div>
                
    </div>
  )
}

export default App



