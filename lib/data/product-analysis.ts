// lib/data/product-analysis.ts - Updated to fix TypeScript any types
import { yearlyData } from './overview';

// Interface for product category data
export interface CategoryData {
    Month: number;
    Year: number;
    Camera: number;
    "Game CD_DVD": number;
    Entertainment: number;
    Camera_accessory: number;
    "Gaming hardware": number;
    "Camera Growth (%)": number;
    "Game CD_DVD Growth (%)": number;
    "Entertainment Growth (%)": number;
    "Camera_accessory Growth (%)": number;
    "Gaming hardware Growth (%)": number;
    [key: string]: number;
}
  
// Interface for subcategory data
export interface SubcategoryData {
    Month: number;
    Year: number;
    [key: string]: number | string;
}
  
// Interface for top products data
export interface TopProductsData {
    month: number;
    year: number;
    [key: string]: number | string;
}
  
// Interface for yearly data
export interface YearlyData {
    [key: string]: number;
}

// Interface for processed category data
export interface ProcessedCategoryData {
    name: string;
    revenue: number;
    growth: number;
}

// Interface for subcategory and product data
export interface ProcessedSubcategoryData {
    name: string;
    revenue: number;
}


  // Monthly data for product categories
  export const categoryMonthlyData: CategoryData[] =[
    {
        "Month": 7,
        "Year": 2023,
        "Camera": 530079.7586206896,
        "Game CD_DVD": 128553.72413793103,
        "Entertainment": 990329.4137931034,
        "Camera_accessory": 209394.27586206896,
        "Gaming hardware": 214934.67816091955,
        "Camera Growth (%)": 0.0,
        "Game CD_DVD Growth (%)": 0.0,
        "Entertainment Growth (%)": 0.0,
        "Camera_accessory Growth (%)": 0.0,
        "Gaming hardware Growth (%)": 0.0
    },
    {
        "Month": 8,
        "Year": 2023,
        "Camera": 707.471264367816,
        "Game CD_DVD": 207.51724137931035,
        "Entertainment": 2937.5402298850577,
        "Camera_accessory": 485.95402298850576,
        "Gaming hardware": 574.4827586206897,
        "Camera Growth (%)": -99.86653494066464,
        "Game CD_DVD Growth (%)": -99.8385754728065,
        "Entertainment Growth (%)": -99.70337746319845,
        "Camera_accessory Growth (%)": -99.7679239219946,
        "Gaming hardware Growth (%)": -99.73271751048446
    },
    {
        "Month": 9,
        "Year": 2023,
        "Camera": 1584140.471264368,
        "Game CD_DVD": 290219.9770114943,
        "Entertainment": 2117450.0229885057,
        "Camera_accessory": 557437.1494252874,
        "Gaming hardware": 479148.7816091954,
        "Camera Growth (%)": 223815.87489845656,
        "Game CD_DVD Growth (%)": 139753.42860307964,
        "Entertainment Growth (%)": 71982.41784900965,
        "Camera_accessory Growth (%)": 114609.85382468422,
        "Gaming hardware Growth (%)": 83305.25010004002
    },
    {
        "Month": 10,
        "Year": 2023,
        "Camera": 2792705.5517241377,
        "Game CD_DVD": 253002.908045977,
        "Entertainment": 2212657.5862068967,
        "Camera_accessory": 391897.7931034483,
        "Gaming hardware": 389615.4252873563,
        "Camera Growth (%)": 76.29153489748069,
        "Game CD_DVD Growth (%)": -12.82374471556217,
        "Entertainment Growth (%)": 4.496331067309805,
        "Camera_accessory Growth (%)": -29.696505963498964,
        "Gaming hardware Growth (%)": -18.685919647159725
    },
    {
        "Month": 11,
        "Year": 2023,
        "Camera": 1881904.0229885057,
        "Game CD_DVD": 252260.62068965516,
        "Entertainment": 1146126.5977011495,
        "Camera_accessory": 287027.5402298851,
        "Gaming hardware": 408197.2873563218,
        "Camera Growth (%)": -32.61358964869493,
        "Game CD_DVD Growth (%)": -0.2933908396764146,
        "Entertainment Growth (%)": -48.20135727978022,
        "Camera_accessory Growth (%)": -26.759592607831014,
        "Gaming hardware Growth (%)": 4.769282955175782
    },
    {
        "Month": 12,
        "Year": 2023,
        "Camera": 2419817.5977011495,
        "Game CD_DVD": 412482.4942528736,
        "Entertainment": 1614854.4597701149,
        "Camera_accessory": 344652.3218390805,
        "Gaming hardware": 695924.643678161,
        "Camera Growth (%)": 28.583475466428137,
        "Game CD_DVD Growth (%)": 63.51442136516905,
        "Entertainment Growth (%)": 40.89669177987138,
        "Camera_accessory Growth (%)": 20.076394607654294,
        "Gaming hardware Growth (%)": 70.48732689658404
    },
    {
        "Month": 1,
        "Year": 2024,
        "Camera": 2247119.4022988505,
        "Game CD_DVD": 234538.0804597701,
        "Entertainment": 1298825.7586206896,
        "Camera_accessory": 316668.5287356322,
        "Gaming hardware": 590767.540229885,
        "Camera Growth (%)": -7.136826989206287,
        "Game CD_DVD Growth (%)": -43.13987048478574,
        "Entertainment Growth (%)": -19.57010424298014,
        "Camera_accessory Growth (%)": -8.119426834012167,
        "Gaming hardware Growth (%)": -15.11041524445671
    },
    {
        "Month": 2,
        "Year": 2024,
        "Camera": 1811472.7816091955,
        "Game CD_DVD": 186841.71264367815,
        "Entertainment": 1201977.3218390804,
        "Camera_accessory": 308196.1379310345,
        "Gaming hardware": 455321.908045977,
        "Camera Growth (%)": -19.386892402957294,
        "Game CD_DVD Growth (%)": -20.336300068028066,
        "Entertainment Growth (%)": -7.456615033910249,
        "Camera_accessory Growth (%)": -2.6754761006487002,
        "Gaming hardware Growth (%)": -22.9270606389786
    },
    {
        "Month": 3,
        "Year": 2024,
        "Camera": 2191804.7816091953,
        "Game CD_DVD": 296089.5632183908,
        "Entertainment": 1449340.1609195403,
        "Camera_accessory": 321956.5517241379,
        "Gaming hardware": 601794.0459770114,
        "Camera Growth (%)": 20.995733629634646,
        "Game CD_DVD Growth (%)": 58.47080345653697,
        "Entertainment Growth (%)": 20.579659415036488,
        "Camera_accessory Growth (%)": 4.464823565109903,
        "Gaming hardware Growth (%)": 32.16891947053955
    },
    {
        "Month": 4,
        "Year": 2024,
        "Camera": 1734216.3103448276,
        "Game CD_DVD": 248010.01149425286,
        "Entertainment": 1181023.2068965517,
        "Camera_accessory": 304380.5517241379,
        "Gaming hardware": 604103.8505747126,
        "Camera Growth (%)": -20.877245779544843,
        "Game CD_DVD Growth (%)": -16.23817847597527,
        "Entertainment Growth (%)": -18.513042090322926,
        "Camera_accessory Growth (%)": -5.459121706291489,
        "Gaming hardware Growth (%)": 0.38381978238936976
    },
    {
        "Month": 5,
        "Year": 2023,
        "Camera": 2149565.356321839,
        "Game CD_DVD": 292965.7126436782,
        "Entertainment": 1301235.8390804597,
        "Camera_accessory": 365180.7586206897,
        "Gaming hardware": 704263.4827586206,
        "Camera Growth (%)": 23.950244470623417,
        "Game CD_DVD Growth (%)": 18.12656710048459,
        "Entertainment Growth (%)": 10.178685014987831,
        "Camera_accessory Growth (%)": 19.97506297697211,
        "Gaming hardware Growth (%)": 16.57986984996395
    },
    {
        "Month": 6,
        "Year": 2024,
        "Camera": 1537227.2758620689,
        "Game CD_DVD": 203217.58620689655,
        "Entertainment": 1159358.1149425288,
        "Camera_accessory": 268507.8275862069,
        "Gaming hardware": 479529.8850574713,
        "Camera Growth (%)": -28.486599798368218,
        "Game CD_DVD Growth (%)": -30.634344758950842,
        "Entertainment Growth (%)": -10.90330590941849,
        "Camera_accessory Growth (%)": -26.472624516040334,
        "Gaming hardware Growth (%)": -31.910443066118
    },
    {
        "Month": 7,
        "Year": 2024,
        "Camera": 12108.655172413793,
        "Game CD_DVD": 971.4367816091954,
        "Entertainment": 5141.436781609195,
        "Camera_accessory": 1101.9655172413793,
        "Gaming hardware": 1387.4597701149426,
        "Camera Growth (%)": -99.21230546955893,
        "Game CD_DVD Growth (%)": -99.52197208925601,
        "Entertainment Growth (%)": -99.55652729598015,
        "Camera_accessory Growth (%)": -99.58959650184217,
        "Gaming hardware Growth (%)": -99.7106625023071
    }
];
  
  // Monthly data for product subcategories
  export const subcategoryMonthlyData: SubcategoryData[] =[
    {
        "Month": 7,
        "Year": 2023,
        "AmplifierReceiver revenue": 7389.241379310345,
        "AmplifierReceiver growth": 0.0,
        "AudioAccessory revenue": 11770.781609195403,
        "AudioAccessory growth": 0.0,
        "AudioMP3Player revenue": 89849.66666666667,
        "AudioMP3Player growth": 0.0,
        "CameraAccessory revenue": 4.022988505747127,
        "CameraAccessory growth": 0.0,
        "CameraStorage revenue": 12579.19540229885,
        "CameraStorage growth": 0.0,
        "GameMembershipCards revenue": 1.9540229885057472,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 128553.72413793103,
        "Game_monthly growth": 0.0,
        "GamingAccessory revenue": 126100.40229885057,
        "GamingAccessory growth": 0.0,
        "GamingConsole revenue": 88834.27586206897,
        "GamingConsole growth": 0.0,
        "HomeAudio revenue": 36.195402298850574,
        "HomeAudio growth": 0.0,
        "HomeTheatre revenue": 50.57471264367816,
        "HomeTheatre growth": 0.0,
        "Camera revenue": 530079.7586206896,
        "Camera growth": 0.0,
        "Speaker revenue": 17.896551724137932,
        "Speaker growth": 0.0,
        "TVVideoSmall revenue": 3.160919540229885,
        "TVVideoSmall growth": 0.0
    },
    {
        "Month": 8,
        "Year": 2023,
        "AmplifierReceiver revenue": 29.310344827586206,
        "AmplifierReceiver growth": -640314.0,
        "AudioAccessory revenue": 8.275862068965518,
        "AudioAccessory growth": -1023338.0,
        "AudioMP3Player revenue": 630.8620689655172,
        "AudioMP3Player growth": -7762036.0,
        "CameraAccessory revenue": 196815.0804597701,
        "CameraAccessory growth": 17122562.0,
        "CameraStorage revenue": 99.42528735632185,
        "CameraStorage growth": -1085740.0,
        "GameMembershipCards revenue": 36.747126436781606,
        "GameMembershipCards growth": 3027.0,
        "Game_monthly revenue": 207.51724137931035,
        "Game_monthly growth": -11166120.0,
        "GamingAccessory revenue": 537.7241379310345,
        "GamingAccessory growth": -10923953.0,
        "GamingConsole revenue": 36.758620689655174,
        "GamingConsole growth": -7725384.0,
        "HomeAudio revenue": 32.18390804597701,
        "HomeAudio growth": -349.0,
        "HomeTheatre revenue": 11768.137931034482,
        "HomeTheatre growth": 1019428.0,
        "Camera revenue": 707.471264367816,
        "Camera growth": -46055389.0,
        "Speaker revenue": 522542.8505747126,
        "Speaker growth": 45459671.0,
        "TVVideoSmall revenue": 139338.75862068965,
        "TVVideoSmall growth": 12122197.0
    },
    {
        "Month": 9,
        "Year": 2023,
        "AmplifierReceiver revenue": 28268.137931034482,
        "AmplifierReceiver growth": 2456778.0,
        "AudioAccessory revenue": 28111.885057471263,
        "AudioAccessory growth": 2445014.0,
        "AudioMP3Player revenue": 276929.7471264368,
        "AudioMP3Player growth": 24038003.0,
        "CameraAccessory revenue": 386.5287356321839,
        "CameraAccessory growth": -17089284.0,
        "CameraStorage revenue": 40101.03448275862,
        "CameraStorage growth": 3480140.0,
        "GameMembershipCards revenue": 259.7241379310345,
        "GameMembershipCards growth": 19399.0,
        "Game_monthly revenue": 290219.9770114943,
        "Game_monthly growth": 25231084.0,
        "GamingAccessory revenue": 275142.5977011494,
        "GamingAccessory growth": 23890624.0,
        "GamingConsole revenue": 204006.183908046,
        "GamingConsole growth": 17745340.0,
        "HomeAudio revenue": 219438.11494252874,
        "HomeAudio growth": 19088316.0,
        "HomeTheatre revenue": 73787.97701149425,
        "HomeTheatre growth": 5395726.0,
        "Camera revenue": 1584140.471264368,
        "Camera growth": 137758671.0,
        "Speaker revenue": 1479.9310344827586,
        "Speaker growth": -45332474.0,
        "TVVideoSmall revenue": 290.71264367816093,
        "TVVideoSmall growth": -12097180.0
    },
    {
        "Month": 10,
        "Year": 2023,
        "AmplifierReceiver revenue": 7081.942528735633,
        "AmplifierReceiver growth": -1843199.0,
        "AudioAccessory revenue": 18271.02298850575,
        "AudioAccessory growth": -856155.0,
        "AudioMP3Player revenue": 195055.1724137931,
        "AudioMP3Player growth": -7123088.0,
        "CameraAccessory revenue": 517336.1149425287,
        "CameraAccessory growth": 44974614.0,
        "CameraStorage revenue": 25042.94252873563,
        "CameraStorage growth": -1310054.0,
        "GameMembershipCards revenue": 182.98850574712642,
        "GameMembershipCards growth": -6676.0,
        "Game_monthly revenue": 253002.908045977,
        "Game_monthly growth": -3237885.0,
        "GamingAccessory revenue": 197934.93103448275,
        "GamingAccessory growth": -6717067.0,
        "GamingConsole revenue": 191680.49425287356,
        "GamingConsole growth": -1072335.0,
        "HomeAudio revenue": 447.8735632183908,
        "HomeAudio growth": -19052151.0,
        "HomeTheatre revenue": 12817.67816091954,
        "HomeTheatre growth": -5304416.0,
        "Camera revenue": 2792705.5517241377,
        "Camera growth": 105145162.0,
        "Speaker revenue": 1011025.3448275862,
        "Speaker growth": 87830451.0,
        "TVVideoSmall revenue": 338419.3793103448,
        "TVVideoSmall growth": 29417194.0
    },
    {
        "Month": 11,
        "Year": 2023,
        "AmplifierReceiver revenue": 6843.632183908046,
        "AmplifierReceiver growth": -20733.0,
        "AudioAccessory revenue": 18305.94252873563,
        "AudioAccessory growth": 3038.0,
        "AudioMP3Player revenue": 136491.5172413793,
        "AudioMP3Player growth": -5095038.0,
        "CameraAccessory revenue": 366854.8505747126,
        "CameraAccessory growth": -13091870.0,
        "CameraStorage revenue": 16611.896551724138,
        "CameraStorage growth": -733501.0,
        "GameMembershipCards revenue": 41.5632183908046,
        "GameMembershipCards growth": -12304.0,
        "Game_monthly revenue": 252260.62068965516,
        "Game_monthly growth": -64579.0,
        "GamingAccessory revenue": 160955.16091954024,
        "GamingAccessory growth": -3217240.0,
        "GamingConsole revenue": 247242.1264367816,
        "GamingConsole growth": 4833862.0,
        "HomeAudio revenue": 422927.3908045977,
        "HomeAudio growth": 36755718.0,
        "HomeTheatre revenue": 30094.494252873563,
        "HomeTheatre growth": 1503083.0,
        "Camera revenue": 1881904.0229885057,
        "Camera growth": -79239733.0,
        "Speaker revenue": 1174619.91954023,
        "Speaker growth": 14232728.0,
        "TVVideoSmall revenue": 304719.7011494253,
        "TVVideoSmall growth": -2931872.0
    },
    {
        "Month": 12,
        "Year": 2023,
        "AmplifierReceiver revenue": 6408.045977011494,
        "AmplifierReceiver growth": -37896.0,
        "AudioAccessory revenue": 19747.183908045976,
        "AudioAccessory growth": 125388.0,
        "AudioMP3Player revenue": 230431.3563218391,
        "AudioMP3Player growth": 8172766.0,
        "CameraAccessory revenue": 270415.6436781609,
        "CameraAccessory growth": -8390211.0,
        "CameraStorage revenue": 19449.632183908045,
        "CameraStorage growth": 246883.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 412482.4942528736,
        "Game_monthly growth": 13939303.0,
        "GamingAccessory revenue": 186294.9540229885,
        "GamingAccessory growth": 2204562.0,
        "GamingConsole revenue": 509629.6896551724,
        "GamingConsole growth": 22827718.0,
        "HomeAudio revenue": 439121.8505747126,
        "HomeAudio growth": 1408918.0,
        "HomeTheatre revenue": 15830.954022988506,
        "HomeTheatre growth": -1240928.0,
        "Camera revenue": 2419817.5977011495,
        "Camera growth": 46798481.0,
        "Speaker revenue": 527585.0459770114,
        "Speaker growth": -56292034.0,
        "TVVideoSmall revenue": 175495.06896551725,
        "TVVideoSmall growth": -11242543.0
    },
    {
        "Month": 1,
        "Year": 2024,
        "AmplifierReceiver revenue": 6265.103448275862,
        "AmplifierReceiver growth": -12436.0,
        "AudioAccessory revenue": 17782.620689655174,
        "AudioAccessory growth": -170917.0,
        "AudioMP3Player revenue": 140740.24137931035,
        "AudioMP3Player growth": -7803127.0,
        "CameraAccessory revenue": 325202.6896551724,
        "CameraAccessory growth": 4766473.0,
        "CameraStorage revenue": 21040.94252873563,
        "CameraStorage growth": 138444.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 234538.0804597701,
        "Game_monthly growth": -15481164.0,
        "GamingAccessory revenue": 198667.2988505747,
        "GamingAccessory growth": 1076394.0,
        "GamingConsole revenue": 392100.2413793103,
        "GamingConsole growth": -10225062.0,
        "HomeAudio revenue": 268587.7126436782,
        "HomeAudio growth": -14836470.0,
        "HomeTheatre revenue": 12215.574712643678,
        "HomeTheatre growth": -314538.0,
        "Camera revenue": 2247119.4022988505,
        "Camera growth": -15024743.0,
        "Speaker revenue": 782839.5977011494,
        "Speaker growth": 22207146.0,
        "TVVideoSmall revenue": 205075.89655172414,
        "TVVideoSmall growth": 2573532.0
    },
    {
        "Month": 2,
        "Year": 2024,
        "AmplifierReceiver revenue": 4922.0114942528735,
        "AmplifierReceiver growth": -116849.0,
        "AudioAccessory revenue": 17924.172413793105,
        "AudioAccessory growth": 12315.0,
        "AudioMP3Player revenue": 137347.24137931035,
        "AudioMP3Player growth": -295191.0,
        "CameraAccessory revenue": 295627.5862068966,
        "CameraAccessory growth": -2573034.0,
        "CameraStorage revenue": 20719.287356321838,
        "CameraStorage growth": -27984.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 186839.75862068965,
        "Game_monthly growth": -4149754.0,
        "GamingAccessory revenue": 175157.7356321839,
        "GamingAccessory growth": -2045332.0,
        "GamingConsole revenue": 280164.1724137931,
        "GamingConsole growth": -9738438.0,
        "HomeAudio revenue": 340257.8850574713,
        "HomeAudio growth": 6235305.0,
        "HomeTheatre revenue": 45988.41379310345,
        "HomeTheatre growth": 2938237.0,
        "Camera revenue": 1811472.7816091955,
        "Camera growth": -37901256.0,
        "Speaker revenue": 643131.2413793104,
        "Speaker growth": -12154627.0,
        "TVVideoSmall revenue": 167402.4827586207,
        "TVVideoSmall growth": -3277587.0
    },
    {
        "Month": 3,
        "Year": 2024,
        "AmplifierReceiver revenue": 4851.9885057471265,
        "AmplifierReceiver growth": -6092.0,
        "AudioAccessory revenue": 19647.563218390806,
        "AudioAccessory growth": 149935.0,
        "AudioMP3Player revenue": 171224.67816091955,
        "AudioMP3Player growth": 2947337.0,
        "CameraAccessory revenue": 287476.8505747126,
        "CameraAccessory growth": -709114.0,
        "CameraStorage revenue": 19055.80459770115,
        "CameraStorage growth": -144723.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 296052.816091954,
        "Game_monthly growth": 9501536.0,
        "GamingAccessory revenue": 205740.85057471265,
        "GamingAccessory growth": 2660731.0,
        "GamingConsole revenue": 396053.1954022989,
        "GamingConsole growth": 10082345.0,
        "HomeAudio revenue": 307673.1149425287,
        "HomeAudio growth": -2834875.0,
        "HomeTheatre revenue": 24859.919540229886,
        "HomeTheatre growth": -1838179.0,
        "Camera revenue": 2191804.7816091953,
        "Camera growth": 33088884.0,
        "Speaker revenue": 579338.3908045978,
        "Speaker growth": -5549978.0,
        "TVVideoSmall revenue": 148427.2988505747,
        "TVVideoSmall growth": -1650841.0
    },
    {
        "Month": 4,
        "Year": 2024,
        "AmplifierReceiver revenue": 4833.068965517241,
        "AmplifierReceiver growth": -1646.0,
        "AudioAccessory revenue": 22388.919540229886,
        "AudioAccessory growth": 238498.0,
        "AudioMP3Player revenue": 134909.5632183908,
        "AudioMP3Player growth": -3159415.0,
        "CameraAccessory revenue": 302900.7471264368,
        "CameraAccessory growth": 1341879.0,
        "CameraStorage revenue": 19658.77011494253,
        "CameraStorage growth": 52458.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 247750.28735632185,
        "Game_monthly growth": -4202320.0,
        "GamingAccessory revenue": 191949.80459770115,
        "GamingAccessory growth": -1199821.0,
        "GamingConsole revenue": 412154.0459770115,
        "GamingConsole growth": 1400774.0,
        "HomeAudio revenue": 301802.632183908,
        "HomeAudio growth": -510732.0,
        "HomeTheatre revenue": 21353.80459770115,
        "HomeTheatre growth": -305032.0,
        "Camera revenue": 1734216.3103448276,
        "Camera growth": -39810197.0,
        "Speaker revenue": 751712.9655172414,
        "Speaker growth": 14996588.0,
        "TVVideoSmall revenue": 194480.4827586207,
        "TVVideoSmall growth": 4006627.0
    },
    {
        "Month": 5,
        "Year": 2024,
        "AmplifierReceiver revenue": 5467.770114942528,
        "AmplifierReceiver growth": 55219.0,
        "AudioAccessory revenue": 23405.011494252874,
        "AudioAccessory growth": 88400.0,
        "AudioMP3Player revenue": 119768.32183908045,
        "AudioMP3Player growth": -1317288.0,
        "CameraAccessory revenue": 284721.7816091954,
        "CameraAccessory growth": -1581570.0,
        "CameraStorage revenue": 19715.80459770115,
        "CameraStorage growth": 4962.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 292782.724137931,
        "Game_monthly growth": 3917822.0,
        "GamingAccessory revenue": 219966.67816091955,
        "GamingAccessory growth": 2437468.0,
        "GamingConsole revenue": 484296.8045977011,
        "GamingConsole growth": 6276420.0,
        "HomeAudio revenue": 261434.06896551725,
        "HomeAudio growth": -3512065.0,
        "HomeTheatre revenue": 23393.2183908046,
        "HomeTheatre growth": 177429.0,
        "Camera revenue": 2149565.356321839,
        "Camera growth": 36135367.0,
        "Speaker revenue": 562977.9310344828,
        "Speaker growth": -16419948.0,
        "TVVideoSmall revenue": 237628.85057471265,
        "TVVideoSmall growth": 3753908.0
    },
    {
        "Month": 6,
        "Year": 2024,
        "AmplifierReceiver revenue": 4067.4597701149423,
        "AmplifierReceiver growth": -121827.0,
        "AudioAccessory revenue": 18900.701149425287,
        "AudioAccessory growth": -391875.0,
        "AudioMP3Player revenue": 131473.40229885056,
        "AudioMP3Player growth": 1018342.0,
        "CameraAccessory revenue": 345464.9540229885,
        "CameraAccessory growth": 5284656.0,
        "CameraStorage revenue": 15847.494252873563,
        "CameraStorage growth": -336543.0,
        "GameMembershipCards revenue": 0.0,
        "GameMembershipCards growth": 0.0,
        "Game_monthly revenue": 203176.02298850575,
        "Game_monthly growth": -7795783.0,
        "GamingAccessory revenue": 183307.71264367815,
        "GamingAccessory growth": -3189330.0,
        "GamingConsole revenue": 296222.1724137931,
        "GamingConsole growth": -16362493.0,
        "HomeAudio revenue": 193424.9540229885,
        "HomeAudio growth": -5916793.0,
        "HomeTheatre revenue": 209.6206896551724,
        "HomeTheatre growth": -2016973.0,
        "Camera revenue": 1537227.2758620689,
        "Camera growth": -53273413.0,
        "Speaker revenue": 654070.7126436782,
        "Speaker growth": 7925072.0,
        "TVVideoSmall revenue": 276239.4482758621,
        "TVVideoSmall growth": 3359122.0
    }
];
  
  // Monthly data for top products
  export const topProductsMonthlyData: TopProductsData[] = [
    {
        "month": 5,
        "year": 2023,
        "HomeAudioSpeaker": 36.195402298850574
    },
    {
        "month": 6,
        "year": 2023,
        "HomeAudioSpeaker": 32.18390804597701,
        "LaptopSpeaker": 17.896551724137932,
        "CameraAccessory": 4.022988505747127,
        "VideoGlasses": 3.160919540229885
    },
    {
        "month": 7,
        "year": 2023,
        "MobileSpeaker": 329760.2873563218,
        "DSLR": 286807.1034482759,
        "Point & Shoot": 212686.33333333334,
        "LaptopSpeaker": 191785.55172413794,
        "HomeAudioSpeaker": 161449.93103448275,
        "PhysicalGame": 128553.72413793103,
        "AudioMP3Player": 89849.66666666667,
        "Lens": 81230.49425287357,
        "SelectorBox": 78119.14942528735,
        "GamingConsole": 67355.06896551725
    },
    {
        "month": 8,
        "year": 2023,
        "MobileSpeaker": 1135.1494252873563,
        "AudioMP3Player": 630.8620689655172,
        "DSLR": 563.2183908045977,
        "GamePad": 372.48275862068965,
        "LaptopSpeaker": 344.7816091954023,
        "HomeAudioSpeaker": 236.7471264367816,
        "PhysicalGame": 207.51724137931035,
        "Lens": 184.28735632183907,
        "Point & Shoot": 144.2528735632184,
        "SelectorBox": 124.2183908045977
    },
    {
        "month": 9,
        "year": 2023,
        "MobileSpeaker": 1135.1494252873563,
        "AudioMP3Player": 630.8620689655172,
        "DSLR": 563.2183908045977,
        "GamePad": 372.48275862068965,
        "LaptopSpeaker": 344.7816091954023,
        "HomeAudioSpeaker": 236.7471264367816,
        "PhysicalGame": 207.51724137931035,
        "Lens": 184.28735632183907,
        "Point & Shoot": 144.2528735632184,
        "SelectorBox": 124.2183908045977
    },
    {
        "month": 10,
        "year": 2023,
        "DSLR": 2225416.114942529,
        "MobileSpeaker": 699106.540229885,
        "Point & Shoot": 533043.459770115,
        "LaptopSpeaker": 434083.3563218391,
        "HomeAudioSpeaker": 356120.0459770115,
        "PhysicalGame": 238813.01149425286,
        "SelectorBox": 204789.89655172414,
        "AudioMP3Player": 195055.1724137931,
        "Lens": 148769.24137931035,
        "GamingConsole": 102104.81609195402
    },
    {
        "month": 11,
        "year": 2023,
        "DSLR": 1526396.5747126436,
        "Point & Shoot": 322033.5057471264,
        "MobileSpeaker": 283742.3793103448,
        "PhysicalGame": 246922.6551724138,
        "LaptopSpeaker": 238758.4827586207,
        "HomeAudioSpeaker": 216640.908045977,
        "GamingConsole": 205752.4827586207,
        "AudioMP3Player": 136491.5172413793,
        "Lens": 113926.25287356322,
        "SelectorBox": 106151.54022988505
    },
    {
        "month": 12,
        "year": 2023,
        "DSLR": 1990510.471264368,
        "MobileSpeaker": 457917.1149425287,
        "GamingConsole": 407318.5862068966,
        "PhysicalGame": 406213.4137931034,
        "Point & Shoot": 362172.5632183908,
        "LaptopSpeaker": 315313.1264367816,
        "HomeAudioSpeaker": 286628.3563218391,
        "AudioMP3Player": 230431.3563218391,
        "Lens": 143036.14942528735,
        "VideoPlayer": 109730.70114942528
    },
    {
        "month": 1,
        "year": 2024,
        "DSLR": 1926237.9655172413,
        "MobileSpeaker": 404574.5632183908,
        "GamingConsole": 323912.8505747126,
        "Point & Shoot": 261205.2068965517,
        "HomeAudioSpeaker": 255878.80459770115,
        "PhysicalGame": 229295.66666666666,
        "LaptopSpeaker": 222174.2183908046,
        "AudioMP3Player": 140740.24137931035,
        "Lens": 124063.55172413793,
        "GamePad": 79894.10344827586
    },
    {
        "month": 2,
        "year": 2024,
        "DSLR": 1509888.5862068965,
        "MobileSpeaker": 337396.3563218391,
        "HomeAudioSpeaker": 248968.66666666666,
        "Point & Shoot": 245208.9655172414,
        "LaptopSpeaker": 217080.72413793104,
        "GamingConsole": 210105.06896551725,
        "PhysicalGame": 181668.22988505746,
        "AudioMP3Player": 137347.24137931035,
        "Lens": 102769.05747126437,
        "HandheldGamingConsole": 70059.10344827586
    },
    {
        "month": 3,
        "year": 2024,
        "DSLR": 1872143.3908045976,
        "MobileSpeaker": 492986.9310344828,
        "GamingConsole": 310479.5287356322,
        "PhysicalGame": 287008.8390804598,
        "Point & Shoot": 246817.0804597701,
        "LaptopSpeaker": 206222.97701149425,
        "HomeAudioSpeaker": 205486.6551724138,
        "AudioMP3Player": 171224.67816091955,
        "Lens": 129234.24137931035,
        "SelectorBox": 101090.3908045977
    },
    {
        "month": 4,
        "year": 2024,
        "DSLR": 1416741.5402298851,
        "MobileSpeaker": 346444.8045977011,
        "GamingConsole": 328060.8045977011,
        "Point & Shoot": 246553.6091954023,
        "PhysicalGame": 239078.7816091954,
        "LaptopSpeaker": 184525.44827586206,
        "SelectorBox": 154055.2528735632,
        "AudioMP3Player": 134909.5632183908,
        "HomeAudioSpeaker": 131752.55172413794,
        "Lens": 108085.54022988505
    },
    {
        "month": 5,
        "year": 2024,
        "DSLR": 1798487.5862068965,
        "MobileSpeaker": 449789.5057471264,
        "GamingConsole": 408788.9885057471,
        "PhysicalGame": 284650.7931034483,
        "Point & Shoot": 279763.1034482759,
        "SelectorBox": 173423.14942528735,
        "LaptopSpeaker": 172121.44827586206,
        "Lens": 155527.75862068965,
        "HomeAudioSpeaker": 154610.01149425286,
        "AudioMP3Player": 119768.32183908045
    },
    {
        "month": 6,
        "year": 2024,
        "DSLR": 1245095.4137931035,
        "MobileSpeaker": 392337.2988505747,
        "GamingConsole": 258510.0459770115,
        "Point & Shoot": 236004.5747126437,
        "PhysicalGame": 193099.62068965516,
        "SelectorBox": 148257.7471264368,
        "HomeAudioSpeaker": 135397.0459770115,
        "LaptopSpeaker": 134034.5632183908,
        "AudioMP3Player": 131473.40229885056,
        "Lens": 110504.08045977012
    },
    {
        "month": 7,
        "year": 2024,
        "DSLR": 10933.103448275862,
        "MobileSpeaker": 2178.8505747126437,
        "Point & Shoot": 1081.9080459770114,
        "PhysicalGame": 897.5632183908046,
        "HomeAudioSpeaker": 748.4137931034483,
        "SelectorBox": 620.7931034482758,
        "LaptopSpeaker": 557.735632183908,
        "GamingConsole": 419.18390804597703,
        "GamePad": 345.5287356321839,
        "Lens": 266.4597701149425
    }
];
  
  // Yearly aggregated data for categories (for full year view)
  export const categoryYearlyData: YearlyData =  {
    "Camera": 1817679641,
    "Game CD_DVD": 243544437,
    "Entertainment": 1364269399,
    "Camera_accessory": 319889200,
    "Gaming hardware": 489424022
};
  
  // Yearly aggregated data for subcategories (for full year view)
  export const subcategoryYearlyData: YearlyData = {
    "AmplifierReceiver revenue": 86427.72,
    "AudioAccessory revenue": 216264.66,
    "AudioMP3Player revenue": 1764660.40,
    "CameraAccessory revenue": 3193172.37,
    "CameraStorage revenue": 229933.74,
    "GameMembershipCards revenue": 522.98,
    "Game_monthly revenue": 2797855.44,
    "GamingAccessory revenue": 2121733.43,
    "GamingConsole revenue": 3502414.42,
    "HomeAudio revenue": 2755172.48,
    "HomeTheatre revenue": 272356.46,
    "Camera revenue": 20879208.97,
    "Speaker revenue": 7211238.37,
    "TVVideoSmall revenue": 2181740.20
};
  // Yearly aggregated data for top 10 products (for full year view)
  export const topProductsYearlyData: YearlyData =   
    {
    "DSLR": 16471236.08,
    "MobileSpeaker": 4605635.08,
    "Point & Shoot": 3384634.42,
    "GamingConsole": 2652663.08,
    "LaptopSpeaker": 2544488.84,
    "HomeAudioSpeaker": 2402697.18,
    "PhysicalGame": 2376931.01,
    "AudioMP3Player": 1634542.99,
    "Lens": 1423261.38,
    "SelectorBox": 1229350.78
};

  
  
  // Top performing categories (percentages)
  export const topPerformingCategories = [
    { name: "Camera", revenue: 1780718983/80 },
    { name: "Speaker", revenue: 641916280/80 },
    { name: "CameraAccessory", revenue: 286582190/80 },
    { name: "GamingConsole", revenue: 283441063/80 },
    { name: "HomeAudio", revenue: 267372939/80 },
    { name:"HomeTheatre",revenue: 23696222/80},
    { name:"TVVideoSmall",revenue: 190314348/80},
    { name:"AudioMP3Player",revenue: 153542104/80}
    
  ];
  
  // Top category revenues
  export const topCategoryRevenues = [
    { name: "Camera", revenue: 1780718983 },
    { name: "Speaker", revenue: 641916280 },
    { name: "CameraAccessory", revenue: 286582190 },
    { name: "GamingConsole", revenue: 283441063 },
    { name: "HomeAudio", revenue: 267372939 }
  ];
  
  // Recommended focus products
  export const recommendedFocusProducts = [
    {
      rank: 1,
      product: "SoundMixer",
      growth: 120,
      reason: ""
    },
    {
      rank: 2,
      product: "Softbox",
      growth: 93,
      reason: ""
    },
    {
      rank: 3,
      product: "SlingBox",
      growth: 40,
      reason: ""
    },

    {
        rank: 4,
        product: "SelectorBox",
        growth: 28,
        reason: ""
      },

      {
        rank: 5,
        product: "RemoteControl",
        growth: 27,
        reason: ""
      }
  ];

  
