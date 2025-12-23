
varsoc exchange_rate in 40/340
dfuller exchange_rate in 40/340, trend lags(2) /// Non-Stationary
dfuller Dif_Exc_Rate in 40/240   /// Stationary

varsoc gold in 40/340
dfuller gold in 40/340, trend lags(3)
dfuller Dif_Gold in 40/340

varsoc wti_crude in 40/340
dfuller wti_crude in 40/340, trend lags(2)
dfuller Dif_WTI_Price in 40/340

varsoc CPI_India in 40/340
dfuller CPI_India in 40/340, trend lags(3)
dfuller Dif_CPI_Ind in 40/340

varsoc nifty_50 in 40/340
dfuller nifty_50 in 40/340, trend lags(3)
dfuller Dif_Nifty50 in 40/340

varsoc FX_Res in 40/340
dfuller FX_Res in 40/340, trend lags(2)
dfuller Dif_Fx_Res in 40/340

varsoc Treasury_Yield_10Year_India in 40/340
dfuller Treasury_Yield_10Year_India in 40/340, lags(4)
dfuller Dif_10yr_yield_Ind in 40/340

varsoc Treasury_Yield_USA in 40/340
dfuller Treasury_Yield_USA in 40/340, lags(1)
dfuller Dif_10yr_yield_USA in 40/340

varsoc DollarIndex in 40/340
dfuller DollarIndex in 40/340, lags(2)
dfuller Dif_Dollar_Index in 40/340

varsoc exchange_rate gold wti_crude CPI_India nifty_50 FX_Res Treasury_Yield_10Year_India Treasury_Yield_USA USA_3_Month_Treasury_Yield DollarIndex in 28/340
vecrank exchange_rate gold wti_crude CPI_India nifty_50 FX_Res Treasury_Yield_10Year_India Treasury_Yield_USA USA_3_Month_Treasury_Yield DollarIndex in 28/340, lags(2)
vec EXCHANGE_RATE GOLD_PRICES WTI_PRICES Change_CPI_India NIFTY_50 FX_RESERVE change_10yr_yield_Ind change_10yr_yield_USA change_3month_yield_USA change_Dollar_Index in 28/340, trend(constant) lags(2)



varsoc exchange_rate gold wti_crude CPI_India nifty_50 FX_Res Treasury_Yield_10Year_India _Month_Treasury_Yield_India Treasury_Yield_USA USA_3_Month_Treasury_Yield DollarIndex in 28/340
vecrank exchange_rate gold wti_crude CPI_India nifty_50 FX_Res Treasury_Yield_10Year_India _Month_Treasury_Yield_India Treasury_Yield_USA USA_3_Month_Treasury_Yield DollarIndex in 28/340, lags(2)
vec EXCHANGE_RATE GOLD_PRICES WTI_PRICES Change_CPI_India NIFTY_50 FX_RESERVE change_10yr_yield_Ind change_3month_yield_Ind change_10yr_yield_USA change_3month_yield_USA change_Dollar_Index in 28/340, trend(constant) lags(2)rank(1)

varsoc lgEx lgGold  lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 28/340
vecrank lgEx lgGold  lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 28/340,lags(2)
vec lgEx lgGold lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 28/340,lags(2)rank(1)
vec lgEx lgGold lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 28/340,lags(2)rank(1) si( D_Asian_Crisis D_DotCom D_TwinTowerAttack D_GFC D_Eurozone_IndHighInf D_TaperTantrum D_RBIFed_OppositeMovment_15_16 D_FedHike2018 D_Covid1stWave D_Covid2ndWave DumPost_Covid )

varsoc lgEx lgGold  lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA  lgExport in 27/340
vecrank lgEx lgGold  lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 27/340,lags(2)
vec lgEx lgGold  lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgExport in 27/340,lags(2)


varsoc lgEx lgGold lgBrent lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgM3 in 27/340
vecrank lgEx lgGold lgBrent lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgM3 in 27/340,lags(2)
vec lgEx lgGold lgBrent lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgM3 in 27/340,lags(2)
vec lgEx lgGold lgBrent lgCPI_Ind lgNifty50 lgFx lg10yr_India lg10yr_USA lgM3 in 27/340,lags(2)si( D_Asian_Crisis D_DotCom D_TwinTowerAttack D_GFC D_TaperTantrum D_FedHike2018 D_Covid1stWave D_Covid2ndWave DumPost_Covid)


