"use client";
import React from "react";
import Slider from "react-slick";

const Story = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="md:px-[120px]  mt-[40px]">
      <div className="text-[20px] font-bold md:text-[40px] md:text-start text-center text-[#666666]">
        <h3>What services does</h3>
        <h3>File my return offer ?</h3>
      </div>
      <div className="md:grid hidden md:grid-cols-3 md:overflow-hidden overflow-scroll gap-[50px] mx-2 my-3 py-2 md:mt-[70px]">
        <div className="md:w-[382px] h-[256px] min-w-[308px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="md:text-[24px]">
              Authorized
              <br />
              E-Return Intermediary
            </h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>
          <p className="text-[16px] text-[#666666] md:mt-[16px]">
            Registered e-Return intermediary by Income Tax Department License No
            ERIP001268
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="text-[18px] md:text-[24px]">
              Filed More Than
              <br /> <span className="text-[#4640DE]">3.5 Mn </span>
              Income Tax Returns
            </h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>

          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            5 lac individuals have been filing IT return via our portal every
            year
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="text-[18px] md:text-[24px]">
              Pioneers In ITR Filing
              <br />
              Since
              <span className="text-[#4640DE]"> 2002</span>
            </h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Offline presence of over 2 decades and Online Portal made live in
            2015
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="text-[18px] md:text-[24px]">
              Dedicated Inhouse Team <br />
              Of Tax Experts
            </h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>

          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Team of CA's, MBA's, CFA's with an average experience of 20 ys +
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="text-[18px] md:text-[24px]">Data Privacy</h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>

          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Our AES-256 Encrypted System ensures Full-Proof Data & Identity
            Security
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <h3 className="text-[18px] md:text-[24px]">
              Partnering With Over
              <br />
              <span className="text-[#4640DE]">120+ Corporates</span>
            </h3>
            <img
              src="assets/images/star.png"
              alt="star"
              className="w-[59px] h-[59px] m-4"
            />
          </div>

          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Including 25 fortune 500 companies
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <Slider {...settings}>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[256px] min-w-[308px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <div className="w-[59px] h-[59px] m-4 !block">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="59"
                >
                  <path
                    d="M0 0 C2.29296875 0.06640625 2.29296875 0.06640625 5 1 C6.3832764 3.37347426 7.36010895 5.40197872 8.3125 7.9375 C8.57611328 8.58396484 8.83972656 9.23042969 9.11132812 9.89648438 C11 14.62061688 11 14.62061688 11 17 C12.68029297 17.16435547 12.68029297 17.16435547 14.39453125 17.33203125 C15.86726222 17.49149893 17.33991465 17.65169317 18.8125 17.8125 C19.55048828 17.88275391 20.28847656 17.95300781 21.04882812 18.02539062 C26.54974762 18.64766659 26.54974762 18.64766659 29.01171875 20.57421875 C29.50091797 21.27998047 29.50091797 21.27998047 30 22 C28.51895516 25.65000667 26.50201403 27.3972891 23.4375 29.8125 C20.33864704 32.5028225 19.1353527 33.59394189 17.8125 37.5625 C18.01712112 41.31388715 18.89294446 44.41834971 20 48 C20.125 51.4375 20.125 51.4375 20 54 C18.3828125 54.75390625 18.3828125 54.75390625 16 55 C13.1171875 53.27734375 13.1171875 53.27734375 9.875 50.9375 C5.75189263 48.17769692 2.5896608 46.30101253 -2.5 47.1875 C-6.71767028 48.50466887 -9.05637022 50.71006084 -12 54 C-13.32 54 -14.64 54 -16 54 C-16.19994915 49.5011442 -15.74863455 45.82592085 -14.6875 41.4375 C-13.7962106 36.85048237 -13.7962106 36.85048237 -16 32.625 C-18.05910834 30.82328021 -20.12269152 29.08923887 -22.25 27.375 C-25.75179856 24.35071942 -25.75179856 24.35071942 -26 21 C-21.96934831 18.11988881 -19.39320799 17.79459089 -14.5 17.9375 C-9.7229432 17.784797 -9.7229432 17.784797 -6.1484375 14.96484375 C-4.86137299 12.34728617 -3.89364437 9.77478617 -3 7 C-2.40926096 5.61917787 -1.80708058 4.24312363 -1.1875 2.875 C-0.795625 1.92625 -0.40375 0.9775 0 0 Z "
                    fill="#6D67FA"
                    transform="translate(27,2)"
                  />
                  <path
                    d="M0 0 C1.32 0 2.64 0 4 0 C5.21018767 25.7832035 5.21018767 25.7832035 -2 35 C-2.90936594 36.44993347 -3.80614714 37.90786994 -4.6875 39.375 C-5.45730505 40.58398869 -6.22801828 41.79240003 -7 43 C-8.80895505 45.94792675 -10.49942177 48.88341444 -12 52 C-12.66 52 -13.32 52 -14 52 C-14.16711898 42.77131838 -14.16711898 42.77131838 -13.1875 38.25 C-12.6651882 34.82982336 -12.6651882 34.82982336 -15.0625 31.875 C-16.98659877 29.84849821 -19.06412426 28.11099817 -21.25 26.375 C-24.75179856 23.35071942 -24.75179856 23.35071942 -25 20 C-20.96934831 17.11988881 -18.39320799 16.79459089 -13.5 16.9375 C-8.69994239 16.78065886 -8.69994239 16.78065886 -5.11328125 13.9296875 C-3.81511231 11.317756 -2.84949812 8.78820422 -2 6 C-1.3503125 4.205625 -1.3503125 4.205625 -0.6875 2.375 C-0.460625 1.59125 -0.23375 0.8075 0 0 Z "
                    fill="#948FF8"
                    transform="translate(26,3)"
                  />
                  <path
                    d="M0 0 C0 0.66 0 1.32 0 2 C-1.051875 2.5775 -2.10375 3.155 -3.1875 3.75 C-4.45987088 4.49738859 -5.73073129 5.24735513 -7 6 C-7.969375 6.556875 -8.93875 7.11375 -9.9375 7.6875 C-12.26940225 10.30205707 -12.34704764 10.99999638 -12.4375 14.375 C-12.06008565 20.79104396 -9.55367462 26.19619403 -7 32 C-7.99 32.33 -8.98 32.66 -10 33 C-11.48278354 32.08287863 -12.95997889 31.15252017 -14.37890625 30.1394043 C-19.68224317 26.3504423 -19.68224317 26.3504423 -25.90234375 24.734375 C-31.43086645 25.69874888 -34.24472048 27.80292288 -38 32 C-39.32 32 -40.64 32 -42 32 C-42 29.69 -42 27.38 -42 25 C-41.67 25 -41.34 25 -41 25 C-41 26.98 -41 28.96 -41 31 C-37.53215456 28.39911592 -34.94261174 26.27498739 -32.875 22.4375 C-30.05602309 17.26937566 -26.96177355 14.95343663 -22 12 C-17.54683507 8.7713844 -17.54683507 8.7713844 -15 4 C-12.63671875 2.83203125 -12.63671875 2.83203125 -9.6875 1.8125 C-8.23923828 1.29623047 -8.23923828 1.29623047 -6.76171875 0.76953125 C-4 0 -4 0 0 0 Z "
                    fill="#4842DE"
                    transform="translate(53,24)"
                  />
                  <path
                    d="M0 0 C0.33 0 0.66 0 1 0 C1.86129215 13.97207266 1.86129215 13.97207266 -1.3125 17.6875 C-2.199375 18.450625 -3.08625 19.21375 -4 20 C-4.7425 20.9590625 -4.7425 20.9590625 -5.5 21.9375 C-7 23 -7 23 -9.234375 22.66015625 C-12.08541622 21.9796111 -14.92033189 21.26477516 -17.75 20.5 C-18.71421875 20.2421875 -19.6784375 19.984375 -20.671875 19.71875 C-23 19 -23 19 -24 18 C-24 16.35 -24 14.7 -24 13 C-19.71 13 -15.42 13 -11 13 C-11 13.66 -11 14.32 -11 15 C-8.08365871 15.2502157 -8.08365871 15.2502157 -5 15 C-2.90149549 11.85224323 -2.51433498 10.0492934 -1.9375 6.375 C-1.09984399 1.09984399 -1.09984399 1.09984399 0 0 Z "
                    fill="#B4B2FD"
                    transform="translate(27,8)"
                  />
                  <path
                    d="M0 0 C-1.48104484 3.65000667 -3.49798597 5.3972891 -6.5625 7.8125 C-9.66135296 10.5028225 -10.8646473 11.59394189 -12.1875 15.5625 C-11.98287888 19.31388715 -11.10705554 22.41834971 -10 26 C-9.875 29.4375 -9.875 29.4375 -10 32 C-10.66 32 -11.32 32 -12 32 C-18.92926653 16.25166697 -18.92926653 16.25166697 -17 10 C-12.83017983 5.37126224 -6.57385994 0 0 0 Z "
                    fill="#7874F9"
                    transform="translate(57,24)"
                  />
                  <path
                    d="M0 0 C2.9375 0.125 2.9375 0.125 6 1 C7.375 3.5625 7.375 3.5625 8 6 C8.66 6 9.32 6 10 6 C10 6.99 10 7.98 10 9 C10.78375 9.309375 11.5675 9.61875 12.375 9.9375 C15 11 15 11 17 12 C17 12.66 17 13.32 17 14 C13.0671299 13.44509769 10.64273515 12.31891795 7.4375 10 C4.61947301 7.96828556 2.43818475 6.62370698 -1 6 C-1.042721 4.33388095 -1.04063832 2.66617115 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
                    fill="#312CCA"
                    transform="translate(27,42)"
                  />
                  <path
                    d="M0 0 C1.32 0 2.64 0 4 0 C5.2524216 26.68300275 5.2524216 26.68300275 -2 35 C-3.31455675 36.35184914 -4.64328033 37.69047058 -6 39 C-1.79039585 28.31408177 -1.79039585 28.31408177 0.5859375 24.36328125 C2.43038471 19.97635017 2.33357553 16.32189018 2.1875 11.625 C2.17396484 10.79355469 2.16042969 9.96210938 2.14648438 9.10546875 C2.11139059 7.07002934 2.05759228 5.03492709 2 3 C1.01 3.66 0.02 4.32 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z "
                    fill="#847FFA"
                    transform="translate(26,3)"
                  />
                  <path
                    d="M0 0 C1.86889895 2.80334843 3.27024908 5.51277094 4.6875 8.5625 C5.14511719 9.53316406 5.60273437 10.50382813 6.07421875 11.50390625 C6.37972656 12.32761719 6.68523438 13.15132812 7 14 C6.67 14.66 6.34 15.32 6 16 C5.34 16 4.68 16 4 16 C4 15.34 4 14.68 4 14 C2.35 13.67 0.7 13.34 -1 13 C-1.02708567 11.39592672 -1.04643483 9.7917215 -1.0625 8.1875 C-1.07410156 7.29417969 -1.08570312 6.40085937 -1.09765625 5.48046875 C-1 3 -1 3 0 0 Z "
                    fill="#6661F8"
                    transform="translate(32,5)"
                  />
                  <path
                    d="M0 0 C-1.26839526 0.50615298 -2.53983102 1.00469099 -3.8125 1.5 C-4.87404297 1.91765625 -4.87404297 1.91765625 -5.95703125 2.34375 C-8 3 -8 3 -11 3 C-11.33 4.32 -11.66 5.64 -12 7 C-12.99 7 -13.98 7 -15 7 C-13.125 1.125 -13.125 1.125 -12 0 C-4.23003802 -1.27376426 -4.23003802 -1.27376426 0 0 Z M-18 9 C-17.34 9.33 -16.68 9.66 -16 10 C-18.77280706 13.08089673 -21.06326356 14.68775452 -25 16 C-23.66667905 12.00003714 -21.5042173 11.16217663 -18 9 Z "
                    fill="#5851EF"
                    transform="translate(49,25)"
                  />
                  <path
                    d="M0 0 C0.33 0 0.66 0 1 0 C1 2.31 1 4.62 1 7 C1.45375 6.34 1.9075 5.68 2.375 5 C2.91125 4.34 3.4475 3.68 4 3 C4.66 3 5.32 3 6 3 C6.33 2.34 6.66 1.68 7 1 C6.35096 4.50481599 4.87822891 6.99483374 3 10 C2.31903578 11.32608822 1.64669414 12.65686601 1 14 C0.34 14 -0.32 14 -1 14 C-1.027193 12.41676312 -1.04648306 10.83338938 -1.0625 9.25 C-1.07410156 8.36828125 -1.08570313 7.4865625 -1.09765625 6.578125 C-1.00826198 4.2181162 -0.66912821 2.25501476 0 0 Z "
                    fill="#7E79F7"
                    transform="translate(13,41)"
                  />
                  <path
                    d="M0 0 C2.00720923 0.28674418 4.0085944 0.61866701 6 1 C5.67 2.65 5.34 4.3 5 6 C3.02 6 1.04 6 -1 6 C-1.042721 4.33388095 -1.04063832 2.66617115 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
                    fill="#2C26C4"
                    transform="translate(27,42)"
                  />
                  <path
                    d="M0 0 C0.33 0.66 0.66 1.32 1 2 C2.89533342 2.46523063 2.89533342 2.46523063 5.0625 2.625 C6.361875 2.74875 7.66125 2.8725 9 3 C5.93753253 4.78409802 3.77920727 5.22880021 0.25 5.125 C-0.54921875 5.10695313 -1.3484375 5.08890625 -2.171875 5.0703125 C-2.77515625 5.04710937 -3.3784375 5.02390625 -4 5 C-4 4.01 -4 3.02 -4 2 C-2.68 1.34 -1.36 0.68 0 0 Z "
                    fill="#7E7AFE"
                    transform="translate(39,19)"
                  />
                  <path
                    d="M0 0 C1.67110042 2.96178773 2.32682752 5.37071192 2.625 8.75 C2.69976562 9.54921875 2.77453125 10.3484375 2.8515625 11.171875 C2.92503906 12.07679687 2.92503906 12.07679687 3 13 C2.34 13 1.68 13 1 13 C-0.81242323 8.9811485 -2.33501617 5.38889325 -3 1 C-2.34 1.66 -1.68 2.32 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z "
                    fill="#6F6BF9"
                    transform="translate(44,43)"
                  />
                  <path
                    d="M0 0 C5.78898419 -0.20674944 10.42932723 0.40837921 16 2 C15.67 2.99 15.34 3.98 15 5 C14.33613281 4.79503906 13.67226563 4.59007812 12.98828125 4.37890625 C12.10527344 4.10949219 11.22226562 3.84007812 10.3125 3.5625 C9.44238281 3.29566406 8.57226562 3.02882813 7.67578125 2.75390625 C5.12974079 2.03655471 2.5996577 1.482459 0 1 C0 0.67 0 0.34 0 0 Z "
                    fill="#655EEE"
                    transform="translate(40,20)"
                  />
                  <path
                    d="M0 0 C2.31 0.66 4.62 1.32 7 2 C7 4.64 7 7.28 7 10 C6.34 9.01 5.68 8.02 5 7 C4.12927928 5.76779826 3.25415898 4.53869541 2.375 3.3125 C1.92898438 2.68988281 1.48296875 2.06726562 1.0234375 1.42578125 C0.68570312 0.95527344 0.34796875 0.48476563 0 0 Z "
                    fill="#746EF3"
                    transform="translate(8,31)"
                  />
                  <path
                    d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.31354642 5.74885845 -0.31354642 5.74885845 -3.5625 6.9375 C-4.366875 6.958125 -5.17125 6.97875 -6 7 C-6.66 6.34 -7.32 5.68 -8 5 C-6.20963542 3.99088542 -4.41927083 2.98177083 -2.62890625 1.97265625 C-1.02121854 1.1027487 -1.02121854 1.1027487 0 0 Z "
                    fill="#AFACFE"
                    transform="translate(23,24)"
                  />
                  <path
                    d="M0 0 C2.66666667 0.66666667 5.33333333 1.33333333 8 2 C8 2.66 8 3.32 8 4 C5.36 3.67 2.72 3.34 0 3 C0 2.01 0 1.02 0 0 Z "
                    fill="#C3C2FF"
                    transform="translate(3,22)"
                  />
                  <path
                    d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.77280706 4.08089673 -3.06326356 5.68775452 -7 7 C-5.66667905 3.00003714 -3.5042173 2.16217663 0 0 Z "
                    fill="#5E58F5"
                    transform="translate(31,34)"
                  />
                </svg>
              </div>

              <h3 className="md:text-[24px]">
                Authorized
                <br />
                E-Return Intermediary
              </h3>
              <p className="text-[16px] text-[#666666] md:mt-[16px]">
                Registered e-Return intermediary by Income Tax Department
                License No ERIP001268
              </p>
            </div>
          </div>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <h3 className="text-[18px] md:text-[24px]">
                Filed More Than
                <br /> <span className="text-[#4640DE]">3.5 Mn </span>
                Income Tax Returns
              </h3>
              <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
                5 lac individuals have been filing IT return via our portal
                every year
              </p>
            </div>
          </div>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[256px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <h3 className="text-[18px] md:text-[24px]">
                Pioneers In ITR Filing
                <br />
                Since
                <span className="text-[#4640DE]"> 2002</span>
              </h3>
              <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
                Offline presence of over 2 decades and Online Portal made live
                in 2015
              </p>
            </div>
          </div>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[169px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <h3 className="text-[18px] md:text-[24px]">
                Dedicated Inhouse Team <br />
                Of Tax Experts
              </h3>
              <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
                Team of CA's, MBA's, CFA's with an average experience of 20 ys +
              </p>
            </div>
          </div>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[169px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <h3 className="text-[18px] md:text-[24px]">Data Privacy</h3>
              <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
                Our AES-256 Encrypted System ensures Full-Proof Data & Identity
                Security
              </p>
            </div>
          </div>
          <div className="mx-[12px] my-[15px]">
            <div className="md:w-[382px] h-[169px] min-w-[308px]   py-[10px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
              <h3 className="text-[18px] md:text-[24px]">
                Partnering With Over
                <br />
                <span className="text-[#4640DE]">120+ Corporates</span>
              </h3>
              <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
                Including 25 fortune 500 companies
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Story;
