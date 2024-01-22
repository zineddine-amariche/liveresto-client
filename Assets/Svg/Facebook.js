import { Svg, G, Defs, ClipPath, Rect, Path, Stop,LinearGradient } from "react-native-svg";
import React  from "react";

export const FacebookSvg = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_340_5723)">
        <Path
          d="M6.66667 15.9111C2.88889 15.2444 0 11.9556 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 11.9556 13.1111 15.2444 9.33333 15.9111L8.88889 15.5556H7.11111L6.66667 15.9111Z"
          fill="#0062E0"
        />
        <Path
          d="M11.1109 10.2224L11.4665 8.00022H9.33317V6.44466C9.33317 5.82244 9.55539 5.33355 10.5332 5.33355H11.5554V3.28911C10.9776 3.20022 10.3554 3.11133 9.77762 3.11133C7.95539 3.11133 6.6665 4.22244 6.6665 6.22244V8.00022H4.6665V10.2224H6.6665V15.8669C7.11095 15.9558 7.55539 16.0002 7.99984 16.0002C8.44428 16.0002 8.88873 15.9558 9.33317 15.8669V10.2224H11.1109Z"
          fill="#FFF"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_340_5723"
          x1="8"
          y1="15.4462"
          x2="8"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
  

          <Stop stop-color="#0062E0" />
          <Stop offset="1" stop-color="#19AFFF" />
        
        </LinearGradient>
        <ClipPath id="clip0_340_5723">
          <Rect width="16" height="16" fill="#0062E0" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
