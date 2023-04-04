import React from "react";

type TProp = {
  name:
    | "voteup"
    | "icon-search"
    | "cart"
    | "close"
    | "up"
    | "filter"
    | "header__menu-logo-mobile"
    | "cart2"
    | "cart3"
    | "gift-disabled"
    | "gift-enabled"
    | "shiping-disabled"
    | "shiping-enabled"
    | "time-shipping"
    | "two-gift"
    | "arrowdown";
};

const Icons: React.FC<TProp> = ({ name }) => {
  switch (name) {
    case "icon-search":
      return (
        <svg
          className="icon icon-search"
          fill="none"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M10.6306 16.5995C14.3315 16.4724 17.2286 13.3691 17.1014 9.66821C16.9743 5.9673 13.871 3.0702 10.1701 3.19736C6.46919 3.32451 3.57209 6.42776 3.69924 10.1287C3.82639 13.8296 6.92965 16.7267 10.6306 16.5995ZM10.7267 19.3982C15.9733 19.2179 20.0803 14.8186 19.9 9.57206C19.7198 4.3255 15.3205 0.21846 10.0739 0.398716C4.82739 0.578971 0.720345 4.97827 0.900601 10.2248C1.08086 15.4714 5.48015 19.5784 10.7267 19.3982Z"
            fill-rule="evenodd"
            fill="currentColor"
          />
          <path
            clip-rule="evenodd"
            d="M14.9234 14.9819C15.4883 14.3768 16.4592 14.3651 17.0919 14.9557L21.6973 19.2552C22.33 19.8458 22.3849 20.8152 21.82 21.4203C21.2551 22.0255 20.2842 22.0372 19.6515 21.4465L15.0462 17.1471C14.4135 16.5564 14.3585 15.587 14.9234 14.9819Z"
            fill-rule="evenodd"
            fill="currentColor"
          />
        </svg>
      );
    case "arrowdown":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.69 4.69"
          className="icon icon-arrowdown"
        >
          <path className="st0" d="M.35.37l4 3.64 4-3.64"></path>
          <path className="st1" d="M2.75.01l1.6 1.45L5.95.01z"></path>
        </svg>
      );
    case "header__menu-logo-mobile":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header__menu-logo-mobile"
          width="85"
          height="32"
          viewBox="0 0 85 32"
          fill="none"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M59.7261 17.2695V31.749H56.5229L49.6035 22.34V31.749H46.5347V18.6228L45.8335 17.2695H49.801L56.6573 26.8087V17.2695H59.7261Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M27.8345 31.9991C28.8909 32.0048 29.8667 31.8267 30.7619 31.467C31.6582 31.1072 32.4307 30.6082 33.0828 29.9721C33.7337 29.336 34.2444 28.5811 34.6148 27.7098C34.8813 27.0828 35.0531 26.4205 35.1314 25.7238C35.1618 25.4532 35.2143 24.3614 35.1582 23.7025H27.8649L26.5665 26.3131H31.7704C31.5694 27.1376 31.1148 27.8171 30.409 28.3287C29.7019 28.8415 28.8559 29.095 27.8707 29.0904C27.2373 29.087 26.646 28.9637 26.0979 28.7204C25.5498 28.4772 25.073 28.1483 24.6675 27.7338C24.2608 27.3192 23.9441 26.8327 23.7139 26.2743C23.4848 25.7158 23.3715 25.1197 23.375 24.487C23.3785 23.8544 23.4977 23.2594 23.7326 22.7032C23.9675 22.1471 24.29 21.664 24.7014 21.2529C25.1116 20.8418 25.5884 20.522 26.1318 20.2902C26.6752 20.0595 27.263 19.9453 27.8976 19.9476C28.7565 19.9522 29.515 20.1417 30.1752 20.5163C30.8355 20.8909 31.3462 21.4299 31.7085 22.1334L34.588 20.7858C33.9885 19.6141 33.1026 18.6948 31.9305 18.0279C30.7584 17.3621 29.4261 17.0252 27.9338 17.0172C26.8774 17.0115 25.877 17.2034 24.9328 17.5905C23.9874 17.9776 23.1646 18.5098 22.4646 19.1882C21.7646 19.8654 21.2072 20.6579 20.7947 21.5635C20.381 22.4691 20.173 23.4387 20.1671 24.4699C20.1613 25.5011 20.3576 26.473 20.7538 27.3832C21.1511 28.2933 21.6922 29.0904 22.3782 29.7745C23.0641 30.4586 23.8752 30.9999 24.8089 31.3962C25.7415 31.7924 26.7512 31.9934 27.8345 31.9991Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M3.90672 17.2686H0L0.737403 18.7657V30.2542L0 31.7503H8.9657L9.77906 28.917H3.90672V17.2686Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M10.8613 31.7503H19.6003V28.9181H14.0423V25.7411H18.3394L19.1177 23.0185H14.0423V20.0893H19.6003V17.2686H10.8613V31.7503Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M36.2681 31.7503H45.007V28.9181H39.4491V25.7411H43.7473L44.5244 23.0185H39.4491V20.0893H45.007V17.2686H36.2681V31.7503Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M41.8662 14.9822C42.9227 14.9879 43.8985 14.8098 44.7936 14.45C45.69 14.0903 46.4624 13.5912 47.1145 12.9551C47.7654 12.3191 48.2761 11.5642 48.6466 10.6928C48.913 10.0659 49.0848 9.40352 49.1631 8.7069C49.1935 8.43625 49.2461 7.3445 49.19 6.68556H41.8966L40.5983 9.29503H45.8022C45.6011 10.1196 45.1466 10.799 44.4407 11.3107C43.7337 11.8234 42.8876 12.0769 41.9024 12.0724C41.269 12.069 40.6777 11.9456 40.1296 11.7024C39.5816 11.4591 39.1048 11.1302 38.6992 10.7157C38.2926 10.3011 37.9759 9.81464 37.7456 9.25621C37.5166 8.69777 37.4032 8.10164 37.4067 7.46897C37.4102 6.83631 37.5294 6.24132 37.7643 5.68517C37.9992 5.12901 38.3218 4.64595 38.7331 4.23483C39.1433 3.82371 39.6201 3.50395 40.1635 3.27212C40.7069 3.04144 41.2948 2.92724 41.9293 2.92952C42.7883 2.93409 43.5467 3.12366 44.207 3.49824C44.8673 3.87281 45.3779 4.41184 45.7402 5.11531L48.6197 3.76775C48.0202 2.59606 47.1344 1.67675 45.9623 1.00982C44.7901 0.344031 43.4579 0.00714122 41.9656 -0.000852784C40.9091 -0.00656279 39.9088 0.185293 38.9645 0.572432C38.0191 0.95957 37.1964 1.49174 36.4964 2.17009C35.7964 2.8473 35.2389 3.63985 34.8264 4.54545C34.4127 5.45106 34.2047 6.42062 34.1989 7.45184C34.193 8.48307 34.3893 9.45491 34.7855 10.3651C35.1828 11.2753 35.7239 12.0724 36.4099 12.7564C37.0959 13.4405 37.9069 13.9818 38.8406 14.3781C39.7732 14.7766 40.7817 14.9776 41.8662 14.9822Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M3.90672 0.252441H0L0.737403 1.7496V13.2381L0 14.7342H8.9657L9.77906 11.8997H3.90672V0.252441Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M10.8613 14.7342H19.6003V11.9008H14.0423V8.72494H18.3394L19.1177 6.00241H14.0423V3.07318H19.6003V0.252441H10.8613V14.7342Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M63.5688 14.7342H72.3067V11.9008H66.7498V8.72494H71.0469L71.824 6.00241H66.7498V3.07318H72.3067V0.252441H63.5688V14.7342Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M29.397 0.252441H24.8779L25.8338 2.09906L20.6147 14.7353H23.8659L24.9737 11.91H30.8519L31.9913 14.7353H35.3055L29.397 0.252441ZM26.0594 9.14063L27.9677 4.27457L29.8013 9.14063H26.0594Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M80.6094 4.23486V10.7477H82.2466V8.54591H83.9365L84.3455 7.11385H82.2466V5.71033H84.647V4.23486H80.6094Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M76.5625 4.10547C74.6553 4.10547 73.1045 5.62433 73.1045 7.4915C73.1045 9.35867 74.6553 10.8775 76.5625 10.8775C78.4697 10.8775 80.0204 9.35867 80.0204 7.4915C80.0204 5.62433 78.4685 4.10547 76.5625 4.10547ZM76.5625 9.30614C75.5423 9.30614 74.7125 8.49189 74.7125 7.4915C74.7125 6.49111 75.5423 5.67686 76.5625 5.67686C77.5827 5.67686 78.4124 6.49111 78.4124 7.4915C78.4124 8.49189 77.5827 9.30614 76.5625 9.30614Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M56.2401 14.9854C55.3099 14.9854 54.4778 14.8438 53.7451 14.5617C53.0124 14.2796 52.3918 13.8765 51.8847 13.3523C51.3775 12.8293 50.986 12.1955 50.7114 11.4509C50.4367 10.7075 50.2988 9.88065 50.2988 8.97161V0.252441H53.5125V8.80717C53.5125 9.78586 53.7451 10.5567 54.2102 11.122C54.6753 11.6873 55.352 11.9694 56.2401 11.9694C57.1283 11.9694 57.8049 11.6873 58.27 11.122C58.7351 10.5567 58.9677 9.78586 58.9677 8.80717V0.252441H62.1814V8.97276C62.1814 9.88179 62.0435 10.7086 61.7689 11.452C61.4943 12.1955 61.1028 12.8293 60.5956 13.3535C60.0884 13.8776 59.4679 14.2796 58.7351 14.5628C58.0012 14.8438 57.1703 14.9854 56.2401 14.9854Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M80.8372 23.1624L78.8365 22.7866C77.9367 22.6176 77.4412 22.1243 77.4412 21.3968C77.4412 20.4056 78.4813 19.8129 79.4863 19.8129C79.8287 19.8129 81.5325 19.8997 81.8831 21.5601L84.6399 20.2446C84.2332 19.0637 83.0155 17.0161 79.4664 17.0161C76.6045 17.0161 74.2754 19.0706 74.2754 21.5955C74.2754 23.7368 75.7408 25.307 78.1938 25.7958L80.1956 26.191C81.1843 26.3839 81.7745 26.9333 81.7745 27.6596C81.7745 28.5994 80.9599 29.1704 79.6487 29.1841C78.0582 29.2001 76.7727 28.0444 76.5741 26.907L73.9248 28.3516C74.5325 30.285 76.4046 32.0026 79.6289 32.0026C81.6576 32.0026 82.9104 31.2363 83.6034 30.5934C84.4927 29.77 85.0022 28.636 85.0022 27.4826C84.9999 25.3036 83.4047 23.6489 80.8372 23.1624Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M73.0452 21.6891C72.6514 20.8086 72.1138 20.0457 71.4325 19.3982C70.7501 18.7519 69.9519 18.2425 69.038 17.8702C68.123 17.4979 66.8211 17.2661 66.1258 17.2661H61.1147V31.7467H66.1165C67.1437 31.7467 68.1148 31.5651 69.0298 31.1951C69.9449 30.824 70.743 30.3158 71.4267 29.6705C72.1092 29.0242 72.6491 28.2624 73.0429 27.382C73.4379 26.5026 73.6354 25.5536 73.6366 24.5361C73.6354 23.5186 73.4391 22.5696 73.0452 21.6891ZM70.0454 26.2251C69.8198 26.7481 69.5137 27.2015 69.1268 27.5864C68.7389 27.9712 68.2784 28.2773 67.7432 28.5034C67.208 28.7295 66.6377 28.8426 66.0335 28.8426H64.2817V20.2205H66.0393C66.6447 20.2205 67.2138 20.3347 67.749 20.5619C68.2831 20.7892 68.7435 21.0952 69.1315 21.4801C69.5183 21.8661 69.8233 22.3229 70.0489 22.8528C70.2733 23.3827 70.3866 23.9434 70.3854 24.5338C70.3843 25.1402 70.2709 25.7032 70.0454 26.2251Z"
              fill="#C28F2C"
            ></path>
          </g>{" "}
          <defs>
            <clipPath id="clip0">
              <rect width="85" height="32" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg width="25" height="25" viewBox="683 42 25 25">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAC/ElEQVRYR7WYy6tPURTHPxeZKBn4CwyVN+F6i3RT8iZJmJiIkOuR9zshYipKkjddSSTvZCbPgVcXA3ldr4mB6MveOnf/9trnnHt/d09+v9/Za6/1+a291tprnxr+jQ7APOAXcAj47Z635cdMoAtwDnhXA3QGbgE9ndUHwBDgRxtSXALGOf1fgH4C2QssDow+AkYBH6sM0x5oAOoCvQ0CuQkMixhsBHoA36sIcweojdkSyFTgpGHssfPMh1bCKAYvZLYjVFcvEI3NwBrD2Bvnma+tgLkLDDLWK1gneRDJ7AKWGcIPgRFAU0kY6VdMjDfWHQeUPWRB9HsTsNZY9NplVhnPXHd/IKbyLDDZT4Qger4TWG7AKJtGAp9yPNPOxUSYHX7ZMWBWVkcMRPPbgZWGsbfOM6ltsjJRKk+7BGmm3gKR0B5giQHzBBgMfIvMX4zUCS+m7Jwe05kCkfw2YJUBozrTF/icmb/mti62xISIBWtMQSqbngLd3aJs2Q71/M8OK7byPOLXbQVWG0ruATov/NkRip0AZuQEd0X6puR3A0vzFAbzzVI0tbaoR7yOVDaV3o4i6ZuCXwfUA50MIfU0B4EFZbxX1iNe9wugm2HoJ9C1bD/TEpBUdni2+661KNxclQW5Aowp6PJnwFDgfRH5MiCpYmXZ0hb2KdJcFQW5Cow2rKngqaXcYcwLZkBeC1EE5AYw3DCSLVapoqdt6m+cTX9V54FcBsYaEGeAKcFcqoUQjDwT7WdSIKmjPHV2pNrO584zFTAWSCo7TgHTcjJB8bLCkInCxEBuuwtWTE9FZ5UA2gioCseGAlgxo8MyGiNq+a1G9zwwsUhNyMikWoiXQC9fgbMe0bVTBSg2jgKzS0J48Q3A+sQ2DVRz5UFSnih8lCdA9wGLjPlXQG+B6GKlSI+NI8CcFnoiXKZ4UdzExmGBWFuii9GEKkF4NfuBhRGdjQLRmwC9EciOanoitKt4UdxkxwEfI3o5M9fN6Pv8KnsiVLfFXeI6AjpC6v4AkWyRdVRRwh4AAAAASUVORK5CYII="
            width="25"
            height="25"
            x="683"
            y="42"
          />
        </svg>
      );
    case "up":
      return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M9 5L5 1L1 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 20 18" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 11H14C14.552 11 15 11.448 15 12V16C15 16.552 14.552 17 14 17H12C11.448 17 11 16.552 11 16V12C11 11.448 11.448 11 12 11Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 14H15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 14H1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 7H6C5.448 7 5 6.552 5 6V2C5 1.448 5.448 1 6 1H8C8.552 1 9 1.448 9 2V6C9 6.552 8.552 7 8 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 4H5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 4H19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "cart2":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.625 12.6991V6.30088C16.625 5.73483 16.3234 5.21233 15.8333 4.92971L10.2917 1.73058C9.80162 1.44796 9.19837 1.44796 8.70833 1.73058L3.16667 4.92971C2.67662 5.21233 2.375 5.73563 2.375 6.30088V12.6999C2.375 13.266 2.67662 13.7885 3.16667 14.0711L8.70833 17.2702C9.19837 17.5528 9.80162 17.5528 10.2917 17.2702L15.8333 14.0711C16.3234 13.7877 16.625 13.2652 16.625 12.6991Z"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.94542 10.1808V7.43849L13.0625 3.32974"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 9.5V17.48"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4128 5.5092L9.5 9.49999L2.58717 5.5092"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "cart3":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.49998"
            cy="9.50001"
            r="7.12797"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.68365 9.7685L8.39991 11.4848L8.38882 11.4737L12.2609 7.60159"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "gift-disabled":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gift-disabled"
        >
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "gift-enabled":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gift-enabled"
        >
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "shiping-disabled":
      return (
        <svg
          className="shiping-disabled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 19.42H8.17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14H18V10H21.2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.556 5H14C14.552 5 15 5.448 15 6V15H2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.678 18.086 17.678 18.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.678 7.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V6C2 5.448 2.448 5 3 5H4.238"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39701 9.318C6.10001 9.318 4.23801 7.456 4.23801 5.159C4.23801 2.909 6.15101 0.998002 8.40001 1C10.696 1.002 12.555 2.863 12.555 5.159C12.555 7.455 10.694 9.318 8.39701 9.318"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M10.245 4.23499L7.934 6.54599L6.548 5.15899"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "shiping-enabled":
      return (
        <svg
          className="shiping-enabled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 19.42H8.17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14H18V10H21.2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.556 5H14C14.552 5 15 5.448 15 6V15H2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.678 18.086 17.678 18.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.678 7.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V6C2 5.448 2.448 5 3 5H4.238"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39701 9.318C6.10001 9.318 4.23801 7.456 4.23801 5.159C4.23801 2.909 6.15101 0.998002 8.40001 1C10.696 1.002 12.555 2.863 12.555 5.159C12.555 7.455 10.694 9.318 8.39701 9.318"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M10.245 4.23499L7.934 6.54599L6.548 5.15899"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "time-shipping":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="time-shipping"
        >
          <path
            d="M7.63 14.866L11.286 12.637V7.98602"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 21V21C6.02944 21.0018 1.99855 16.9738 1.99674 12.0033C1.99493 7.03271 6.0229 3.00181 10.9935 3C15.5783 2.99833 19.4316 6.44355 19.941 11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.333 17.333L17.667 19L16.667 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 22H16V22C14.8954 22 14 21.1046 14 20V16V16C14 14.8954 14.8954 14 16 14H20V14C21.1046 14 22 14.8954 22 16V20V20C22 21.1046 21.1046 22 20 22V22Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "two-gift":
      return (
        <svg
          width="52"
          height="24"
          viewBox="0 0 52 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="two-gift"
        >
          <path
            d="M42 11H47.5C47.8978 11 48.2794 10.842 48.5607 10.5607C48.842 10.2794 49 9.89782 49 9.5V8.5C49 8.10218 48.842 7.72064 48.5607 7.43934C48.2794 7.15804 47.8978 7 47.5 7H32.5C32.1022 7 31.7206 7.15804 31.4393 7.43934C31.158 7.72064 31 8.10218 31 8.5V9.5C31 9.89782 31.158 10.2794 31.4393 10.5607C31.7206 10.842 32.1022 11 32.5 11H38"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M48 11V19C48 19.5304 47.7893 20.0391 47.4142 20.4142C47.0391 20.7893 46.5304 21 46 21H34C33.4696 21 32.9609 20.7893 32.5858 20.4142C32.2107 20.0391 32 19.5304 32 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M38 3C38.5304 3 39.0391 3.21071 39.4142 3.58579C39.7893 3.96086 40 4.46957 40 5V7H38C37.4696 7 36.9609 6.78929 36.5858 6.41421C36.2107 6.03914 36 5.53043 36 5C36 4.46957 36.2107 3.96086 36.5858 3.58579C36.9609 3.21071 37.4696 3 38 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M42 3C42.5304 3 43.0391 3.21071 43.4142 3.58579C43.7893 3.96086 44 4.46957 44 5C44 5.53043 43.7893 6.03914 43.4142 6.41421C43.0391 6.78929 42.5304 7 42 7H40V5C40 4.46957 40.2107 3.96086 40.5858 3.58579C40.9609 3.21071 41.4696 3 42 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41 7H39C38.4477 7 38 7.44772 38 8V20C38 20.5523 38.4477 21 39 21H41C41.5523 21 42 20.5523 42 20V8C42 7.44772 41.5523 7 41 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default: // voteup
      return (
        <svg version="1.1" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M0,0h24v24h-24Z"></path>
            <path
              stroke="#323232"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.944,19h-1.888c-0.583,0 -1.056,-0.473 -1.056,-1.056v-7.388c0,-0.583 0.473,-1.056 1.056,-1.056h1.888c0.583,0 1.056,0.473 1.056,1.056v7.388c0,0.583 -0.473,1.056 -1.056,1.056Z"
            ></path>
            <path
              stroke="#323232"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8,10.572l3.649,-4.751c0.679,-0.885 2.005,-0.907 2.714,-0.046v0c0.265,0.321 0.409,0.725 0.409,1.141v3.271h3.096c0.601,0 1.162,0.3 1.496,0.799l0.329,0.491c0.295,0.441 0.381,0.99 0.234,1.499l-1.359,4.722c-0.222,0.771 -0.927,1.302 -1.729,1.302h-6.289c-0.5,0 -0.978,-0.208 -1.318,-0.574l-1.232,-1.326"
            ></path>
          </g>
        </svg>
      );
  }
};

export default Icons;
