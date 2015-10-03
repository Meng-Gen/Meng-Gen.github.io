function loadConfigSynchronously() {
    var config = '';
    $.ajax({
        dataType: 'json',
        url: 'config.json',
        async: false,  
        success: function(data) {
            config = data; 
        }
    });    
    return config;
}

function getStockSymbol() {
    var url = purl(location.search); 
    return url.param('stock_symbol') || '1101';
}

function initContentTitle() {
    var headerElement = document.createElement('div');
    headerElement.className = 'title';
    headerElement.innerHTML = '財務比率分析 - ' + getStockSymbol();
    var rootElement = document.getElementById('content_div');
    rootElement.appendChild(headerElement);
}

function initContentBody(config) {
    var rootElement = document.getElementById('content_div');
    rootElement.appendChild(makeSections(config));
}

function initContentCharts() {
    var stockSymbol = getStockSymbol();
    makeCapitalStructureChart(stockSymbol, 'yearly');
    makeCapitalStructureChart(stockSymbol, 'quarterly');
    makeCapitalIncreaseHistoryChart(stockSymbol);
    makeCashFlowChart(stockSymbol, 'yearly');
    makeCashFlowChart(stockSymbol, 'quarterly');
    makeCccChart(stockSymbol, 'yearly');
    makeCccChart(stockSymbol, 'quarterly');
    makeDividendPolicy(stockSymbol);
    makeDupontChart(stockSymbol, 'yearly');
    makeDupontChart(stockSymbol, 'quarterly');
    makeLiquidityChart(stockSymbol, 'yearly');
    makeLiquidityChart(stockSymbol, 'quarterly');
    makeLongTermInvestmentsToAssetsRatioChart(stockSymbol, 'yearly');
    makeLongTermInvestmentsToAssetsRatioChart(stockSymbol, 'quarterly');
    makeNetIncomeToOperatingActivitiesChart(stockSymbol, 'yearly');
    makeNetIncomeToOperatingActivitiesChart(stockSymbol, 'quarterly');
    makeOperatingRevenueChart(stockSymbol);
    makeProfitabilityChart(stockSymbol, 'yearly');
    makeProfitabilityChart(stockSymbol, 'quarterly');
    makeRevenueIndex(stockSymbol, 'yearly');
    makeRevenueIndex(stockSymbol, 'quarterly');
}

function initContent(config) {
    initContentTitle();
    initContentBody(config);
    initContentCharts(); 
}

function initSitebar(config) {
    var rootElement = document.getElementById('sidebar_div');
    rootElement.appendChild(makeSidebar(config));
}

function initHeader() {
    var headerElement = document.createElement('div');
    headerElement.className = 'title';
    headerElement.innerHTML = '股市貓';
    var rootElement = document.getElementById('header_div');
    rootElement.appendChild(headerElement);
}

function initFooter() {
    var rootElement = document.getElementById('footer_div');
    var texts = [
        '以上資料僅供參考，本站不負任何法律責任，投資人若依此以為買賣依據，須自負盈虧之責。資料來源：<a target="_blank" href="http://mops.twse.com.tw/">公開資訊觀測站</a>。',
        'Facebook: plover at gmail dot com',
    ];
    for (var i = 0; i < texts.length; i++) {
        var paragraphElement = document.createElement('p');
        paragraphElement.innerHTML = texts[i];
        rootElement.appendChild(paragraphElement);
    }
}

function init() {
    var config = loadConfigSynchronously();
    initHeader();
    initContent(config);
    initSitebar(config);
    initFooter();
}