// Helper functions for data processing
export function getCategoryDataForMonth(month: string): ProcessedCategoryData[] {
    const monthParts = month.split(' ');
    const monthName = monthParts[0];
    const yearSuffix = monthParts[1];
    const fullYear = parseInt(`20${yearSuffix}`);
    
    // Convert month name to number
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNumber = monthNames.indexOf(monthName) + 1;
    
    // Find data for the specified month
    const monthData = categoryMonthlyData.find(
      item => item.Month === monthNumber && item.Year === fullYear
    );
    
    if (!monthData) return [];
    
    // Transform to chart format
    return [
      { name: "Camera", revenue: monthData.Camera, growth: monthData["Camera Growth (%)"] },
      { name: "Game CD/DVD", revenue: monthData["Game CD_DVD"], growth: monthData["Game CD_DVD Growth (%)"] },
      { name: "Entertainment", revenue: monthData.Entertainment, growth: monthData["Entertainment Growth (%)"] },
      { name: "Camera Accessory", revenue: monthData.Camera_accessory, growth: monthData["Camera_accessory Growth (%)"] },
      { name: "Gaming Hardware", revenue: monthData["Gaming hardware"], growth: monthData["Gaming hardware Growth (%)"] }
    ];
}
  
export function getSubcategoryDataForMonth(month: string): ProcessedSubcategoryData[] {
    const monthParts = month.split(' ');
    const monthName = monthParts[0];
    const yearSuffix = monthParts[1];
    const fullYear = parseInt(`20${yearSuffix}`);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNumber = monthNames.indexOf(monthName) + 1;
    
    // Find data for the specified month
    const monthData = subcategoryMonthlyData.find(
      item => item.Month === monthNumber && item.Year === fullYear
    );
    
    if (!monthData) return [];
    
    // Extract subcategory data for revenue only
    const subcategories: ProcessedSubcategoryData[] = [];
    
    // Get all revenue fields
    Object.keys(monthData).forEach(key => {
      if (key.includes('revenue')) {
        const subcategoryName = key.replace(' revenue', '');
        
        subcategories.push({
          name: subcategoryName,
          revenue: monthData[key] as number
        });
      }
    });
    
    // Sort by revenue (descending)
    return subcategories.sort((a, b) => b.revenue - a.revenue).slice(0, 10);
}
  
