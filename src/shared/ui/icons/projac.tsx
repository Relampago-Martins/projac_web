import { SVGProps } from 'react';

type CameraProps = SVGProps<SVGSVGElement> & {
    className?: string;
    width?: number;
    height?: number;
    strokeWidth?: number;
};

export function ProjacIcon({
    className,
    width = 200,
    height = 200,
    strokeWidth = 0,
    ...props
}: CameraProps) {
    return (
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={`${className}`}
            {...props}
        >
            <g transform="matrix(0.1000000014901161, 0, 0, -0.1000000014901161, -1.1368683772161603e-13, 511.99999999999994)">
                <path
                    d="M2121 4784 c-212 -108 -505 -258 -651 -334 -275 -142 -974 -501&#10;-1188 -610 -107 -54 -125 -67 -147 -104 -31 -53 -31 -89 -2 -141 19 -33 39&#10;-48 112 -85 177 -89 500 -240 513 -240 19 0 29 36 37 138 6 72 4 96 -6 109 -8&#10;9 -51 33 -97 55 -46 21 -94 46 -108 57 l-24 18 318 166 c404 210 1341 692&#10;1537 790 l149 75 231 -115 c126 -64 394 -200 595 -303 201 -103 505 -258 675&#10;-345 368 -187 493 -253 500 -265 3 -4 -49 -36 -114 -69 -73 -37 -122 -68 -126&#10;-80 -6 -18 12 -199 22 -213 10 -17 46 -3 294 113 271 127 330 165 349 225 33&#10;100 -17 152 -275 284 -603 306 -909 463 -1235 633 -201 104 -477 245 -613 313&#10;-228 114 -253 124 -304 124 -52 0 -78 -11 -442 -196z"
                />
                <path
                    d="M2405 4406 c-210 -109 -1083 -556 -1305 -668 -107 -54 -198 -104&#10;-202 -111 -5 -8 7 -25 32 -47 50 -43 50 -41 14 -383 -14 -136 -23 -254 -20&#10;-262 4 -13 47 -15 260 -15 l255 0 10 38 c6 20 15 60 22 87 17 73 81 216 136&#10;308 56 93 196 245 291 317 137 103 329 184 512 216 136 23 331 15 465 -21 115&#10;-30 300 -115 389 -179 73 -53 205 -187 269 -274 70 -96 144 -255 175 -379 l28&#10;-108 227 -3 c203 -2 228 -1 234 14 3 9 -1 78 -10 153 -9 75 -24 208 -33 296&#10;l-16 159 25 21 c14 11 36 27 48 36 l23 16 -25 25 c-14 14 -99 62 -190 108&#10;-185 93 -1069 544 -1287 656 -79 41 -153 74 -165 73 -12 0 -85 -33 -162 -73z"
                />
                <path
                    d="M2460 3713 c-14 -2 -67 -15 -119 -29 -322 -84 -567 -315 -674 -636&#10;-42 -125 -50 -186 -45 -335 5 -114 10 -153 33 -223 107 -332 338 -560 662&#10;-656 403 -118 851 44 1082 391 166 248 207 581 106 849 -82 219 -202 370 -385&#10;488 -89 57 -245 120 -352 142 -71 15 -245 20 -308 9z m335 -259 c182 -49 365&#10;-197 450 -365 38 -74 66 -195 72 -309 5 -87 2 -120 -16 -190 -105 -420 -528&#10;-654 -941 -521 -230 74 -395 240 -467 469 -80 258 -2 559 192 741 109 101 245&#10;168 390 192 72 11 250 2 320 -17z"
                />
                <path
                    d="M705 2723 c-74 -15 -145 -113 -153 -210 -4 -44 8 -224 23 -353 11&#10;-96 40 -388 50 -510 4 -41 17 -181 31 -310 13 -129 38 -374 54 -543 32 -319&#10;40 -359 93 -450 36 -62 108 -124 185 -160 l67 -32 1464 -3 c1619 -3 1519 -6&#10;1617 61 50 34 94 88 94 114 0 8 -175 193 -389 411 -462 472 -502 516 -538 590&#10;-24 50 -28 69 -28 147 0 77 4 101 29 163 l29 73 -19 26 c-11 15 -33 36 -48 47&#10;l-27 21 -120 -63 c-366 -194 -824 -170 -1172 62 -272 180 -479 519 -503 820&#10;-4 45 -11 87 -17 94 -7 9 -89 12 -356 11 -190 -1 -355 -4 -366 -6z"
                />
                <path
                    d="M3740 2711 c-5 -11 -10 -41 -10 -66 0 -78 -38 -241 -79 -336 -48&#10;-111 -90 -180 -152 -253 -51 -60 -55 -82 -22 -118 32 -36 50 -40 106 -25 85&#10;24 140 28 213 17 120 -19 176 -57 399 -275 110 -107 205 -195 212 -195 6 0 15&#10;5 18 10 7 11 38 271 86 724 27 257 30 306 20 351 -16 73 -58 127 -122 159&#10;l-53 26 -303 0 c-289 0 -303 -1 -313 -19z"
                />
                <path d="M 3622 1741 C 3481 1692 3411 1521 3475 1385 C 3494 1346 3896 926 4277 548 C 4482 345 4519 320 4622 320 C 4691 320 4731.181 335.654 4756.746 348.411 C 4781.13 361.355 4856 438 4870 465 C 4891 507 4919.018 527.856 4919.018 603.856 C 4919.018 678.856 4891 702 4871 740 C 4845 790 3878 1725 3824 1744 C 3762 1765 3688 1764 3622 1741 M 3798 1536 C 3813 1528 3932 1414 4063 1283 C 4324 1019 4327 1015 4271 959 C 4250 939 4232 930 4209 930 C 4180 930 4151 956 3941 1163 C 3811 1290 3697 1410 3687 1427 C 3666 1467 3673 1503 3707 1530 C 3737 1554 3761 1555 3798 1536" />
            </g>
        </svg>
    );
}
