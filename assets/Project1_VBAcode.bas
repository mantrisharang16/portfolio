Attribute VB_Name = "Module1"
Function PBSval(Price As Double, strikePrice As Double, _
 discountTime As Double, Pricingtime As Double, div As Double, volatility As Double, RiskFreePricing As Double, RiskfreeDisco As Double)

Dim S As Double         'asset price
Dim X As Double      'strike price
Dim r1 As Double       'risk-free Pricing r(T0,T2)
Dim r2 As Double        ' risk-free Discounting r(T1,T3)
Dim T0 As Double        'Pricing Time (T2-T0)
Dim T1 As Double        'Discounting Time (T3-T1)
Dim d As Double         'Dividend Yield
Dim sigma As Double     'Implied Volatility


'set variable values from function parameters (i.e. give variables the values passed by the user)

S = Price
X = strikePrice
r1 = RiskFreePricing
r2 = RiskfreeDisco
T0 = Pricingtime
T1 = discountTime
d = div
sigma = volatility

del1 = (WorksheetFunction.Ln(S / X) + (r1 - d + ((sigma) ^ 2) / 2) * T0) / (sigma * (T0 ^ (1 / 2)))
del2 = del1 - (sigma * (T0 ^ (1 / 2)))

PBSval = Exp(-r2 * T1) * (X * WorksheetFunction.NormSDist(-del2) - S * Exp((r1 - d) * T0) * WorksheetFunction.NormSDist(-del1))

End Function

Function DigPut(Price As Double, Payoff As Double, strikePrice As Double, _
 discountTime As Double, Pricingtime As Double, div As Double, volatility As Double, RiskFreePricing As Double, RiskfreeDisco As Double)
 
 Dim S As Double         'asset price
Dim X As Double      'strike price
Dim r1 As Double       'risk-free Pricing r(T0,T2)
Dim r2 As Double        ' risk-free Discounting r(T1,T3)
Dim T0 As Double        'Pricing Time (T2-T0)
Dim T1 As Double        'Discounting Time (T3-T1)
Dim d As Double         'Dividend Yield
Dim sigma As Double     'Implied Volatility
Dim A As Double         'Payoff of Digital Option


'set variable values from function parameters (i.e. give variables the values passed by the user)

S = Price
X = strikePrice
r1 = RiskFreePricing
r2 = RiskfreeDisco
T0 = Pricingtime
T1 = discountTime
d = div
sigma = volatility
A = Payoff

del1 = (WorksheetFunction.Ln(S / X) + (r1 - d + ((sigma) ^ 2) / 2) * T0) / (sigma * (T0 ^ (1 / 2)))
del2 = del1 - (sigma * (T0 ^ (1 / 2)))

DigPut = Exp(-r2 * T1) * A * WorksheetFunction.NormSDist(-del2)

  
End Function

Function BondVal(Facevalue As Double, RiskfreeDisco As Double, discountTime As Double)

Dim P As Double         'FaceValue of Bond
Dim r2 As Double        ' risk-free Discounting r(T1,T3)
Dim T1 As Double        'Discounting Time (T3-T1)

P = Facevalue
r2 = RiskfreeDisco
T1 = discountTime

BondVal = Exp(-r2 * T1) * P

End Function