export function getTopProductsForMonth(month: string): ProcessedSubcategoryData[] {
    const monthParts = month.split(' ');
    const monthName = monthParts[0];
    const yearSuffix = monthParts[1];
    const fullYear = parseInt(`20${yearSuffix}`);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNumber = monthNames.indexOf(monthName) + 1;
    
    // Find data for the specified month
    const monthData = topProductsMonthlyData.find(
      item => item.month === monthNumber && item.year === fullYear
    );
    
    if (!monthData) return [];
    
    // Extract product data
    const products: ProcessedSubcategoryData[] = [];
    
    // Get all product fields (exclude month and year)
    Object.keys(monthData).forEach(key => {
      if (key !== 'month' && key !== 'year') {
        products.push({
          name: key,
          revenue: monthData[key] as number
        });
      }
    });
    
    // Sort by revenue (descending)
    return products.sort((a, b) => b.revenue - a.revenue).slice(0, 10);
}
  
// Functions for yearly data
export function getCategoryDataForYear(): ProcessedCategoryData[] {
    // Since we don't have growth data directly in yearlyData, we'll use placeholder values
    return [
      { name: "Camera", revenue: categoryYearlyData["Camera"], growth: 5 },
      { name: "Game CD/DVD", revenue: categoryYearlyData["Game CD_DVD"], growth: 3 },
      { name: "Entertainment", revenue: categoryYearlyData["Entertainment"], growth: 4 },
      { name: "Camera Accessory", revenue: categoryYearlyData["Camera_accessory"], growth: 6 },
      { name: "Gaming Hardware", revenue: categoryYearlyData["Gaming hardware"], growth: 7 }
    ];
}
  
export function getSubcategoryDataForYear(): ProcessedSubcategoryData[] {
    const subcategories: ProcessedSubcategoryData[] = [];
    
    // Get all revenue fields
    Object.keys(subcategoryYearlyData).forEach(key => {
      if (key.includes('revenue')) {
        const subcategoryName = key.replace(' revenue', '');
        
        subcategories.push({
          name: subcategoryName,
          revenue: subcategoryYearlyData[key]
        });
      }
    });
    
    // Sort by revenue (descending)
    return subcategories.sort((a, b) => b.revenue - a.revenue).slice(0, 10);
}
  
export function getTopProductsForYear(): ProcessedSubcategoryData[] {
    const products: ProcessedSubcategoryData[] = [];
    
    // Get all product fields
    Object.keys(topProductsYearlyData).forEach(key => {
      products.push({
        name: key,
        revenue: topProductsYearlyData[key]
      });
    });
    
    // Sort by revenue (descending)
    return products.sort((a, b) => b.revenue - a.revenue).slice(0, 10);
}




