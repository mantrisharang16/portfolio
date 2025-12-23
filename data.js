/* 
  PORTFOLIO DATA DOCUMENTATION
  ============================
  This file drives the entire content of your website.
  You can edit the `portfolioData` object below to update text, images, projects, and links.
  
  Images/Files:
  - Place all your images and files in a folder named 'assets' in the same directory as index.html
  - Reference them as 'assets/filename.jpg' or 'assets/resume.pdf'
*/

const portfolioData = {
    // 1. General Info (Photo, Name, Intro)
    general: {
        name: "Sharang Mantri",
        role: "Investment Management & Quantitative Finance | CFA L3 Candidate\nMS Finance UIUC-Gies (STEM - 4.0 GPA) | IIT Bombay Economics",
        aboutText: `
            I am a driven finance professional bridging the gap between traditional <b>Investment Management</b> and modern <b>Quantitative Analytics</b>. I recently graduated with a Master of Science in Finance from the <b>University of Illinois Urbana-Champaign</b> (4.0 GPA), following my undergraduate studies in Economics at the prestigious <b>IIT Bombay</b>.
            <br><br>
            My approach is results-oriented. As an Equity Research Analyst & Trader, I engineered strategies that achieved a <b>45% relative outperformance</b> vs. the benchmark in the fiscal year. I have passed <b>CFA Levels 1 & 2 on my first attempts</b> and am currently a Level 3 Candidate.
            <br><br>
            I am actively looking to contribute to high-performance teams within <b>Fundamental Analysis</b>, <b>Quantitative Finance</b>, or <b>Corporate Strategy</b>, applying data-driven insights to actionable investment theses.
	    <br><br>
	    When I’m not analyzing charts, I enjoy mountain hiking and watching football.
        `,
        // Replace with your photo path (e.g., 'assets/profile.jpg')
        photoUrl: "assets/Img1.jpg",
        // Optional: Embed URL or path to video. If empty, video button won't show.
        introVideoUrl: "",
    },

    // 2. Social Links (Icons: LinkedIn, Gmail, etc.)
    // iconName options: 'linkedin', 'github', 'email', 'calendar', 'blog', 'globe' (website)
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/sharangmantri/", iconName: "linkedin" },
        // You can add multiple emails with different icons
        { name: "Gmail", url: "https://mail.google.com/mail/?view=cm&fs=1&to=mantrisharang2000@gmail.com", iconName: "gmail" },
        { name: "Outlook", url: "https://outlook.office.com/mail/deeplink/compose?to=smantri3@illinois.edu", iconName: "outlook" },
        { name: "Schedule Meet", url: "https://calendly.com/mantrisharang2000/30min", iconName: "calendar" },
        //{ name: "My Blog", url: "https://medium.com", iconName: "blog" },
    ],

    // 3. Resumes (Add multiple versions)
    // isExternal: true if it's a link (e.g. Google Drive), false if it's a local file in assets/
    resumes: [
        { title: "Resume 1", url: "assets/SharangMantri_Resume.pdf", isExternal: false },
        { title: "Resume 2", url: "assets/SharangMantri_Resume2.pdf", isExternal: false },
        { title: "View on Drive", url: "https://drive.google.com/drive/folders/1UbhpWr-dMYo5G5Z-zqM-2Gc7gEmQbVdA?usp=sharing", isExternal: true },
    ],

    // 4. Projects (The core portfolio)
    // classifications: Array of strings. New values here automatically create new filter buttons.
    // files: Files to view directly. type: 'pdf', 'image', or 'link'.
    projects: [
        {
            id: 1,
            title: "Real-Client Portfolio Management",
            date: "January 2025 - December 2025", // Date added
            classifications: ["Financial Modeling", "Quantitative Finance", "Investment Management", "Economic Analysis", "Data Science & ML"],
            image: "",
            shortDesc: "Managed Real-Client $500K equity portfolio using Quantamental Top-Down approach",
            description: [
                "Forecasted 6–9 month business cycles using custom econometric and ML model estimating inflation and growth trends in the US economy ",
                "Screened equities using macro regime signals to identify sectors projected to outperform, aligning portfolio exposure with the current business cycle phase",
                "Executed rigorous fundamental and quantitative analysis, including 10-year DCF modeling and Monte Carlo simulations, to deliver high-conviction strategic recommendations for the $500K portfolio",
                "Oversaw the healthcare sector strategy, pitching a high-conviction long position in Eli Lilly ($LLY) at end of April-2025 to capture growth opportunities",
                "Optimized portfolio risk by reducing Technology exposure and rotating capital into Consumer Staples (PepsiCo, $PEP) for defensive positioning in Dec-2025"
            ],
            files: [
                { name: "Economic Model Part 1", url: "assets/Group3_APM.pptx", type: "ppt" },
                { name: "Healthcare Sector Client Presentation", url: "assets/JnJ&Abbv.pptx", type: "ppt" },
                { name: "Healthcare Sector Equity Client Report", url: "assets/FIN 589 JNJ & ABBV Group Report 1.pdf", type: "pdf" },
                { name: "Tech Sector Client Presentation ", url: "assets/Tech Team Client Presentation.pdf", type: "pdf" },
                { name: "Tech Sector Equity Client Report", url: "assets/Fin 589 Tech Team.pdf", type: "pdf" },
                { name: "DCF Model Drive Links", url: "https://drive.google.com/drive/folders/1Jq0zuS0XenruBcERUlQmpLU9Y_AGmE8o?usp=sharing", type: "google" }
            ]
        },
        {
            id: 2,
            title: "Deutsche Bank, Manch 4.0 ",
            date: "October 2020 - May 2021",
            classifications: ["Financial Modeling", "Economic Analysis", "Data Science & ML"],
            image: "",
            shortDesc: "Risk-Return Analyzation through CAPM for Developing And Developed Markets; Soft Skills training",
            description: [
                "Selected among the top 10% of 500+ applicants to complete 20+ hours of comprehensive training by Deutsche Bank professionals, gaining expertise in financial concepts, advanced MS Excel, and corporate soft skills",
                "Assessed CAPM methodology, alpha calculations, and beta estimation irregularities for developed and emerging markets",
                "Engineered and deployed an enhanced Beta estimation model to correct CAPM irregularities, achieving superior accuracy in emerging financial markets",
                "Challenged theoretical market models by evaluating practical alternatives for 10+ NSE companies, delivering actionable risk-return insights"
            ],
            files: [
                { name: "Confidential - Files Unavailable due to NDA", url: "#", type: "lock" }
            ]
        },
        {
            id: 3,
            title: "Investment Clock Analyzation",
            date: "August 2025 - October 2025", // Date added
            classifications: ["Quantitative Finance", "Investment Management", "Economic Analysis", "Data Science & ML", "Academic Research"],
            image: "",
            shortDesc: "Tracking asset class performances over 30+ year of business cycles for various equity sectors, and countries",
            description: [
                "Designed a robust asset allocation strategy utilizing macroeconomic signals (OECD G7 leading indicator, Global Inflation) to dynamically classify market regimes into Reflation, Inflation, Stagflation, and Deflation ",
                "Analyzed performance of different asset classes during different market regimes from Jan 1990",
                "Discovered Equities, emerging markets, and SP500 as the top performer during reflation; equities, emerging market and SP1500 to be leading during inflationary period",
                "Found that bonds and cash as only positive asset classes during stagflation and deflation with defensive countries like Japan performing better",
                "Tracked performance of different equity sectors during the four business cycle regimes",
                "Created a snail-trail index as a leading indicator of the economic growth and inflation"
            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Investment-Clock" }
            ],
            files: [
                { name: "Investment Clock Pdf", url: "assets/SharangMantri_InvestmentClock_Fin589.pdf", type: "pdf" },
                { name: "Investment Clock Presentation", url: "assets/mantrisharang_Fin589.pptx", type: "ppt" },
            ]
        },
        {
            id: 4,
            title: "Undergraduate Research Thesis on movment of INR/USD",
            date: "September 2022 - July 2023", // Date added
            classifications: ["Economic Analysis", "Data Science & ML", "Academic Research"],
            image: "",
            shortDesc: "Advanced Econometric analysis of Effect of Macroeconomic variables on Movement of INR/USD",
            description: [
                "Researched the effect of various macroeconomic variables on the value of INR/USD over both long and short-run periods. Used monthly time series between the time period of March 1997 to April 2023 ",
                "Discovered and analyzed the research gap in the field of study",
                "Extrapolated using various statistical and econometric techniques like Augmented Dickey-Fuller test (ADF), Johansen Cointegration test, and Vector Error Correction Model (VECM) to determine the effect of macroeconomic variables on the value of INR/USD and used Lagrange-multiplier test and Eigenvalue stability condition to test the stability of the model",
                "Researched the movement of INR/USD during global shocks using dummy variables to find the effect of the same variables on the movement of INR/USD for periods of East-Asia Crisis, Dot-Com Bubble, Global Financial Crisis, Taper Tantrum, US Fed rate hike of 2018, Covid 1st and 2nd wave and post covid economic crisis as a result of high inflation",
                "Determine that Gold Prices, CPI India, India’s Foreign Exchange, and India’s 10-year Treasury Yield appreciate INR as they increase while Nifty 50, India’s M3, and Brent Crude Prices depreciate INR as they increase vis-s-vis USD in the long run"

            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Undergraduate-Research-Thesis" }
            ],
            files: [
                { name: "Undergraduate Research Thesis", url: "assets/SharangMantri_ThesisReport.pdf", type: "pdf" },
                { name: "Research Thesis Presentation", url: "assets/SharangMantri_ThesisPPT.pptx", type: "ppt" },
            ]
        },

        {
            id: 5,
            title: "Valuation of Complex Derivative via Black-Scholes",
            date: "February 2025", // Date added
            classifications: ["Quantitative Finance"],
            image: "",
            shortDesc: "Valuation of Dual-Directional Buffered PLUS linked to SP500 maturing in Feb 2027 using Black-Scholes model ",
            description: [
                "Reverse-Engineered Structured Note: Deconstructed a Morgan Stanley 424B2 filing to isolate the zero-coupon bond floor and embedded derivative components (e.g., Barrier Options, Digital Call/Put) for component-based valuation",
                "Pricing Model Implementation: Developed a Python-based Black-Scholes pricing engine to value the embedded exotic options, accounting for dividend yields, implied volatility surfaces, and time-to-maturity",
                "Sensitivity & Risk Analysis: Quantified the note's sensitivity to market variables by calculating The Greeks (Delta, Gamma, Vega, Theta), analyzing how the mark-to-market value fluctuates with the underlying asset's performance",
                "Fair Value Determination: Compared the model-derived theoretical price against the issuer's offering price to determine the implied credit spread and structuring fee embedded in the product",

            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Valuation-of-Complex-Derivative-via-Black-Scholes" }
            ],

            files: [
                { name: "Valuation & Sensitivity Report", url: "assets/ValuationProject_mantrisharang.pdf", type: "pdf" },
                { name: "Product Termsheet", url: "assets/Termsheet_Project1.pdf", type: "pdf" },

            ]
        },
        {
            id: 6,
            title: "Valuation of Oracle ($ORCL) Contingent Income Issuer Callable Yield Notes",
            date: "March 2025", // Date added
            classifications: ["Quantitative Finance"],
            image: "",
            shortDesc: "Binomial valuation of BofA Finance Structured Notes linked to Oracle ($ORCL) with 11.65% p.a. contingent coupon ",
            description: [
                "Term Sheet Reverse-Engineering: Deconstructed a BofA Finance 424B2 filing for a Contingent Income Issuer Callable Yield Note, extracting critical parameters: 11.65% p.a. contingent coupon, 65% Coupon Barrier ($110.47), and quarterly observation logic",
                "Binomial Pricing Engine: Engineered a Multi-Step Binomial Asset Pricing Model (BAPM) in Python to value the Oracle Corporation (ORCL) derivative, implementing backward induction to handle the specific American-style early redemption and barrier options",
                "Modeled the payoff structure to quantify the trade-off between the high fixed yield (11.65%) and the 1:1 downside exposure if ORCL falls below the 65% Threshold Value at maturity",
                "Conducted rigorous sensitivity analysis on time-step granularity ($N=50$ to $N=2000$), demonstrating pricing convergence and numerical stability for the path-dependent barrier features",

            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Valuation-of-Oracle-ORCL-Contingent-Income-Issuer-Callable-Yield-Notes" }
            ],

            files: [
                { name: "Valuation & Sensitivity Report", url: "assets/ValuationReprt_Project2.pdf", type: "pdf" },
                { name: "Product Termsheet", url: "assets/Termsheet_Project2.pdf", type: "pdf" },

            ]
        },
        {
            id: 7,
            title: "Valuation of Lockheed Martin ($LMT) Barrier Notes with Memory Coupon",
            date: "April 2025", // Date added
            classifications: ["Quantitative Finance"],
            image: "",
            shortDesc: "Monte Carlo valuation of HSBC Autocallable Notes linked to $LMT with 6.60% p.a. Memory Coupon ",
            description: [
                "Term Sheet Analysis: Deconstructed an HSBC USA Inc. 424B2 filing for Autocallable Contingent Income Barrier Notes linked to Lockheed Martin (LMT), isolating the 70% Downside Barrier ($365.32) and the path-dependent 'Memory Coupon' feature",
                "Monte Carlo Pricing Engine: Developed a Python-based Monte Carlo simulation (1,000,000 paths) to price the path-dependent Memory Coupon, explicitly tracking 'missed coupons' state to model the conditional payout structure upon barrier satisfaction",
                "Volatility Surface Calibration: Calibrated the model using varying Implied Volatility (IV) inputs (22.04% to 26.77%) corresponding to different moneyness levels (100% to 70%) to capture the volatility skew's impact on barrier breach probability",
                "Fair Value Distribution: Generated fair value distribution histograms and time-dependent sensitivity plots to quantify the impact of observation timing and volatility shifts on the note's theoretical price (Mean Estimate: ~$970.81)",

            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Valuation-of-Lockheed-Martin-LMT-Barrier-Notes-with-Memory-Coupon" }
            ],

            files: [
                { name: "Valuation & Sensitivity Report", url: "assets/ValuationReport_Project3.pdf", type: "pdf" },
                { name: "Product Termsheet", url: "assets/Termsheet_Project3.pdf", type: "pdf" },

            ]
        },
        {
            id: 8,
            title: "Chicago Cook County Housing Market Predictive Modeling",
            date: "October 2025 - November 2025 ",
            classifications: ["Data Science & ML", "Quantitative Finance"],
            image: "",
            shortDesc: "Ensemble machine learning approach to predict Cook County housing prices with high accuracy",
            description: [
                "Processed raw property data using R (dplyr), implementing robust imputation strategies for demographics and amenities, and engineered critical features like 'Average District Price' via target encoding to capture geospatial value variance",
                "Trained and evaluated multiple predictive models including Linear Regression (Baseline), Neural Networks (nnet with Min-Max scaling), and Random Forest to minimize RMSE and MAPE",
                "Deployed a Random Forest Regressor (500 trees) as the final model, achieving superior predictive stability by capturing non-linear relationships between property characteristics (e.g., SqFt, Age, O'Hare Noise)",
                "Conducted variable importance analysis to identify key price drivers, revealing that location-based metrics and building size were dominant determinants of assessed value"
            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/Cook-County-House-Valuation" }
            ],
            files: [
                { name: "Project Report", url: "assets/FIN550_Final_Report_House for $900___.pdf", type: "pdf" },
            ]
        },

        {
            id: 9,
            title: "High-Precision American Put Pricing via Leisen-Reimer Model",
            date: "March 2025",
            classifications: ["Quantitative Finance", "Data Science & ML"],
            image: "",
            shortDesc: "Implementation of Leisen-Reimer (LR) binomial tree for accurate American Put valuation",
            description: [
                "Advanced Tree Implementation: Engineered the Leisen–Reimer (LR) binomial model in Python to price American Put Options, utilizing inversion formulas to adjust probability measures for faster convergence compared to standard CRR trees",
                "Early Exercise Handling: Implemented backward induction algorithms (Dynamic Programming) to capture the American early exercise premium at every node of the lattice",
                "Convergence Analysis: Conducted rigorous error profiling by benchmarking low-step models (N=50 to 800) against a high-precision baseline (N=10,001), demonstrating the superior stability and accuracy of the LR method",
                "Numerical Efficiency: Optimized the discretization process to minimize pricing oscillations, achieving <0.05% error rates with significantly fewer time steps than traditional methods"
            ],
            links: [
                { text: "View Code (GitHub)", url: "https://github.com/mantrisharang16/High-Precision-American-Put-Pricing-via-Leisen-Reimer-Model" }
            ],
            files: [
                { name: "Project Report", url: "assets/PS3.pdf", type: "pdf" },
                { name: "Problem Set Questions", url: "assets/PS3.docx", type: "doc" },
                { name: "Python Notebook", url: "assets/PS3.ipynb", type: "code" }
            ]
        },

        {
            id: 10,
            title: "Strategic Equity Valuation: Home Depot vs. Lowe's",
            date: "April 2025",
            classifications: ["Financial Modeling", "Investment Management", "Economic Analysis"],
            image: "",
            shortDesc: "Comparative equity research report pitch for Home Depot ($HD) vs. Lowe's ($LOW)",
            description: [
                "Built 10-year independent DCF models for both Home Depot and Lowe's, projecting free cash flows based on macroeconomic drivers and company-specific operational efficiency",
                "Conducted comparable company analysis using forward P/E, EV/EBITDA, and P/S multiples to benchmark valuation against industry peers and historical averages",
                "Performed a detailed DuPont analysis and Normalized ROIC decomposition to isolate drivers of superior capital efficiency",
                "Synthesized quantitative valuation outputs with qualitative risk assessment to issue a Buy call on Lowe's and sell call on Home Depot, presented in a comprehensive equity research report and pitch deck"
            ],
            files: [
                { name: "Equity Valuation Report", url: "assets/FIN529_Group17_Home Depot_V_Lowe's.pdf", type: "pdf" },
                { name: "Equity Valuation Presentation", url: "assets/Fin529_Grp17.pptx", type: "ppt" },
                { name: "DCF Model Drive Links", url: "https://drive.google.com/drive/folders/1Es35ZjAO8p2H1PpXOtVfRiRTfEXLkUWD?usp=sharing", type: "google" },

            ]
        },
        {
            id: 11,
            title: "Integrated Three-Statement Financial Model",
            date: "September 2024",
            classifications: ["Financial Modeling"],
            image: "",
            shortDesc: "Dynamic three-statement model with interconnected debt schedules and balancing mechanisms",
            description: [
                "Built a fully dynamic financial model linking Income Statement, Balance Sheet, and Cash Flow Statement, ensuring automated flow of net income, D&A, and changes in working capital across all schedules",
                "Engineered complex debt waterfalls with circularity switches to accurately calculate interest expense based on average balances, incorporating mandatory amortization and cash flow sweeps",
                "Implemented robust error-handling mechanisms and 'balance check' flags throughout the model to ensure accounting identity integrity under all sensitivity scenarios",
                "Developed flexible projection drivers for revenue growth, COGS margins, and SG&A efficiency to simulate various operational states"
            ],
            links: [],
            files: [
                { name: "3-Statement Model Drive Link", url: "https://drive.google.com/drive/folders/1h8Gz8NL2cxSt68kdNNocDRDqNWdcO3Q5?usp=sharing", type: "google" }
            ]
        },
        {
            id: 12,
            title: "Leveraged Buyout (LBO) Scenario Analysis",
            date: "October 2024",
            classifications: ["Financial Modeling"],
            image: "",
            shortDesc: "Comprehensive LBO model analyzing exit returns across multiple strategic scenarios",
            description: [
                "Modeled a hypothetical leveraged buyout, defining sources and uses of funds, purchase price allocation, and pro-forma impacts to structure the deal with optimal debt/equity mix",
                "Created a dynamic dashboard to toggle between Base, Bull, and Bear cases, stress-testing IRR and MOIC against variations in EBITDA margins, revenue growth, and exit multiples",
                "Analyzed returns across different holding periods (1-10 years) and exit valuation methodologies to determine the optimal monetization timeline for the private equity sponsor",
                "Projected detailed free cash flow generation to assess the target's ability to service high-yield debt obligations and achieve deleveraging targets prior to exit"
            ],
            links: [],
            files: [
                { name: "DCF Model Drive Links", url: "https://drive.google.com/drive/folders/1B1i014tcxcE-9gfajfqb9DnGOpqzdq_0?usp=sharing", type: "google" }
            ]
        },
        {
            id: 13,
            title: "Critical Analysis of Poverty Eradication in India: Impact of Financial Inclusion	",
            date: "January 2021 - April 2021", // Date added
            classifications: ["Economic Analysis", "Data Science & ML", "Academic Research"],
            image: "",
            shortDesc: "Econometric analysis of the impact of financial inclusion and government policies on poverty headcount ratio",
            description: [
                "Critically evaluated the efficacy of financial inclusion policies across three distinct developmental phases (Pre-Independence, Post-Independence, and Post-1991 Liberalization) to assess their structural impact on poverty reduction ",
                "Deployed rigorous time-series techniques including Augmented Dickey-Fuller (ADF) for stationarity, Johansen Cointegration tests, and Vector Error Correction Models (VECM) to isolate long-run equilibrium relationships in state-level data",
                "Quantified the statistical significance of key macroeconomic variables, establishing that GSDP growth, Crisil Financial Inclusion Index, and Social Sector Expenditure are primary drivers of reducing the Poverty Headcount Ratio",
                "Revealed strong negative correlations between poverty levels and Rural Gini Coefficients/Secondary Enrollment Ratios, providing empirical evidence for targeting multidimensional poverty interventions"

            ],
            files: [
                { name: "Research Report", url: "assets/Eradication of Poverty.pdf", type: "pdf" },
                { name: "Research Presentation", url: "assets/Indian Economy Group 6.pptx", type: "ppt" },
            ]
        },
        {
            id: 14,
            title: "Corporate Sustainability Framework & Environmental Auditing",
            date: "August 2020 - November 2020",
            classifications: ["Economic Analysis", "ESG & Sustainability"],
            image: "",
            shortDesc: "Strategic analysis of Managed Sustainable Development (MSD) practices and environmental auditing frameworks",
            description: [
                "Analyzed the 'Managed Sustainable Development' (MSD) framework for ITC (NSE: ITC), highlighting how integration of renewable energy (40.9% of total mix) and lifecycle assessment methodologies drive carbon neutrality in large-scale manufacturing",
                "Evaluated Greenhouse Gas (GHG) accounting protocols, verifying the abatement of 9,747 tonnes of CO2 through efficiency interventions like installation of Vapour Absorption Machines (VAM)",
                "Designed a comprehensive environmental audit protocol distinguishing between 'Compliance Audits' (regulatory adherence) and 'Performance Audits' (efficiency optimization) to benchmark industrial processes against national standards",
                "Formulated policy recommendations for closing the circular economy loop, emphasizing the auditing of waste generation and water intake specific targets to ensure long-term ecosystem stability"
            ],
            links: [],
            files: [
                { name: "ITC Sustainability Report (PDF)", url: "assets/Sustanablity_ESG_ITC.pdf", type: "pdf" },
                { name: "ESG Auditing Framework (PDF)", url: "assets/ESG_EnviromentalAuditing.pdf", type: "pdf" }
            ]
        },
        {
            id: 15,
            title: "Statistical and Economic Impact Analysis of Pradhan Mantri Jan Dhan Yojna (PMJDY)",
            date: "August 2020 - December 2020", // Date added
            classifications: ["Economic Analysis", "Academic Research"],
            image: "",
            shortDesc: "Critical statistical evaluation of India's flagship financial inclusion scheme and its socioeconomic multiplier effects",
            description: [
                "Critically and statistically examined the PMJDY since its inception, analyzing the trajectory of 500+ million new 'Zero-Balance' accounts to quantify the reduction in the unbanked population ",
                "Evaluated the scheme's role as the foundational infrastructure for Direct Benefit Transfers (DBT), assessing its impact on leakage reduction in diverse government welfare programs",
                "Formulated data-driven policy improvements focused on digital literacy and credit penetration to transition passive account holders into active participants in the formal financial system",

            ],
            files: [
                { name: "Research Report", url: "assets\PMJDY.docx", type: "doc" },

            ]
        },

        {
            id: 16,
            title: "International Development & Trade Analysis: MENA & Israel",
            date: "August 2020 - November 2020",
            classifications: ["Economic Analysis", "Academic Research"],
            image: "",
            shortDesc: "Dual-study on MENA developmental economics and Israel's trade competitiveness",
            description: [
                "Analyzed the socioeconomic evolution of the Middle East & North Africa region (1950-2019), assessing macro-indicators like GDP density, water scarcity, and rising inequality (Gini coefficients) to map the region's structural challenges",
                "Investigated the correlation between hydrocarbon abundance and Human Development metrics, highlighting how weak intra-regional trade and high youth unemployment stifle inclusive growth across the region",
                "Evaluated Israel's decadal trade balance to identify comparative advantages across key export sectors, utilizing wage growth differentials to forecast labor market trends relative to its primary trading partner, the USA",
                "Formulated data-driven policy recommendations addressing the 'Resource Curse' in the MENA region through economic diversification, while contrasting it with trade competitiveness strategies in high-tech open economies"
            ],
            links: [],
            files: [
                { name: "MENA Term Paper", url: "assets/MENA_TermPaper.pdf", type: "pdf" },
                { name: "Israel Trade Analysis", url: "assets/Trade_Comp.pdf", type: "pdf" }
            ]
        },
        {
            id: 17,
            title: "Game Theory Analysis: Sequential Cournot Duopoly",
            date: "March 2023 - April 2023",
            classifications: ["Game Theory", "Economic Analysis"],
            image: "",
            shortDesc: "Mathematical modeling of First-Mover Advantage in quantity competition using Backward Induction",
            description: [
                " Modeled a modified Cournot Duopoly where firms compete sequentially rather than simultaneously, using Backward Induction to derive the reaction function of the follower (Firm 2) and optimize the leader's (Firm 1) quantity strategy",
                "Proved mathematically that the 'First-Mover Advantage' (Stackelberg Leadership) yields strictly higher profits for the leader firm compared to the standard simultaneous Cournot equilibrium, irrespective of marginal cost differentials",
                "Demonstrated that the Sequential Game results in higher total market economic output (Q* > Qc) across all three tested marginal cost scenarios (C1=C2, q1*=q2*, π1*=π2*), benefiting consumer surplus",
                "Applied theoretical findings to real-world oligopolies (Airline Hubs, OPEC oil production, Pepsico & Coca-Cola), illustrating how dominant market players set quantities to force follower compliance and maximize sector-wide efficiency"
            ],
            links: [],
            files: [
                { name: "Game Theory Report", url: "assets/IE 616 - Project.pdf", type: "pdf" },
                { name: "Project Presentation", url: "assets/IE616-Presentation.pptx", type: "ppt" }
            ]
        },

    ],

    // 5. Work Experience (New Section)
    experience: [
        {
            role: "Equity Research Analyst and Trader",
            company: "Shree Financial Services",
            //logo: "https://via.placeholder.com/100", // Optional: Company logo
            date: "July 2023 - July 2024",
            description: [
                "Analyzed 50+ public equities across Banking and Infrastructure sectors utilizing Bloomberg Terminal, Capital IQ, and Python to screen for high-potential opportunities based on fundamental growth drivers and valuation disconnects",
                "Constructed comprehensive financial models including 10-year DCFs and Football Field (sensitivity) analysis to facilitate data-driven portfolio rebalancing, directly optimizing asset allocation strategies for high-net-worth clients",
                "Engineered a proprietary trading strategy capitalizing on cyclical and seasonal stock trends, successfully delivering a 45% relative outperformance (450 bps Alpha) over the Nifty 50 benchmark in Fiscal Year 2024",
                "Executed rigorous ongoing portfolio monitoring and risk assessment to ensure strict adherence to investment mandates, proactively mitigating drawdown risks during periods of market volatility"
            ]
        },
        {
            role: "Research Analyst Intern",
            company: "Shree Financial Services",
            code: "RES-101", // Optional field if needed
            date: "May 2022 - Julu 2023",
            description: [
                "Conducted comprehensive fundamental and quantitative analysis on 30+ publicly listed companies, utilizing statistical frameworks like CAPM to evaluate cost of capital and risk-adjusted return potential",
                "Applied advanced econometric time-series analysis to model financial market trends, directly supporting the senior investment team in formulating thesis-driven long/short equity strategies",
                "Executed a multivariate regression analysis quantifying the impact of 10+ macroeconomic variables (e.g., Interest Rates, Inflation) on INR/USD and INR/EUR valuation, optimizing hedging strategies for international asset portfolios"
            ]
        },
        {
            role: "Financial Analyst Internship",
            company: "Opulence Business Solutions ",
            //logo: "https://via.placeholder.com/100", // Optional: Company logo
            date: "May 2021 - August 2021",
            description: [
                "Conducted a rigorous diagnostic of the asset management landscape, evaluating 5 key macro-micro drivers to pinpoint structural inefficiencies and opportunities for technological disruption in traditional hedge fund operations ",
                "Developed integrated financial models using Python and Excel for a client's Fintech Hedge Fund launch, simulating multiple scenarios to forecast the financial impact of acquisition strategies and AUM scale-up ",
                "Formulated a strategic roadmap for implementing automated fintech solutions, delivering recommendations designed to streamline legacy workflows and drive sustainable, long-term revenue growth"
            ]
        },
        {
            role: "Business Development Analyst Intern",
            company: "CoolAge App  ",
            //logo: "https://via.placeholder.com/100", // Optional: Company logo
            date: "June 2020 - August 2020",
            description: [
                "Deployed advanced econometric frameworks and financial modeling to identify 3+ structural growth opportunities, providing the quantitative data necessary to validate the startup's expansion strategy",
                "Catalyzed institutional interest from Venture Capital firms by translating raw growth metrics into a compelling investment narrative, directly supporting the strategic fundraising efforts for future scalability"


            ]
        },

    ],

    // 6. Education
    education: [
        {
            degree: "Master of Science in Finance (STEM Designated)",
            institution: "University of Illinois at Urbana-Champaign",
            logo: "assets/UIUC_Logo.png", // Path to logo in assets
            date: "Dec 2025",
            details: [
                "<b>Major:</b> Financial Mathematics",
                "<b>GPA:</b> 4.0/4.0",
                "<b>Specialization:</b> Investment Management",
                "<b>Coursework:</b> Financial Modeling, Financial Engineering, Real-Client Portfolio Management, Python for Finance, Big Data Analytics, ML for Finance, Financial Derivatives, Financial Economics, Managing Market Risk, Applied Financial Analysis, Professional Development",


            ],
            // Optional: Highlights or skills specific to this degree
        },
        {
            degree: "Bachelor of Science in Economics",
            institution: "Indian Institute of Technology, Bombay (IITB)",
            logo: "assets/iitb_logo.png",
            date: "July 2023",
            details: [
                "<b>Major:</b> Economics",
                "<b>Entrance Exam:</b> JEE Advanced All India Rank (AIR) 1458 (Top 0.62%) among 230k students",
                "<b>Thesis:</b> Econometric and Fundamental Analysis of Macroeconomic factors affecting INR/USD",
                "<b>Coursework:</b> Game Theory, Statistics, Econometrics, C++, Mathematics for Economics, Macroeconomics, Microeconomics, Industrial Economics, International Economics, Development Economics, Energy Economics, Healthcare Economics, Advanced Calculus, Linear Algebra, Differential Equations, Quantum Physics"
            ]
        }
    ],

    // 6. Leadership (Text based, no images/files)
    leadership: [
        {
            title: "General Secretary, Economics & HSS Department, IIT Bombay",
            role: "University Student Council",
            date: "April, 2021 - June, 2022",
            description: [
                "Selected after a thorough election process and led a team of 15+ students for diverse intra- and inter-departmental initiatives during tenure",
                "Represented the Academic, Research, and Cultural interests of 200+ students in the Institute Academic Council, spearheading protocols for the safe return of students to campus post-pandemic",
                "Managed successful organization of department valedictory function, freshman orientation, internship drives, and career development workshops for students in sophomore and junior year",
                "Coordinated with department mentorship and student support committees to assist students facing academic or personal challenges, particularly those transitioning to campus life for the first time"
            ]
        },
        {
            title: "General Secretary Student Association, Economics & HSS Department, IIT Bombay",
            role: "Department Student Council",
            date: "August, 2020 - April, 2021",
            description: [
                "Assisted General Secretary in leading a team of 10+ students responsible for academic and cultural reforms in the department",
                "Launched ‘RUPEE’ a research undergraduate program for in semester research promotion among undergraduate students",
                "Relaunched the department magazine ‘KAUTILYA’ in semester format and planned the proper execution of 1st online semester by acting as a bridge between the department students and professors and organizing various online activities during the Covid pandemic",

            ]
        },
        {
            title: "Associate Secretary, Economics & HSS Department, IIT Bombay",
            role: "Department Student Council",
            date: "April, 2019 - July, 2020",
            description: [
                "Part of the 5-member Department’s first-ever student body responsible for academic reform and cultural promotion among students",
                "Negotiated various deals while successfully conducting various department events saving up to 40% of the initial budget",
                "Launched ‘Summer of Economics’, a mentor-mentee-based program for continuous learning of students during covid pandemic",
                "Ideated and Published the weekly Economics magazine ‘Econ Weekly’ and launched the department student support website"

            ]
        },


    ],

    // 7. Skills (Global tag cloud)
    skills: [
        "Financial Modeling", "Python", "Derivatives Pricing", "Portfolio Management",
        "Valuation (DCF/LBO/Comps)", "Risk Management", "Equity Research",
        "Econometrics", "R Language", "Asset Allocation Strategy",
        "Bloomberg Terminal", "Monte Carlo Simulation", "Machine Learning",
        "SQL", "Corporate Finance", "Stochastic Calculus", "Economic Analysis"
    ],

    // 8. Certifications & Awards
    certifications: [
        {
            title: "CFA Program Level 2",
            issuer: "CFA Institute",
            date: "October 9, 2025",
            image: "assets/CFA2.png",
            description: "Passed Level 2 on the first attempt.<br>Credential ID: 163558725"
        },
        {
            title: "CFA Program Level 1",
            issuer: "CFA Institute",
            date: "April 3, 2025",
            image: "assets/CFA1.png",
            description: "Passed Level 1 on the first attempt.<br>Credential ID: 139041416"
        },
        {
            title: "MSF Academic Excellence Award",
            issuer: "Gies College of Business-University of Illinois Urbana-Champaign",
            date: "December 2025",
            // You can add multiple images here using the 'images' array (instead of just 'image')
            images: [
                "assets/Certificate.jpeg",
                "assets/Medal Front.jpeg", // Replace with 2nd image path
                "assets/Medal Back.jpeg"  // Replace with 3rd image path
            ],
            description: "Graduated Top of my Masters in Finance Program with GPA of 4.0/4.0"
        },
        {
            title: "Beta Gamma Sigma Member",
            issuer: "Beta Gamma Sigma International Business Honor Society",
            date: "July 2025",
            image: "assets/BGS Member Badge.png",
            description: "International Business Honor Society recognizing top 20% of Master's students."
        },
        {
            title: "Phi Kappa Phi Member",
            issuer: "Honor Society of Phi Kappa Phi",
            date: "July 2025",
            image: "assets/stack_4c.png",
            description: "Nation's oldest and most selective all-discipline honor society (Top 7.5% of class)."
        }

    ]
};
