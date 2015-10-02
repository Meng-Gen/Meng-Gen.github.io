var sections = [
    {
        'title' : '經營能力',
        'contents' : [
            {
                'title' : '杜邦分析',
                'charts' : [ 
                    'dupont_yearly_chart', 
                    'dupont_quarterly_chart',
                ],
            },
        ],
    },
    {
        'title' : '財務結構',
        'contents' : [
            {
                'title' : '資產負債表分析重點',
                'charts' : [
                    'capital_structure_yearly_chart',
                    'capital_structure_quarterly_chart',
                ],
            },
            {
                'title' : '股本形成過程及比例',
                'charts' : [
                    'capital_increase_history_chart',
                ],
            },
        ],
    },
    {
        'title' : '償債能力',
        'contents' : [
            {
                'charts' : [
                    'liquidity_yearly_chart',
                    'liquidity_quarterly_chart',
                ],
            },
        ],
    },
    {
        'title' : '獲利能力',
        'contents' : [
            {
                'title' : '損益表分析重點',
                'charts' : [
                    'profitability_yearly_chart',
                    'profitability_quarterly_chart',
                ],
            },
            {
                'title' : '每月營業收入分析重點',
                'charts' : [
                    'operating_revenue_chart', 
                ],
            },
            {
                'title' : '五大盈餘指標',
                'charts' : [
                    'revenue_index_yearly_chart',
                    'revenue_index_quarterly_chart',
                ],
            },
            {
                'title' : '現金轉換循環',
                'charts' : [
                    'ccc_yearly_chart',
                    'ccc_quarterly_chart',
                ],
            },
        ],
    },
    {
        'title' : '現金流量',
        'contents' : [
            {
                'title' : '現金流量表分析重點',
                'charts' : [
                    'cash_flow_yearly_chart',
                    'cash_flow_quarterly_chart',
                ],
            },
            {
                'title' : '長期投資占總資產比率',
                'charts' : [
                    'long_term_investments_to_assets_ratio_yearly_chart',
                    'long_term_investments_to_assets_ratio_quarterly_chart',
                ],
            },
            {
                'title' : '會計盈餘與營運活動之現金流量之差異分析',
                'charts' : [
                    'net_income_to_operating_activities_yearly_chart',
                    'net_income_to_operating_activities_quarterly_chart',
                ],
            },
            {
                'title' : '股利政策',
                'charts' : [
                    'dividend_policy_chart',
                ],
            },
        ],
    },
];

function makeSections() {
    var rootElement = document.createElement('div');

    for (var i = 0; i < sections.length; i++) {
        var sectionElement = makeSection(sections[i]);
        rootElement.appendChild(sectionElement);
    }
    
    return rootElement;
}

function makeSection(section) {
    var rootElement = document.createElement('div');

    var title = section['title'];
    if (title) {
        var titleElement = document.createElement('h1');
        titleElement.innerHTML = title;
        rootElement.appendChild(titleElement);
    }

    var contents = section['contents'];
    for (var i = 0; i < contents.length; i++) {
        var contentElement = makeContent(contents[i]);
        rootElement.appendChild(contentElement);
    }

    return rootElement;
}

function makeContent(content) {
    var rootElement = document.createElement('div');

    var title = content['title'];
    if (title) {
        var titleElement = document.createElement('h2');
        titleElement.innerHTML = title;
        rootElement.appendChild(titleElement);
    }

    var charts = content['charts'];
    for (var i = 0; i < charts.length; i++) {
        var chartElement = document.createElement('div');
        chartElement.id = charts[i];
        chartElement.className = 'chart';
        rootElement.appendChild(chartElement);
    }

    return rootElement;
}