function makeSidebar(config) {
    var rootElement = document.createElement('div');
    var categories = config['stock_categories'];
    for (var i = 0; i < categories.length; i++) {
        var categoryElement = makeCategory(categories[i]);
        rootElement.appendChild(categoryElement);
    }
    return rootElement;    
}

function makeCategory(category) {
    var rootElement = document.createElement('div');
    rootElement.className = 'category';

    var title = category['title'];
    if (title) {
        var titleElement = document.createElement('h2');
        titleElement.innerHTML = title;
        rootElement.appendChild(titleElement);
    }

    var stockSymbols = category['stock_symbols'];
    for (var i = 0; i < stockSymbols.length; i++) {
        var stockSymbol = stockSymbols[i];
        var stockSymbolElement = document.createElement('a');
        stockSymbolElement.href = '?stock_symbol=' + stockSymbol;
        stockSymbolElement.innerHTML = stockSymbol;
        stockSymbolElement.className = 'button';
        rootElement.appendChild(stockSymbolElement);
    }

    return rootElement;
}
